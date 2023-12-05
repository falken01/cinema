import axiosService from "@/services/axiosService";

export const namespaced = true;

export const state = {
  movie: {
    movieId:0,
    showingId:0,
    title: "",
    description: "",
  },
};
export const mutations = {
  USE_MOVIE(state, movieDetails) {
    (state.movie.title = movieDetails.title),
    (state.movie.description = movieDetails.description);
    (state.movie.movieId = movieDetails.id),
    (state.movie.showingId = movieDetails.showingId);
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
  getShowingById({ dispatch }, id) {
    return axiosService
      .getShowing(id)
      .then((res) => {
        dispatch("getMovie", {"id":res.data.movieId,"showingId":id});
      })
      .catch((e) => console.log(e));
  },
  getMovie({commit},idObj) {
    return axiosService
        .getMovie(idObj.id)
        .then((res) => {
          let details = {
              title: res.data.title,
              description: res.data.description,
              showingId: idObj.showingId,
              movieId:idObj.id
          }
          commit("USE_MOVIE",details)
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
