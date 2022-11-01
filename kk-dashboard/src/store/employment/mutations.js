const SET_ALL_EMPLOYMENT_DETAILS = "SET_ALL_EMPLOYMENT_DETAILS";
const SET_EMPLOYMENT_DETAILS = "SET_EMPLOYMENT_DETAILS";

const mutations = {
    [SET_ALL_EMPLOYMENT_DETAILS](state, payload) {
        state.employmentDetails = payload
    },
    [SET_EMPLOYMENT_DETAILS](state, payload) {
        state.selectedEmploymentDetails = payload
    }
};

export {
    SET_EMPLOYMENT_DETAILS,
    SET_ALL_EMPLOYMENT_DETAILS
};
export default mutations;