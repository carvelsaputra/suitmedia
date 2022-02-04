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
          <slot name="body"> </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button
              class="modal-default-button"
              @click="$emit('close')"
              v-text="title"
            />
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
