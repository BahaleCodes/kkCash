const SET_BANKS = "SET_BANKS";
const SET_BANKING_DETAILS = "SET_BANKING_DETAILS";

const mutations = {
    [SET_BANKS](state, payload) {
        state.banks = payload
    },
    [SET_BANKING_DETAILS](state, payload) {
        state.banking = payload
    }
};

export {
    SET_BANKS,
    SET_BANKING_DETAILS
};
export default mutations;