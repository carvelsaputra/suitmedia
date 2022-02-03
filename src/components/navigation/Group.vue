<template>
  <List v-for="(item, i) in list" :key="i" v-bind="item" />
</template>
<script>
import List from "./List.vue";
export default {
  props: {
    list: {
      type: Array,
    },
  },
  components: {
    List,
  },
};
</script>
