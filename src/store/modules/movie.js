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
  getMovies() {
    return axiosService
      .getMovies()
      .then((res) => {
        return res;
      })
      .catch((e) => console.log(e));
  },
  addMovie(context, data) {
    return axiosService
      .addMovie(data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  },
  editMovie(context, data) {
    return axiosService
      .editMovie(data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  },
  deleteMovie(context, data) {
    return axiosService
      .deleteMovie(data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  },
};
