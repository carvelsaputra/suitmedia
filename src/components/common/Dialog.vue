<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <!-- Start ==> header slot  -->
          <slot name="header">
            <div v-text="title"></div>
          </slot>
          <!-- End ==> header slot  -->
          <div class="icon-wrapper" @click="$emit('close')">
            <i class="fas fa-times fa-xs icon"></i>
          </div>
        </div>

        <div class="modal-body">
          <!-- Start ==> body slot  -->
          <slot name="body" :value="user"> </slot>
          <!-- End ==> body slot  -->
        </div>

        <div class="modal-footer">
          <!-- Start ==> footer slot  -->
          <slot name="footer"> </slot>
          <!-- End ==> footer slot  -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>
