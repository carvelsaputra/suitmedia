<template>
  <div class="thread-wrapper">
    <div class="thread-detail-wrapper">
      <thread-detail />
      <div class="comment-wrapper">
        <div>
          <p class="comment">Komentar</p>
        </div>
      </div>
    </div>
    <thread-top :list="discussions" />
  </div>
</template>
<script>
import ThreadDetail from "@/components/thread/ThreadDetail";
import ThreadTop from "@/components/thread/ThreadTop";
export default {
  components: {
    ThreadTop,
    ThreadDetail,
  },
  data() {
    return {
      discussions: [
        "Bersihkan laptop dari butiran debu",
        "Cara akses website menggunakan koneksi open VPN",
        "Batas aman overclock PC rakitan",
        "Cara mengetahui akun Facebook di-hack melalui aplikasi",
        "Tutorial: langkah-langkah mencegah website untuk track user",
      ],
    };
  },
};
</script>
<style scoped>
.comment-wrapper {
  margin-top: 30px;
  text-align: left;
  display: flex;
  align-items: center;
}
.comment {
  font-family: "PT_Sans-Web-Bold";
  font-size: 30px;
}
.comment-wrapper::after {
  margin-left: 10px;

  content: "";
  flex: 1;
  border-bottom: 1px solid #000;
}
</style>
