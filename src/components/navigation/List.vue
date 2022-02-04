<template>
  <div class="navigation-list">
    <a v-text="name" @click="showDialog(href)" />
    <div class="navigation-menu">
      <a
        class="navigation-item"
        v-for="(item, i) in menu"
        :key="i"
        v-text="item.name"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
    },
    menu: {
      type: Array,
      required: false,
    },
    href: {
      type: String,
      required: false,
    },
  },

  methods: {
    showDialog(params) {
      this.$emit("click", params);
    },
  },
};
</script>
