import axiosService from "@/services/axiosService";

export const namespaced = true;

export const state = {
    selected: 0,
    takenSeats:[],
    reservedSeats:[]
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
    }
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
  getHall(context, id) {
    return axiosService
      .getHall(id)
      .then((res) => {
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
    }
};
export const getters = {
};