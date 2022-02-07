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
  /**
   * list of data from pages that we sent to thread-detail-component
   */
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
      /**
       * custom width reply user's avatar image
       */
      width: 70,
    };
  },
};
</script>
