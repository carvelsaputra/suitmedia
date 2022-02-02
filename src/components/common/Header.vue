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

<style>
/** a => remove underline */
a {
  text-decoration: none;
}
/** set max container */
.container {
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

header {
  height: 65px;
  width: 100%;
  background-color: #635c53;
  position: fixed;
  top: 0;
  z-index: 10;
}

.app-title {
  font-family: "PT_Sans-Web-Bold";
  font-size: 24px;
  color: white;
  width: 150px;
  margin-top: 20px;
}

.header-right {
  display: flex;
}

.header-right a {
  line-height: 65px;
  font-family: "PT_Sans-Web-Bold";
  padding: 0 25px;
  color: white;
  display: flex;
  justify-content: flex-end;
  transition: all 0.5s;
}

.header-right a:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.btn:hover {
  opacity: 1;
}
</style>
