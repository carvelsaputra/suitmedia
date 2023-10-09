import axios from "@/plugins/axios";
import moment from "moment";
export const comment = {
  namespaced: true,
  state: () => ({
    list: [],
  }),
  actions: {
    /**
     *
     * @returns a list contain comments of content from local json
     */
    fetchList({ commit }) {
      return axios.get("http://localhost:8080/comments.json").then((res) => {
        commit("setList", res.data);
      });
    },
  },
  /**
   * @return a list of comment, we can map or process list of comment data below
   */
  mutations: {
    setList(state, newList) {
      state.list = newList;
    },
  },
  /**
   * @return a list if we want to get from frontend
   */
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
