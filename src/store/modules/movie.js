import axiosService from "@/services/axiosService";

export const namespaced = true;

export const state = {
  movie: {
    movieId:0,
    showingId:0,
    title: "",
    description: "",
  }
};
export const mutations = {
  USE_MOVIE(state, movieDetails) {
    state.movie.title = movieDetails.title,
    state.movie.description = movieDetails.description
  }
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
  getShowing({dispatch}, id) {
    return axiosService
        .getShowing(id)
        .then((res) => {
          dispatch("getMovie",res.data.movieId,id)
        })
        .catch((e) => console.log(e));
  },
  getMovie({commit},id,id2) {
    return axiosService
        .getMovie(id)
        .then((res) => {
          let details = {
              title: res.data.title,
              description: res.data.description,
              showingId: id2,
              movieId: id
          }
          commit("USE_MOVIE",details)
        })
        .catch((e) => console.log(e));
  },
};
