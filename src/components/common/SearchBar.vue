<template>
  <div class="search">
    <input class="search-bar" placeholder="Search" type="text" />
  </div>
</template>
<script>
export default {};
</script>
<style>
/**
 * search bar
 */

.search {
  margin-top: 10px;
  width: 600px;
}
::placeholder {
  color: #635c53;
  padding-left: 10px;
  font-family: "PT_Sans-Web-bold";
  opacity: 1; /* Firefox */
}
.search-bar::after {
  content: " - Remember this";
  background-color: yellow;
  color: red;
  font-weight: bold;
}
.search-bar {
  border: none;
  background-color: #dddddd;
  width: 100%;
  height: 40px;
  border-radius: 4px;
}
</style>
