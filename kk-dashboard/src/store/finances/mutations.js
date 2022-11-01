const SET_ALL_FINANCES = "SET_ALL_FINANCES";
const SET_FINANCES = "SET_FINANCES";

const mutations = {
    [SET_ALL_FINANCES](state, payload) {
        state.finances = payload
    },
    [SET_FINANCES](state, payload) {
        state.selectedFinances = payload
    }
};

export {
    SET_FINANCES,
    SET_ALL_FINANCES
};
export default mutations;