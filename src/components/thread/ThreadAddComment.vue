<template>
  <section class="add-comment-wrapper">
    <text-field class="form">
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
    <text-field class="form">
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
    <text-field class="form">
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
    <div class="btn-wrapper">
      <div class="btn reset">Reset</div>
      <div class="btn submit">Submit</div>
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
    };
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
