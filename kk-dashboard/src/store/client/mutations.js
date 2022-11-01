const SET_CLIENTS = "SET_CLIENTS";
const SET_CLIENT = "SET_CLIENT";

const mutations = {
    [SET_CLIENTS](state, payload) {
        state.clients = payload
    },
    [SET_CLIENT](state, payload) {
        state.selectedClient = payload
    }
};

export {
    SET_CLIENT,
    SET_CLIENTS
};
export default mutations;