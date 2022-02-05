<template>
  <aside class="container">
    <div class="threads-top-wrapper">
      <h3 class="top-title">Diskusi 5 Teratas</h3>
      <div class="threads-content">
        <ul>
          <li class="threads-item" v-for="(item, i) in list" :key="i">
            <div class="threads-number">{{ i + 1 }}</div>
            <div class="threads-title">{{ item }}</div>
          </li>
        </ul>
      </div>
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
<style scoped>
.container {
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
  display: block;
}
</style>
