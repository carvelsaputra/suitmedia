import axios from "@/plugins/axios";
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
      console.log(state.list);
    },
  },
  getters: {
    list: (state) => state.list,
  },
};
