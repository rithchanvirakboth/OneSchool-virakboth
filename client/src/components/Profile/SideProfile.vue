<template>
  <div class="container-fluid sideProfile-wrapper">
    <div class="row text-md-center">
      <div class="col-3 col-md-12" style="position: relative;">
        <img
          :src="src + targetUser.profileImage"
          alt="profile"
          class="img-fluid profileImage"
        />
        <div class="d-none d-md-block">
          <button
            v-if="ownProfile"
            class="btn ghost-btn cta-btn"
            @click="openEdit"
          >
            Edit Profile
          </button>
          <button v-else-if="isFollowing" class="btn ghost-btn cta-btn">
            <i class="fa fa-unlink" style="margin-right: 0.2em"></i>
            Unfollow
          </button>
          <button v-else class="btn one-school-btn cta-btn" @click="followUser">
            <i class="fa fa-plus" style="margin-right: 0.2em"></i>
            Follow
          </button>
        </div>
      </div>
      <div class="col-9 col-md-12 name mt-md-4">
        <h4>{{ targetUser.name }}</h4>
        <p>@{{ targetUser.username }}</p>
      </div>
    </div>
    <div class="row info px-lg-2">
      <div class="col-12 col-md-12 mb-md-3 my-3">
        <p>
          {{ targetUser.bio }}
        </p>
      </div>
      <div class="col-6 col-md-12 mb-md-3">
        <p>
          <i class="fas fa-graduation-cap"></i>

          {{ targetUser.major }}
        </p>
      </div>
      <div class="col-6 col-md-12 mb-md-3">
        <p>
          <i class="fas fa-guitar"></i>
          {{ targetUser.interests }}
        </p>
      </div>
    </div>
    <div class="row d-block d-md-none">
      <div class="col-12">
        <button
          v-if="ownProfile"
          class="btn ghost-btn cta-btn cta-md-btn"
          @click="openEdit"
        >
          Edit Profile
        </button>
        <button
          v-else-if="isFollowing"
          class="btn one-school-btn cta-btn cta-md-btn ghost-btn"
        >
          <i class="fa fa-unlink" style="margin-right: 0.2em"></i>
          Unfollow
        </button>
        <button
          v-else
          class="btn one-school-btn cta-btn cta-md-btn"
          @click="followUser"
        >
          <i class="fa fa-plus" style="margin-right: 0.2em"></i>
          Follow
        </button>
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
      ...mapState(["targetUser", "user"]),
      ownProfile() {
        return this.user.username == this.$route.params.username;
      },
      isFollowing() {
        return this.user.followings.includes(this.targetUser._id);
      },
    },
    methods: {
      openEdit() {
        this.$store.commit("setIsEdit", true);
      },
      followUser() {
        console.log(this.$route.params.username);
        this.$store.dispatch("followUser", {
          username: this.$route.params.username,
        });
      },
    },
  };
</script>

<style scoped>
  .sideProfile-wrapper {
    padding: 1.5em;
    background: var(--surface-l1);
    border-radius: 10px;
  }
  .sideProfile-wrapper p {
    margin: 0;
    font-size: 14px;
  }
  .profileImage {
    border-radius: 50%;
    object-fit: cover;
    width: 16vw;
    height: 16vw;
    min-width: 65px;
    min-height: 65px;
  }
  .cta-btn {
    position: absolute;
    font-size: 12px;
    bottom: 10px;
    right: 5%;
  }

  .cta-btn:hover {
    background: #6e6e6e;
  }
  .cta-md-btn {
    margin-top: 0.5em;
    position: static;
    width: 100%;
  }
  .one-school-btn.cta-btn:hover {
    background: var(--one-school-secondary);
  }

  .name {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .name h4 {
    font-weight: 600;
    margin: 0;
  }
  .name p {
    opacity: 0.5;
  }
  .info .col-md-12 {
    opacity: 0.5;
  }

  .info .col-md-12:first-child {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    .sideProfile-wrapper {
      padding: 15px;
      font-size: 12px;
      margin-bottom: 1rem;
    }
    .sideProfile-wrapper p {
      font-size: 12px;
    }
  }
</style>
