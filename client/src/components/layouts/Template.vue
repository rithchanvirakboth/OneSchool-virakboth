<template>
  <div>
    <div style="position: relative; height: 100%;">
      <HomepageNav />
      <slot />
    </div>
    <transition name="slide-fade">
      <ProfileEdit v-if="$store.state.isEdit" />
    </transition>
  </div>
</template>

<script>
  import HomepageNav from "../partials/HomepageNav";
  import ProfileEdit from "../partials/ProfileEdit";

  export default {
    components: {
      HomepageNav,
      ProfileEdit,
    },
    created() {},
  };
</script>

<style></style>
