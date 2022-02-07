import axios from "@/plugins/axios";
import moment from "moment";
export const comment = {
  namespaced: true,
  state: () => ({
    list: [],
  }),
  actions: {
    fetchList({ commit }) {
      return axios.get("http://localhost:8080/comments.json").then((res) => {
        commit("setList", res.data);
      });
    },
  },
  mutations: {
    setList(state, newList) {
      state.list = newList;
    },
  },
  getters: {
    list: (state) => {
      return state.list.map((row) => {
        row.date = moment(row.date).format("DD MMMM YYYY hh:mm");
        row.replies.map((item) => {
          item.date = moment(item.date).format("DD MMMM YYYY hh:mm");
        });
        return row;
      });
    },
  },
};
