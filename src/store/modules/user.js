import axiosService from "@/services/axiosService";

export const namespaced = true;

export const state = {
  role: "", // user, employee
  islogged: false,
  name: "",
};

export const mutations = {
  CREATE_ROLE(state, userDetails) {
    state.role = userDetails.role;
    state.islogged = true;
    state.name = userDetails.name;
  },
  LOGOUT(state) {
    state.role= "", // user, employee
    state.islogged= false,
    state.name= ""
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
      dispatch("getRole",credentials.name);
    }).catch((e)=>console.log(e))
  },
  logout({ commit }) {
    return axiosService.logout().then((res)=>{
      console.log(res)
      commit("LOGOUT");
    }).catch((e)=>console.log(e))
  },
  getRole({ commit },name) {
    return axiosService.getRole().then((res)=>{
      console.log(res)
      const user = {
        "name": name,
        "role": res.data
      };
      commit("CREATE_ROLE", user);
    }).catch((e)=>console.log(e))
  },
  getUserDetails({commit}) {
    return axiosService.getUserDetails().then((res)=>{
      const user = {
        "name": res.name,
        "role": res.data.roles,
      };
      commit("CREATE_ROLE", user);
    }).catch((e)=>console.log(e))
  },
};

export const getters = {

}
