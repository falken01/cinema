import Vuex from "vuex";
import * as user from "@/store/modules/user.js";
import * as movie from "@/store/modules/movie.js";
import * as hall from "@/store/modules/hall.js";
import * as order from "@/store/modules/order.js";
import * as showing from "@/store/modules/showing.js";
import * as reservation from "@/store/modules/reservation.js";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    movie,
    hall,
    order,
    showing,
    reservation,
  },
});
