import axiosService from "@/services/axiosService";

export const namespaced = true;

export const state = {
    selected: 0,
    takenSeats:[],
    reservedSeats:[],
    rows: 0,
    columns: 0,
}

export const mutations = {
    INCREMENT_SELECTED(state,seat) {
        state.selected++;
        state.reservedSeats.push(seat)
    },
    DECREMENT_SELECTED(state,seat) {
        state.selected--;
        const indexToRemove = state.reservedSeats.findIndex(obj => obj.row === seat.row && obj.column === seat.column);
        if (indexToRemove !== -1) {
            state.reservedSeats.splice(indexToRemove, 1);
        }
    },
    SET_TAKEN_SEATS(state, seats){
        state.takenSeats = seats
    },
    SET_ROWS(state, rows){
        state.rows = rows
    },
    SET_COLUMNS(state, columns){
        state.columns = columns
    },
    RESET_STATE(state){
        state.selected = 0;
        state.takenSeats = [];
        state.reservedSeats = [];
        state.rows = 0;
        state.columns = 0;
    },
};
export const actions = {
    getReservations({commit},id) {
        return axiosService
            .getReservations()
            .then((res) => {
                const filteredObjects = res.data.filter(obj => obj.id === id);
                commit("SET_TAKEN_SEATS",filteredObjects)
            })
            .catch((e) => console.log(e));
    },
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
  getHall({commit}, id) {
    return axiosService
      .getHall(id)
      .then((res) => {
        commit("SET_ROWS",res.data.rows);
        commit("SET_COLUMNS",res.data.columns);
        return res;
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
  increment({commit},seat){
      commit("INCREMENT_SELECTED",seat)
    },
  decrement({commit},seat){
      commit("DECREMENT_SELECTED",seat)
    },
  resetState({commit}){
      commit("RESET_STATE")
    },
};
export const getters = {
};