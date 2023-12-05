import axiosService from "@/services/axiosService";

export const namespaced = true;

export const actions = {
  getMyReservations() {
    return axiosService
      .getMyReservations()
      .then((res) => {
        return res;
      })
      .catch((e) => console.log(e));
  },
};
