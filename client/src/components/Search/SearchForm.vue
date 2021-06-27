<template>
  <form class="form" @submit.prevent="searchUser" autocomplete="off">
    <div class="form-group">
      <select>
        <option value="people">People</option>
      </select>
      <input
        name="search"
        v-model="search"
        class="form-control"
        type="text"
        placeholder="Search people here...."
      />
    </div>
    <ResultBar v-if="$store.state.openSearch" />
  </form>
</template>

<script>
  import ResultBar from "../Search/ResultBar.vue";

  export default {
    data() {
      return {
        search: "",
      };
    },
    components: {
      ResultBar,
    },
    name: "SearchForm",
    methods: {
      searchUser() {
        this.$store.commit("setOpenSearch", true);
        this.$store.dispatch("getSearchedUsers", this.search);
      },
    },
    watch: {
      search: function() {
        this.searchUser();
      },
    },
  };
</script>

<style scoped>
  .form-group {
    display: flex;
    margin: 0;
  }
  .form-group select {
    background: var(--one-school-primary);
    color: #fff;
    border-radius: 10px 0 0 10px;
    border: 0;
    outline: 0;
    padding-left: 10px;
    /* margin-left: 10px; */
  }
  .form-group input {
    border-radius: 0 10px 10px 0;
    padding: 1em;
    outline: 0;
    border: 0;
    background-color: var(--surface-l2);
  }
  .form-group input:focus,
  .form-group input::placeholder {
    color: #fff;
  }
  .form-group input::placeholder {
    opacity: 0.5;
  }
  .form-group input,
  .form-group select {
    font-size: 14px;
  }
</style>
