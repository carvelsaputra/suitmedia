<template>
  <div class="navigation-list" @mouseover="isHover">
    <a :href="href" v-text="name" />
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
  data() {
    return {
      //   isHover: false,
    };
  },
  methods: {
    isHover() {},
    // linkEvent(nav) {
    //   let event = {};

    //   if (nav.href) {
    //     event.mouseover = () => {
    //       this.isHover = !this.isHover;
    //     };
    //   }

    //   return event;
    // },
  },
};
</script>
