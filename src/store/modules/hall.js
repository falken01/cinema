import axiosService from "@/services/axiosService";

export const namespaced = true;

export const actions = {
  getHalls() {
    return axiosService
      .getHalls()
      .then((res) => {
        return res;
      })
      .catch((e) => console.log(e));
  },
  addHall(context, data) {
    return axiosService
      .addHall(data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  },
  editHall(context, data) {
    return axiosService
      .editHall(data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  },
  deleteHall(context, data) {
    return axiosService
      .deleteHall(data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  },
};
