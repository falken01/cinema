import axiosService from "@/services/axiosService";

export const namespaced = true;

export const state = {
    tickets: {
        normal: 0,
        discounted: 0,
    },
    reservations:[]
};
export const mutations = {
    INIT_TICKETS(state,tickets) {
        state.tickets = tickets
    },
    CREATE_RESERVATION(state, reservation) {
      state.reservations.push(reservation)
    }
};

export const actions = {
    initTickets({commit},tickets){
        commit("INIT_TICKETS",tickets)
    },
    // eslint-disable-next-line no-unused-vars
    reserve({commit},seat) {
        return axiosService
            .reserve(seat)
            .then((res) => {
               commit("CREATE_RESERVATION",res.data)
            })
            .catch((e) => console.log(e));
    },
    // eslint-disable-next-line no-unused-vars
    confirm({commit},reservations){
        for(let reservation of reservations) {
            return axiosService
                .confirm(reservation);
        }
    },
    // eslint-disable-next-line no-unused-vars
    removePending({commit},reservations){
        for(let reservation of reservations) {
            return axiosService
                .removePending(reservation)
                .then((res) => {
                    console.log(res);
                })
                .catch((e) => console.log(e));
        }
    }
};

export const getters = {
    sumTickets(state) {
        return state.tickets.normal + state.tickets.discounted;
    },
    price(state) {
        return state.tickets.normal *20 + state.tickets.discounted*10;
    }
};