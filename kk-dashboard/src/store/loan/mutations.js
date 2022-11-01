const SET_ALL_LOANS = "SET_ALL_LOANS";
const SET_LOAN = "SET_LOAN";

const mutations = {
    [SET_ALL_LOANS](state, payload) {
        state.loans = payload
    },
    [SET_LOAN](state, payload) {
        state.selectedLoan = payload
    }
};

export {
    SET_LOAN,
    SET_ALL_LOANS
};
export default mutations;