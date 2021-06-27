<template>
  <TemplateLayout>
    <div class="container-fluid profile-wrapper mt-md-4">
      <div class="row">
        <div class="col-md-3"><SideProfile /></div>
        <div class="col-md-7">
          <slot />
        </div>
      </div>
    </div>
  </TemplateLayout>
</template>

<script>
  import TemplateLayout from "./Template.vue";
  import SideProfile from "../Profile/SideProfile";

  export default {
    components: {
      TemplateLayout,
      SideProfile,
    },
  };
</script>

<style scoped>
  .profile-wrapper {
    padding: 0 4em;
  }
  @media screen and (max-width: 768px) {
    .profile-wrapper {
      padding: 15px;
    }
  }
</style>
