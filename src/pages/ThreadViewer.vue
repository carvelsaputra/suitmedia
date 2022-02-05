<template>
  <section class="thread-wrapper">
    <thread-detail />
  </section>
  <thread-top :list="discussions" />
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
