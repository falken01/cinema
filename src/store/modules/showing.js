import axiosService from "@/services/axiosService";

export const namespaced = true;

export const state = {
  showingId: 0,
  hallId: 0,
  movieId: 0,
  date: "",
  takenSeats: [],
};

export const mutations = {
  USE_SHOWING(state, showingDetails) {
    (state.showingId = showingDetails.showingId),
      (state.hallId = showingDetails.hallId),
      (state.movieId = showingDetails.movieId),
      (state.date = showingDetails.date);
  },
  SET_TAKEN_SEATS(state, seats) {
    state.takenSeats = seats;
  },
};

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
  getShowingWithTakenSeats({commit}, id) {
    return axiosService
      .getShowingWithTakenSeats(id)
      .then((res) => {
        
        commit("SET_TAKEN_SEATS", res.data.takenSeats);
        commit("USE_SHOWING", {
          showingId: res.data.showingId,
          hallId: res.data.hallId,
          movieId: res.data.movieId,
          date: res.data.date,
        });
        return res;
        
      })
      .catch((e) => console.log(e));
  },
};
