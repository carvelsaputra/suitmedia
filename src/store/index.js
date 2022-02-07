import { createStore } from "vuex";
import { comment } from "./comments";
const store = createStore({
  modules: {
    comment,
  },
});
export default store;
