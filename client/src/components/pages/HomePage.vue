<template>
  <div v-if="!$store.state.loading">
    <HomepageLayout>
      <div class="posts-container">
        <PostForm />
        <Post />
      </div>
    </HomepageLayout>
  </div>
  <div class="loading" v-else>
    <img src="../../assets/loading_gif.gif" alt="loading" />
  </div>
</template>

<script>
  import HomepageLayout from "../layouts/HomepageLayout";
  import PostForm from "../Homepage/PostForm";
  import Post from "../Post/Post.vue";
  export default {
    name: "HomePage",
    components: { HomepageLayout, PostForm, Post },
    created() {
      this.$store.dispatch("getUser");
    },
  };
</script>

<style scoped>
  .posts-container {
    background: var(--surface-l1);
    height: 85vh;
    overflow-x: hidden;
    padding: 1em;
    margin: 0 1em;
    border-radius: 10px;
  }
  @media screen and (max-width: 599px) {
    .posts-container {
      margin: 0;
    }
  }
</style>
