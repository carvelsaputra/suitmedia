<template>
  <header-app></header-app>
</template>

<script>
import HeaderApp from "@/components/common/Header.vue";
export default {
  components: {
    HeaderApp,
  },
};
</script>

<style global>
@import "./styles/index.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
