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

          <i class="fas fa-window-close icon" @click="$emit('close')"></i>
        </div>

        <div class="modal-body">
          <!-- Start ==> body slot  -->
          <slot name="body"> </slot>
          <!-- End ==> body slot  -->
        </div>

        <div class="modal-footer">
          <!-- Start ==> footer slot  -->
          <slot name="footer">
            <button
              class="modal-default-button"
              @click="$emit('close')"
              v-text="title"
            />
          </slot>
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
