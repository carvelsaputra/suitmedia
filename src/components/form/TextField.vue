<template>
  <div class="text-field-wrapper" :style="customStyle">
    <slot name="inputText">
      <input class="text-field" style="padding-left:20px;box-sizing:border-box" placeholder="Search" type="text" />
    </slot>
    <slot name="icon">
      <i class="fas fa-search"></i>
    </slot>
  </div>
</template>
<script>
export default {
  props: {
    customStyle: {
      type: Object,
    },
  },
};
</script>
