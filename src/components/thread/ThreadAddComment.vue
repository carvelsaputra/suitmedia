<template>
  <section class="add-comment-wrapper">
    <text-field class="form" :class="[nameIsError, nameIsSuccess]">
      <template v-slot:inputText>
        <div class="label">
          <label for="Name">Name</label>
        </div>
        <input
          v-model="comment.name"
          class="text-field"
          id="Name"
          type="text"
        />
      </template>
      <template v-slot:icon>
        <i class="fas fa-user"></i>
      </template>
    </text-field>
    <div class="error-message">{{ errMessage.name }}</div>

    <text-field class="form" :class="[emailIsError, emailIsSuccess]">
      <template v-slot:inputText>
        <label for="email" class="label">Email</label>
        <input
          type="email"
          v-model="comment.email"
          class="text-field"
          id="email"
        />
      </template>
      <template v-slot:icon>
        <i class="fas fa-envelope"></i>
      </template>
    </text-field>
    <div class="error-message">{{ errMessage.email }}</div>

    <text-field class="form" :class="[commentIsError, commentIsSuccess]">
      <template v-slot:inputText>
        <label for="konten" class="label">Komentar</label>
        <textarea v-model="comment.content" class="text-field" id="konten" />
      </template>
      <template v-slot:icon>
        <i class="fas fa-pen"></i>
      </template>
    </text-field>
    <div class="error-message">{{ errMessage.comment }}</div>

    <div class="btn-wrapper">
      <div @click="clearMessage()" class="btn reset">Reset</div>
      <div class="btn submit" @click="validate">Submit</div>
    </div>
  </section>
</template>
<script>
import TextField from "@/components/form/TextField";

export default {
  components: {
    TextField,
  },
  data() {
    return {
      /**
       * data for v-model that we use at comment's form
       */
      comment: {
        name: "",
        email: "",
        content: "",
      },
      /**
       * custom error message
       */
      errMessage: {
        name: "",
        email: "",
        comment: "",
      },
      /**
       * conditional if success form
       */
      name: false,
      email: false,
      komen: false,
    };
  },
  computed: {
    // on success insert form
    nameIsSuccess() {
      return this.name ? "success" : "";
    },

    emailIsSuccess() {
      return this.email ? "success" : "";
    },

    commentIsSuccess() {
      return this.komen ? "success" : "";
    },

    // on error insert form
    nameIsError() {
      return this.errMessage.name ? "error" : "";
    },

    emailIsError() {
      return this.errMessage.email ? "error" : "";
    },

    commentIsError() {
      return this.errMessage.comment ? "error" : "";
    },
  },
  methods: {
    /**
     * validate email's format
     */
    validEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    /**
     * clear text that we input at comment's form
     */
    clearMessage() {
      this.name = false;
      this.email = false;
      this.password = false;
      this.comment.name = "";
      this.comment.email = "";
      this.comment.content = "";

      this.clearErrorMessage();
    },
    /**
     * clear error text
     */
    clearErrorMessage() {
      this.errMessage.name = "";
      this.errMessage.email = "";
      this.errMessage.comment = "";
    },
    /**
     * custom form validation
     */
    validate() {
      this.clearErrorMessage();
      if (!this.comment.name) {
        this.errMessage.name = "Wajib Diisi";
      }

      if (!this.comment.email) {
        this.errMessage.email = "Wajib Diisi";
      }

      if (!this.validEmail(this.comment.email)) {
        this.errMessage.email = "Format email salah";
      }

      if (!this.comment.content) {
        this.errMessage.comment = "Wajib Diisi";
      }

      // condition if input text not have any error messages
      if (!this.errMessage.email) {
        this.email = true;
      }

      if (!this.errMessage.name) {
        this.name = true;
      }

      if (!this.errMessage.comment) {
        this.komen = true;
      } else {
        // we can dispatch action at here
        console.log("Register Sukses");
      }
    },
  },
};
</script>
<style scoped>
.add-comment-wrapper {
  width: 50%;
}
.btn-wrapper {
  display: flex;
  margin-top: 20px;
}
.btn {
  cursor: pointer;
  padding: 15px 15px;
  border-radius: 5px;
}
.reset {
  color: #71695f;
  background-color: #dddddd;
}
.submit {
  color: #eeeeee;
  margin-left: 10px;
  background-color: #635c53;
}
.form {
  margin-top: 30px;
}
.label {
  position: absolute;
  top: -20px;
}
.text-field {
  background: #eeeeee;
}
</style>
