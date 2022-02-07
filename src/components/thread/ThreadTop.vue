<template>
  <aside class="threads-top-wrapper">
    <h3 class="top-title">Diskusi 5 Teratas</h3>
    <div class="threads-content">
      <ul>
        <li class="threads-item" v-for="(item, i) in list" :key="i">
          <div class="threads-number">{{ i + 1 }}</div>
          <div class="threads-title">
            <a href="#">{{ item }}</a>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
    },
  },
};
</script>
<style scoped></style>
