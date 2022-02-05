<template>
  <header-app></header-app>
  <section class="threads container">
    <thread-viewer />
  </section>
</template>

<script>
import HeaderApp from "@/components/common/Header.vue";
import ThreadViewer from "@/pages/ThreadViewer";
export default {
  components: {
    HeaderApp,
    ThreadViewer,
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
