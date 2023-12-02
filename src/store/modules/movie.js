import axiosService from "@/services/axiosService";

export const namespaced = true;

export const state = {
  movie: {
    title: "",
    description: "",
  },
};
export const mutations = {
  USE_MOVIE(state, movieDetails) {
    (state.movie.title = movieDetails.title),
      (state.movie.description = movieDetails.description);
  },
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
  getShowing({ dispatch }, id) {
    return axiosService
      .getShowing(id)
      .then((res) => {
        dispatch("getMovie", res.data.movieId);
      })
      .catch((e) => console.log(e));
  },
  getMovie({ commit }, id) {
    return axiosService
      .getMovie(id)
      .then((res) => {
        console.log(res);
        commit("USE_MOVIE", res.data);
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
