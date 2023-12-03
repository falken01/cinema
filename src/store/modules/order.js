import axiosService from "@/services/axiosService";

export const namespaced = true;

export const state = {
    tickets: {
        normal: "",
        discounted: "",
    }
};
export const mutations = {
    INIT_TICKETS(state,tickets) {
        state.tickets = tickets
    }
};

export const actions = {
    initTickets({commit},tickets){
        commit("INIT_TICKETS",tickets)
    },
    reserve({dispatch}) {
        return axiosService
            .reserve()
            .then((res) => {
                dispatch("getMovie",res.data.movieId)
            })
            .catch((e) => console.log(e));
    },
};

export const getters = {
    sumTickets(state) {
        return state.tickets.normal + state.tickets.discounted;
    },
    price(state) {
        return state.tickets.normal *20 + state.tickets.discounted*10;
    }
};