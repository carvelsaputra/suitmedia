<template>
  <div class="thread-comment-wrapper">
    <div class="thread-comment-avatar">
      <img
        width="120"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
      />
    </div>
    <div class="thread-comment-detail">
      <h3 class="title">Neal Topham</h3>
      <p class="comment date">{{ dateToString }}</p>
      <p class="comment content">
        Mungkin ada fenomena paranormal yang tidak bisa dijelaskan. Lebih baik
        nyala mati sendiri daripada tidak nyala sama sekali
      </p>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: {
    list: {
      type: Array,
    },
    data() {
      return {
        date: "2017-02-08T00:30:05.552Z",
      };
    },
  },
  computed: {
    dateToString() {
      let str = moment(this.date).format("DD MMMM YYYY hh:mm");
      return str.toString();
    },
  },
};
</script>
<style scoped>
.comment {
  margin-top: 10px;
}
.title {
  font-family: "PT_Sans-Web-Bold";
  font-size: 20px;
}
.content {
  line-height: 20px;
}
</style>
