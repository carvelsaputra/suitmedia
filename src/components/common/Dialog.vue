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
          <slot name="body">
            <div class="form-wrapper">
              <text-field>
                <template v-slot:inputText>
                  <label for="email" class="form-label">Email</label>
                  <input
                    class="text-field"
                    id="email"
                    placeholder="Email"
                    type="text"
                  />
                </template>
                <template v-slot:icon>
                  <i class="fas fa-user"></i>
                </template>
              </text-field>
            </div>
            <div class="form-wrapper">
              <text-field>
                <template v-slot:inputText>
                  <label for="password" class="form-label">Password</label>

                  <input
                    class="text-field"
                    placeholder="Password"
                    type="password"
                  />
                </template>
                <template v-slot:icon>
                  <i class="fas fa-lock"></i>
                </template>
              </text-field>
            </div>
          </slot>
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
import TextField from "@/components/form/TextField";
export default {
  props: {
    title: {
      type: String,
    },
  },
  components: {
    TextField,
  },
};
</script>
<style>
.form-label {
  position: absolute;
  margin-top: -20px;
}
.form-wrapper {
  margin-top: 30px;
}
</style>
