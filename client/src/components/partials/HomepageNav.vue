<template>
  <div class="nav-wrapper">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-md-3 d-none d-md-block">
          <router-link to="/homepage">
            <img src="../../assets/OneSchool_Logo.png" alt="one_school_logo" />
          </router-link>
        </div>
        <div class="col-md-6 col-sm-2 ">
          <SearchForm class="d-none d-md-block" />
        </div>

        <div class="col-md-3 col-sm-12 profile-section">
          <div class="loup d-md-none">
            <a href="/search">
              <img src="../../assets/search.png" alt="" />
            </a>
          </div>
          <div @click="openMenu" style="z-index: 21">
            <div class="profile-cta">
              <p>{{ firstName }}</p>
              <img :src="src + user.profileImage" alt="profile_iamge" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <DropMenu v-if="$store.state.openMenu" />
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import DropMenu from "./DropMenu";
  import SearchForm from "../Search/SearchForm.vue";
  export default {
    name: "HomepageNav",
    data() {
      return {
        src:
          this.$store.state.user.profileImage.includes("uploads\\") ||
          this.$store.state.user.profileImage.includes("uploads/")
            ? "http://localhost:5000/"
            : "",
      };
    },

    components: {
      DropMenu,
      SearchForm,
    },
    computed: {
      ...mapState(["user"]),
      firstName() {
        return this.user.name.split(" ")[0];
      },
    },
    methods: {
      openMenu() {
        this.$store.commit("setOpenMenu", !this.$store.state.openMenu);
      },
      cancel() {
        this.$store.commit("setOpenMenu", false);
      },
    },
  };
</script>

<style scoped>
  .nav-wrapper {
    background-color: var(--surface-l1);
    padding: 0.8em 4em;
    /* box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1); */
    position: relative;
  }
  .nav-wrapper img {
    width: 10vmin;
  }

  .profile-cta {
    background: var(--one-school-primary);

    border-radius: 10px;
    padding: 0.2em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.8em;
    width: fit-content;
    margin-left: auto;
  }
  .profile-cta p {
    font-size: 12px;
    margin: 0;
    margin-left: 10px;
  }
  .profile-cta img {
    border-radius: 10px;
    width: 40px;
    height: 40px;
    object-fit: cover;
  }

  .loup img {
    width: 24px;
  }

  @media screen and (max-width: 786px) {
    .nav-wrapper {
      padding: 1em 0;
    }
    .profile-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
