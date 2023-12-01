import axiosService from "@/services/axiosService";

export const namespaced = true;

export const state = {
  name: "",
  time: "",
  descritpion: "",
};

export const actions = {
  getTable(context, date) {
    return axiosService
      .getTable(date)
      .then((res) => {
        return res;
      })
      .catch((e) => console.log(e));
  },
};
