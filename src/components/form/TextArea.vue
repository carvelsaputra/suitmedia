<template>
  <div class="text-field-wrapper" :style="customStyle">
    <slot name="inputText">
      <textarea class="text-field" placeholder="Search" type="text" />
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
