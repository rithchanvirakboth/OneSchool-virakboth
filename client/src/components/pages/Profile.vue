<template>
  <div v-if="!$store.state.profileLoading">
    <ProfileLayout>
      <div>
        <ul class="tabs">
          <router-link
            :to="`/profile/${$route.params.username}/posts`"
            @click="active"
            ><li class="tab">Posts</li></router-link
          >
          <router-link
            :to="`/profile/${$route.params.username}/followers`"
            @click="active"
            ><li class="tab">Followers</li></router-link
          >
          <router-link
            :to="`/profile/${$route.params.username}/followings`"
            @click="active"
            ><li class="tab">Followings</li></router-link
          >
        </ul>
      </div>
      <router-view />
    </ProfileLayout>
  </div>
  <div class="loading" v-else>
    <img src="../../assets/loading_gif.gif" alt="loading" />
  </div>
</template>

<script>
  import ProfileLayout from "../layouts/ProfileLayout";
  export default {
    components: {
      ProfileLayout,
    },
    mounted() {
      document.title = "Profile";
    },
    created() {
      this.$store.dispatch("getTargetUser", this.$route.params.username);
    },
    methods: {
      active(e) {
        const tabs = document.querySelectorAll(".tab");
        tabs.forEach((tab) => {
          if (tab.classList.contains("active")) {
            tab.classList.remove("active");
          }
        });
        e.target.classList.add("active");
      },
    },
  };
</script>

<style scoped>
  .tabs {
    display: flex;
  }
  .tabs li {
    font-size: 14px;
    position: relative;
    list-style: none;
    margin-right: 2em;
    opacity: 0.5;
    transition: 0.2s ease-in;
    cursor: pointer;
  }
  .tabs li::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    height: 0.1em;
    width: 110%;
    background: #fff;
    transition: 0.2s ease-in;
  }
  .tabs li:hover {
    opacity: 1;
  }
  .tabs li:hover::after {
    width: 120%;
  }
  .tab.active {
    opacity: 1;
  }
  .tab.active::after {
    width: 120%;
  }
</style>
