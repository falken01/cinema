import axiosService from "@/services/axiosService";

export const namespaced = true;

export const actions = {
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
