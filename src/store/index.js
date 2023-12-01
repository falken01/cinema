import Vuex from "vuex";
import * as user from "@/store/modules/user.js";
import * as movie from "@/store/modules/movie.js";
import * as hall from "@/store/modules/hall.js";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    movie,
    hall,
  },
});
