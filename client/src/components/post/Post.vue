<template>
  <div class="container-fluid post-wrapper">
    <div class="row">
      <div class="col-10 user">
        <img
          src="../../assets/logo.png"
          alt="user-profile"
          class="user-profile"
        />
        <div class="user-info">
          <p>Andrew Vuth</p>
          <p>@username</p>
        </div>
        <p class="dayPosted">12-12-1222</p>
      </div>
      <div class="col-2"><p class="like">1234 Likes</p></div>
    </div>
    <div class="row">
      <div class="post-text">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          nobis consequatur fuga laboriosam ex rem? Assumenda impedit quae
          excepturi fugiat.
        </p>
      </div>
      <div v-if="false" class="post-image">
        <img src="" alt="" />
      </div>
    </div>
    <div class="row">
      <div class="likeBtn post-btn"><i class="far fa-heart"></i> Like</div>
      <div class="cmtBtn post-btn">
        <i class="far fa-comment-alt"></i> Comment
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  p {
    margin: 0;
  }
  .post-wrapper {
    border-radius: 5px;
    margin-top: 1em;
    background: var(--surface-l2);
  }
  .post-wrapper .row {
    padding: 0.8em 1em;
  }
  .user {
    display: flex;
    align-items: center;
    padding: 0;
  }

  .user-info p:nth-child(2),
  .user .dayPosted {
    opacity: 0.5;
    font-size: 13px;
  }
  .user .dayPosted {
    margin-left: 1em;
    margin-top: 3px;
    font-size: 12px;
    align-self: flex-start;
  }
  .user-profile {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 0.5em;
  }
  .like {
    opacity: 0.5;
  }
  .post-btn {
    cursor: pointer;
  }
  .post-btn i {
    margin-right: 0.2em;
    font-size: 15px;
  }
  .post-btn {
    margin-right: 0.8em;
  }
</style>
