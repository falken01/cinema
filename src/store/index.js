import Vuex from "vuex";
import * as user from "@/store/modules/user.js";
import * as movie from "@/store/modules/movie.js";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    movie,
  },
});
