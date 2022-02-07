<template>
  <div v-for="(item, i) in list" :key="i">
    <thread-detail-comment :list="item" />
    <thread-detail-comment
      style="margin-left: 100px"
      v-for="(replies, i) in item.replies"
      :key="i"
      :list="replies"
      :styles="width"
    />
  </div>
</template>
<script>
import ThreadDetailComment from "@/components/thread/ThreadDetailComment";
export default {
  props: {
    list: {
      type: Array,
    },
  },
  components: {
    ThreadDetailComment,
  },
  data() {
    return {
      width: 70,
    };
  },
};
</script>
