<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">
            <div v-text="title"></div>
          </slot>
          <i class="fas fa-window-close icon" @click="$emit('close')"></i>
        </div>

        <div class="modal-body">
          <slot name="body"> Dialog Body </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="modal-default-button" @click="$emit('close')">
              OK
            </button>
          </slot>
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
