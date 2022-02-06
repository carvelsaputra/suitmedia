<template>
  <div class="thread-wrapper">
    <div class="thread-detail-wrapper">
      <thread-detail />
      <div class="comment-wrapper">
        <div>
          <p class="comment">Komentar</p>
        </div>
      </div>
      <thread-comment :list="comments" />
    </div>
    <thread-top :list="discussions" />
  </div>
</template>
<script>
import ThreadDetail from "@/components/thread/ThreadDetail";
import ThreadTop from "@/components/thread/ThreadTop";
import ThreadComment from "@/components/thread/ThreadComment";
export default {
  components: {
    ThreadTop,
    ThreadDetail,
    ThreadComment,
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
      comments: [
        {
          id: "fa1ca3c1-cc1e-4ed9-86b8-f60d8312d499",
          author: "Neal Topham",
          avatar: "http://lorempixel.com/100/100/people/1/",
          date: "2017-02-08T00:30:05.552Z",
          message:
            "Mungkin ada fenomena paranormal yang tidak bisa dijelaskan. Lebih baik nyala mati sendiri daripada tidak nyala sama sekali",
          point: 3,
          replies: [
            {
              id: "4ba9a8d1-cbe9-4906-ac23-0030f5df027e",
              author: "Dyan Shankin",
              avatar: "http://lorempixel.com/100/100/people/2/",
              date: "2017-02-08T00:33:20.369Z",
              message: "Confirm, itu kemungkinan aktivitas paranormal.",
              point: 0,
            },
          ],
        },
        {
          id: "9b3d6fe2-e3fc-47c6-b09a-f2b40547b101",
          author: "Jacquelyne Garrity",
          avatar: "http://lorempixel.com/100/100/people/2/",
          date: "2017-02-08T00:32:18.214Z",
          message:
            "Saya mengalami hal serupa. Laptop yang digunakan Toshiba L645. Tolong infonya.",
          point: 0,
          replies: [
            {
              id: "e157bcd4-68d7-4d2a-ade1-da50f0913daf",
              author: "Shella Tamashiro",
              avatar: "http://lorempixel.com/100/100/people/1/",
              date: "2017-02-09T00:33:20.369Z",
              message:
                "Ada kemungkinan ini masalah virus. Coba dilakukan virus scan menggunakan software anti virus.",
              point: 1,
            },
            {
              id: "ff441e8a-7465-4527-bd9a-ed6d3ad5fdef",
              author: "Marcelino Stangle",
              avatar: "http://lorempixel.com/100/100/people/1/",
              date: "2017-02-09T00:37:38.411Z",
              message: "Setuju",
              point: 1,
            },
          ],
        },
        {
          id: "27526171-1236-4785-a67f-72b48989e3ff",
          author: "Lawanda Schey",
          avatar: "http://lorempixel.com/100/100/people/3/",
          date: "2017-02-09T00:32:18.214Z",
          message:
            "Apakah ada solusi lain? Sudah dicoba untuk scan virus tapi kasus ini tetap ada.",
          point: 1,
          replies: [],
        },
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
