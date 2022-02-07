<template>
  <article>
    <div class="thread-comment-wrapper">
      <div class="thread-comment-avatar">
        <img :width="styles ? styles : 100" :src="comment.avatar" />
      </div>
      <div class="thread-comment-detail">
        <h3 class="title">{{ comment.author }}</h3>
        <p class="comment date">{{ comment.date }}</p>
        <p class="comment content">
          {{ comment.message }}
        </p>
        <div class="comment-reaction">
          <div class="reaction">
            <p class="reaction poin">{{ comment.point }} poin</p>
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
export default {
  props: {
    list: Object,
    styles: Number,
  },

  data() {
    return {
      isClicked: true,
      comment: {},
      stylesUp: {},
      stylesDown: {},
    };
  },

  methods: {
    setScoreUp() {
      if (!this.isClicked) {
        return;
      }
      this.stylesUp = {
        "background-color": "#33b95a",
        color: "#eeeeee",
      };
      this.comment.point++;
      this.isClicked = !this.isClicked;
    },
    setScoreDown() {
      if (!this.isClicked) {
        return;
      }
      this.stylesDown = {
        "background-color": "#ff5f2d",
        color: "#eeeeee",
      };
      this.comment.point--;

      this.isClicked = !this.isClicked;
    },
  },
  mounted() {
    if (this.list) {
      this.comment = this.list;
    }
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
  margin-top: 20px;
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
