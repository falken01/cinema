import axiosService from "@/services/axiosService";

export const namespaced = true;

export const actions = {
  getShowing(context, id) {
    return axiosService
      .getShowing(id)
      .then((res) => {
        return res;
      })
      .catch((e) => console.log(e));
  },

  getShowings() {
    return axiosService
      .getShowings()
      .then((res) => {
        return res;
      })
      .catch((e) => console.log(e));
  },
  addShowing(context, data) {
    return axiosService
      .addShowing(data)
      .then((res) => {
        return res;
      })
      .catch((e) => console.log(e));
  },
};
