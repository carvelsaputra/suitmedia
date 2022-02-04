<template>
  <List v-for="(item, i) in list" :key="i" v-bind="item" @click="showDialog" />
  <!-- Start ==> Dialog Login -->
  <Dialog
    v-if="showDialogLogin"
    :title="dialogTitle"
    @close="showDialogLogin = false"
  >
    <!-- Start ==> Slot Body Dialog Login -->
    <template v-slot:body>
      <!-- Start ==> Input Text Email -->
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
            <i class="fas fa-envelope"></i>
          </template>
        </text-field>
      </div>
      <!-- End ==> Input Text Email -->

      <!-- Start ==> Input Text Password -->
      <div class="form-wrapper">
        <text-field>
          <template v-slot:inputText>
            <label for="password" class="form-label">Password</label>

            <input class="text-field" placeholder="Password" type="password" />
          </template>
          <template v-slot:icon>
            <i class="fas fa-lock"></i>
          </template>
        </text-field>
      </div>
      <!-- End ==> Input Text Password -->
    </template>
    <!-- END ==> Slot Body Dialog Login -->
  </Dialog>
  <!-- END ==> Dialog Login -->

  <!-- Start ==> Dialog Register -->
  <Dialog
    v-if="showDialogRegister"
    :title="dialogTitle"
    @close="showDialogRegister = false"
  >
    <!-- Start ==> Slot Body Dialog Register -->
    <template v-slot:body>
      <!-- Start ==> Input Text Name -->
      <div class="form-wrapper">
        <text-field>
          <template v-slot:inputText>
            <label for="Name" class="form-label">Name</label>
            <input
              class="text-field"
              id="Name"
              placeholder="Name"
              type="text"
            />
          </template>
          <template v-slot:icon>
            <i class="fas fa-user"></i>
          </template>
        </text-field>
      </div>
      <!-- End ==> Input Text Name -->

      <!-- Start ==> Input Text Email -->
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
            <i class="fas fa-envelope"></i>
          </template>
        </text-field>
      </div>
      <!-- End ==> Input Text Email -->

      <!-- Start ==> Input Text Password -->
      <div class="form-wrapper">
        <text-field>
          <template v-slot:inputText>
            <label for="password" class="form-label">Password</label>

            <input class="text-field" placeholder="Password" type="password" />
          </template>
          <template v-slot:icon>
            <i class="fas fa-lock"></i>
          </template>
        </text-field>
      </div>
      <!-- End ==> Input Text Password -->
    </template>
    <!-- END ==> Slot Body Dialog Register -->
  </Dialog>
  <!-- End ==> Dialog Register -->
</template>
<script>
import List from "@/components/navigation/List.vue";
import Dialog from "@/components/common/Dialog";
import TextField from "@/components/form/TextField";

export default {
  props: {
    /**
     * Array of object that keep the navigation's data
     */
    list: {
      type: Array,
    },
  },
  components: {
    List,
    Dialog,
    TextField,
  },
  data() {
    return {
      /**
       * Dialog Login condition
       */
      showDialogLogin: false,
      /**
       * Dialog Register condition
       */
      showDialogRegister: false,
      /**
       * Dialog Title
       */
      dialogTitle: "",
    };
  },
  methods: {
    showDialog(params) {
      if (params == "Login") {
        this.showDialogLogin = !this.showDialogLogin;
        this.dialogTitle = params;
      }
      if (params == "Register") {
        this.showDialogRegister = !this.showDialogRegister;
        this.dialogTitle = params;
      }
    },
  },
};
</script>
<style scoped>
.text-field {
  background-color: #eeeeee;
}
.form-label {
  position: absolute;
  margin-top: -20px;
}
.form-wrapper {
  margin-top: 30px;
}
</style>
