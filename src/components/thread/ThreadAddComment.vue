<template>
  <section class="add-comment-wrapper">
    <text-field class="form" :class="nameIsError">
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

    <text-field class="form" :class="emailIsError">
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

    <text-field class="form" :class="commentIsError">
      <template v-slot:inputText>
        <label for="email" class="label">Komentar</label>
        <textarea
          type="email"
          v-model="comment.content"
          class="text-field"
          id="email"
        />
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
      comment: {
        name: "",
        email: "",
        content: "",
      },
      errMessage: {
        name: "",
        email: "",
        comment: "",
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
    commentIsError() {
      return this.errMessage.comment ? "error" : "";
    },
  },
  methods: {
    validEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    clearMessage() {
      this.comment.name = "";
      this.comment.email = "";
      this.comment.content = "";

      this.errMessage.name = "";
      this.errMessage.email = "";
      this.errMessage.comment = "";
    },
    validate() {
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
      } else {
        console.log("Register Sukses");
        this.validated = true;
        this.clearMessage();
      }
      console.log(this.errMessage);
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
