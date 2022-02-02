<template>
  <header>
    <div class="container">
      <div class="header-left">
        <p class="app-title">Forum Anak IT</p>
      </div>
      <searchBar />
      <nav class="header-right">
        <a href="#">Categories</a>
        <a href="#" class="login">Log in</a>
        <a href="#">Register</a>
      </nav>
    </div>
  </header>
</template>
<script>
import searchBar from "./SearchBar.vue";
export default {
  components: {
    searchBar,
  },
};
</script>

<style></style>
