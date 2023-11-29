import axiosService from "@/services/axiosService";

export const namespaced = true;

export const state = {
  role: "", // user, employee
  islogged: false,
  normalTickets: 0,
  discountTickets: 0,
};

export const mutations = {
  CREATE_ROLE(state, userDetails) {
    state.role = userDetails.role;
    state.islogged = true;
  }
};

export const actions = {
  register({ dispatch }, credentials) {
    return axiosService.register(credentials).then((res)=>{
      console.log(res)
      dispatch("getRole");
    }).catch((e)=>console.log(e))
  },
  signIn({ dispatch }, credentials) {
    return axiosService.login(credentials).then((res)=>{
      console.log(res)
      dispatch("getRole");
    }).catch((e)=>console.log(e))
  },
  getRole({ commit }) {
    return axiosService.getRole().then((res)=>{
      console.log(res)
      commit("CREATE_ROLE", res.data);
    }).catch((e)=>console.log(e))
  }
};
