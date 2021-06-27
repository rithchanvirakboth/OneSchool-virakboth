<template>
  <TemplateLayout>
    <div class="container-fluid homepage-wrapper mt-md-4">
      <div class="row">
        <div class="col-md-3 d-none d-md-block" style="padding: 0;">
          <HomepageProfile />
        </div>
        <div class="col-md-6 posts-wrapper">
          <slot />
        </div>
        <div class="col-md-3 d-none d-md-block p-0">
          <Communities class="right-container" />
          <DirectMessage class="right-container" />
        </div>
      </div>
    </div>
  </TemplateLayout>
</template>

<script>
  import TemplateLayout from "./Template.vue";
  import HomepageProfile from "../Homepage/HomepageProfile";
  import Communities from "../Homepage/Communities";
  import DirectMessage from "../Homepage/DirectMessage";

  export default {
    components: {
      TemplateLayout,
      HomepageProfile,
      Communities,
      DirectMessage,
    },
  };
</script>

<style scoped>
  .homepage-wrapper {
    padding: 0 4em;
    position: relative;
    height: 100%;
  }
  .right-container {
    background: var(--surface-l1);
    height: 250px;
    max-height: 100%;
    border-radius: 10px;
    margin-bottom: 1em;
  }

  @media screen and (max-width: 786px) {
    .homepage-wrapper {
      padding: 15px;
    }
  }
  @media screen and (max-width: 599px) {
    .posts-wrapper {
      padding: 0;
    }
  }
</style>
