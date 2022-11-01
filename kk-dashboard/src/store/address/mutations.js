const SET_ADDRESSES = "SET_ADDRESSES";
const SET_ADDRESS = "SET_ADDRESS";

const mutations = {
    [SET_ADDRESSES](state, payload) {
        state.addresses = payload
    },
    [SET_ADDRESS](state, payload) {
        state.selectedAddress = payload
    }
};

export {
    SET_ADDRESS,
    SET_ADDRESSES
};
export default mutations;