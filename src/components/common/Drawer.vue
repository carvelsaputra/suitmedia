<template>
  <div class="menu_wrapper drawer">
    <input type="checkbox" id="drawer-toggle" />
    <label for="drawer-toggle" id="drawer-toggle-label">
      <i class="fas fa-bars fa-2x"></i>
    </label>
    
    <nav id="drawer">
      <search-bar :customStyle="styles" />
      <ul>
        <li>
          <a href="#">Categories</a>
          <ul>
            <li>linux</li>
            <li>Windows</li>
            <li>MAC OS</li>
            <li>Android</li>
            <li>iOS</li>
          </ul>
        </li>
        <li @click="showDialog('Register')"><a href="#">Register</a></li>
        <li @click="showDialog('Login')"><a href="#">Login</a></li>
      </ul>
    </nav>
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
          <text-field :class="emailIsError">
            <template v-slot:inputText>
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                v-model="user.email"
                class="text-field"
                id="email"
                placeholder="Email"
              />
            </template>
            <template v-slot:icon>
              <i class="fas fa-envelope"></i>
            </template>
          </text-field>
          <div class="error-message">{{ errMessage.email }}</div>
        </div>
        <!-- End ==> Input Text Email -->

        <!-- Start ==> Input Text Password -->
        <div class="form-wrapper">
          <text-field :class="passwordIsError">
            <template v-slot:inputText>
              <label for="password" class="form-label">Password</label>

              <input
                v-model="user.password"
                class="text-field"
                placeholder="Password"
                type="password"
              />
            </template>
            <template v-slot:icon>
              <i class="fas fa-lock"></i>
            </template>
          </text-field>
          <div class="error-message">{{ errMessage.password }}</div>
        </div>
        <!-- End ==> Input Text Password -->
      </template>
      <!-- END ==> Slot Body Dialog Login -->
      <template v-slot:footer>
        <button class="modal-default-button" @click="validate">Login</button>
      </template>
    </Dialog>
    <!-- END ==> Dialog Login -->

    <!-- Start ==> Dialog Register -->
    <Dialog
      v-if="showDialogRegister"
      :title="dialogTitle"
      :value="user"
      @close="showDialogRegister = false"
    >
      <!-- Start ==> Slot Body Dialog Register -->
      <template v-slot:body>
        <!-- Start ==> Input Text Name -->
        <form method="POST">
          <div class="form-wrapper">
            <text-field :class="nameIsError">
              <template v-slot:inputText>
                <label for="Name" class="form-label">Name</label>
                <input
                  v-model="user.name"
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
            <div class="error-message">{{ errMessage.name }}</div>
          </div>
          <!-- End ==> Input Text Name -->

          <!-- Start ==> Input Text Email -->
          <div class="form-wrapper">
            <text-field :class="emailIsError">
              <template v-slot:inputText>
                <label for="email" class="form-label">Email</label>
                <input
                  v-model="user.email"
                  class="text-field"
                  type="email"
                  id="email"
                  placeholder="Email"
                />
              </template>
              <template v-slot:icon>
                <i class="fas fa-envelope"></i>
              </template>
            </text-field>
            <div class="error-message">{{ errMessage.email }}</div>
          </div>
          <!-- End ==> Input Text Email -->

          <!-- Start ==> Input Text Password -->
          <div class="form-wrapper">
            <text-field :class="passwordIsError">
              <template v-slot:inputText>
                <label for="password" class="form-label">Password</label>
                <input
                  v-model="user.password"
                  required
                  class="text-field"
                  placeholder="Password"
                  type="password"
                />
              </template>
              <template v-slot:icon>
                <i class="fas fa-lock"></i>
              </template>
            </text-field>
            <div class="error-message">{{ errMessage.password }}</div>
          </div>
        </form>
        <!-- End ==> Input Text Password -->
      </template>
      <template v-slot:footer>
        <button class="modal-default-button" @click="validate">Register</button>
      </template>
      <!-- END ==> Slot Body Dialog Register -->
    </Dialog>
    <!-- End ==> Dialog Register -->
  </div>
</template>
<script>
// import NavigationListGroup from "@/components/navigation/Group.vue";
import SearchBar from "@/components/common/SearchBar";
import Dialog from "@/components/common/Dialog";
import TextField from "@/components/form/TextField";
export default {
  props: {
    list: Array,
  },
  components: {
    SearchBar,
    Dialog,
    TextField,
  },
  data() {
    return {
      styles: {
        "padding-left": 10 + "px",
        "padding-right": 10 + "px",
        "margin-top": 50 + "px",
      },
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
      /**
       * Register Data
       */
      user: {
        name: "",
        email: "",
        password: "",
      },
      /**
       * error Message
       */
      errMessage: {
        email: "",
        name: "",
        password: "",
      },
    };
  },
  computed: {
    nameIsError() {
      return this.errMessage.name ? "error" : "";
    },
    emailIsError() {
      return this.errMessage.email ? "error" : "";
    },
    passwordIsError() {
      return this.errMessage.password ? "error" : "";
    },
  },
  methods: {
    showDialog(params) {
      if (params == "Login") {
        this.clearMessage();
        this.showDialogLogin = !this.showDialogLogin;
        this.dialogTitle = params;
      }
      if (params == "Register") {
        this.clearMessage();
        this.showDialogRegister = !this.showDialogRegister;
        this.dialogTitle = params;
      }
    },
    validEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    clearMessage() {
      this.errMessage.name = "";
      this.errMessage.email = "";
      this.errMessage.password = "";
    },
    validate() {
      this.clearMessage();
      if (this.dialogTitle == "Register" && !this.user.name) {
        this.errMessage.name = "Wajib Diisi";
      }
      if (!this.user.email) {
        this.errMessage.email = "Wajib Diisi";
      }
      if (!this.validEmail(this.user.email)) {
        this.errMessage.email = "Format email salah";
      }
      if (!this.user.password) {
        this.errMessage.password = "Wajib Diisi";
      } else {
        console.log("Register Sukses");
      }
      console.log(this.errMessage);
    },
  },
};
</script>
