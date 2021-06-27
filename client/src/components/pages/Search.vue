<template>
  <div class="search">
    <SearchForm class="searchForm" />
    <a href="/" class="backLink">Back</a>
  </div>
</template>

<script>
  import SearchForm from "../Search/SearchForm.vue";
  export default {
    name: "Search",
    components: {
      SearchForm,
    },
  };
</script>

<style scope>
  .searchForm .form-group {
    margin-bottom: 0x;
  }
  .searchForm .form-group input {
    border-radius: 3px;
    padding: 1.5em;
  }
  .searchForm .form-group select {
    border-radius: 3px 0 0 3px;
  }
  .searchForm .form-group input,
  .searchForm .form-group select {
    font-size: 12px;
  }

  .search .result-wrapper {
    position: static;
    display: flex;
    justify-content: center;
    z-index: 200;
    background: #00000058;
    height: 100vh;
  }
  .search .result-wrapper .result-container {
    border-radius: 0;
    width: 100%;
    height: 100%;
  }

  .search .user {
    padding: 1em;
    display: flex;
    width: 100%;
    font-size: 12px;
  }
  .user:hover {
    background: var(--surface-l2);
  }
  .search .user p:nth-child(2) {
    opacity: 0.5;
    font-size: 11px;
  }
  .search .user img {
    width: 35px;
    border-radius: 50%;
  }
  .backLink {
    position: fixed;
    bottom: 10px;
    right: 5px;
  }
  .backLink {
    font-size: 13px;
    text-decoration: underline;
  }
</style>
