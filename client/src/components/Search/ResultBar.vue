<template>
  <div class="result-wrapper" @click="clickOutside">
    <div class="container-fluid result-container">
      <p class="error" v-if="errorMsg">{{ errorMsg }}</p>

      <div v-else class="row" v-for="(user, i) in users" :key="i">
        <a class="user" :href="'/profile/' + user.username + '/posts'">
          <div class="userImage">
            <img :src="src + user.profileImage" alt="user-profile" />
          </div>
          <div class="userInfo">
            <p>{{ user.name }}</p>
            <p>@{{ user.username }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    data() {
      return {
        src:
          this.$store.state.user.profileImage.includes("uploads\\") ||
          this.$store.state.user.profileImage.includes("uploads/")
            ? "http://localhost:5000/"
            : "",
      };
    },
    computed: {
      ...mapState(["users", "errorMsg"]),
    },
    methods: {
      clickOutside(e) {
        if (e.target.classList.contains("result-wrapper")) {
          this.closeSearch();
        }
      },
      closeSearch() {
        this.$store.commit("setOpenSearch", false);
      },
    },
  };
</script>

<style scoped>
  .result-wrapper {
    position: fixed;
    left: 0;
    right: 0;
    top: 10.5%;
    bottom: 0;
    display: flex;
    justify-content: center;
    z-index: 200;
    background: #00000058;
  }
  .result-container {
    border-radius: 10px;
    background: var(--surface-l1);
    width: 45vw;
    max-width: 100%;
    height: 400px;
  }
  .user {
    padding: 1em;
    display: flex;
    width: 100%;
    font-size: 14px;
  }
  .user:hover {
    background: var(--surface-l2);
  }
  .user p {
    margin: 0;
    margin-left: 5px;
  }
  .user p:nth-child(2) {
    opacity: 0.5;
    font-size: 13px;
  }
  .user img {
    width: 50px;
    border-radius: 50%;
  }
  .error {
    font-size: 14px;
    text-transform: capitalize;
    padding: 1em;
  }
</style>
