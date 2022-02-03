<template>
  <List v-for="(item, i) in list" :key="i" v-bind="item" @click="showDialog" />
  <Dialog
    v-if="showDialogLogin"
    :title="dialogTitle"
    @close="showDialogLogin = false"
  >
  </Dialog>
</template>
<script>
import List from "@/components/navigation/List.vue";
import Dialog from "@/components/common/Dialog";

export default {
  props: {
    list: {
      type: Array,
    },
  },
  components: {
    List,
    Dialog,
  },
  data() {
    return {
      showDialogLogin: false,
      showDialogRegister: false,
      dialogTitle: "",
    };
  },
  methods: {
    showDialog(params) {
      console.log(params);
      if (params == "Login") {
        this.showDialogLogin = !this.showDialogLogin;
        this.dialogTitle = params;
      }
    },
  },
};
</script>
