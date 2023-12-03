import Vuex from "vuex";
import * as user from "@/store/modules/user.js";
import * as movie from "@/store/modules/movie.js";
import * as hall from "@/store/modules/hall.js";
import * as order from "@/store/modules/order.js";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    movie,
    hall,
    order
  },
});
