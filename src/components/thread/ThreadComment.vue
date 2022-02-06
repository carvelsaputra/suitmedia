<template>
  <article>
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
        <div class="comment-reaction">
          <div class="reaction">
            <p class="reaction poin">{{ poin }} poin</p>
          </div>
          <div class="btn up" :style="stylesUp" @click.once="setScoreUp">
            <i class="fas fa-arrow-up"></i>
          </div>
          <div class="btn down" :style="stylesDown" @click.once="setScoreDown">
            <i class="fas fa-arrow-down"></i>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import moment from "moment";
export default {
  props: {
    list: {
      type: Array,
    },
  },
  data() {
    return {
      date: "2017-02-08T00:30:05.552Z",
      poin: 3,
      isClicked: true,
    };
  },
  computed: {
    dateToString() {
      return moment(this.date).format("DD MMMM YYYY hh:mm");
    },
  },
  methods: {
    setScoreUp() {
      if (!this.isClicked) {
        return;
      }
      this.poin++;
      this.stylesUp = {
        "background-color": "#33b95a",
        color: "#eeeeee",
      };
      this.isClicked = !this.isClicked;
    },
    setScoreDown() {
      if (!this.isClicked) {
        return;
      }
      this.poin--;
      this.stylesDown = {
        "background-color": "#ff5f2d",
        color: "#eeeeee",
      };
      this.isClicked = !this.isClicked;
    },
    setScore(params) {
      if (params == "up") {
        this.poin++;
      }
      if (params == "down") {
        this.poin--;
      }
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
.comment-reaction {
  margin-top: 40px;
  display: flex;
}
.reaction {
  margin: auto 0;
}
.poin {
  margin-right: 10px;
  font-family: "PT_Sans-Web-Regular";
}
.btn {
  padding: 10px 10px;
  background-color: #dddddd;
  margin-right: 10px;
  border-radius: 5px;
  color: #635c53;
}
.up:hover {
  background-color: #33b95a;
  color: #eeeeee;
}
.down:hover {
  background-color: #ff5f2d;
  color: #eeeeee;
}
</style>
