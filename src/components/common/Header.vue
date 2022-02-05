<template>
  <header>
    <div class="container">
      <div class="header-left">
        <p class="app-title">Forum Anak IT</p>
      </div>
      <searchBar class="search-bar" />
      <nav class="header-right">
        <drawer class="drawer" :list="navigations" />
        <navigation-list-group :list="navigations" />
      </nav>
    </div>
  </header>
</template>
<script>
import searchBar from "@/components/common/SearchBar.vue";
import Drawer from "@/components/common/Drawer.vue";
import NavigationListGroup from "@/components/navigation/Group.vue";
export default {
  components: {
    searchBar,
    NavigationListGroup,
    Drawer,
  },
  data() {
    return {
      /**
       * Navigation's data
       */
      navigations: [
        {
          name: "Categories",
          menu: [
            { name: "Linux", href: "#" },
            { name: "Windows", href: "#" },
            { name: "MAC OS", href: "#" },
            { name: "Android", href: "#" },
            { name: "iOS", href: "#" },
          ],
          href: "#",
        },
        {
          name: "Register",
          href: "Register",
        },
        {
          name: "Login",
          href: "Login",
        },
      ],
    };
  },
};
</script>

<style></style>
