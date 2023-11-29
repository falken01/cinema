import axiosService from "@/services/axiosService";

export const namespaced = true;

export const state = {
  name: "",
  time: "",
  descritpion: "",
};

export const actions = {
  getTable(date) {
    return axiosService.getTable(date).then(res => console.log(res)).catch(e => console.log(e))
  }
}