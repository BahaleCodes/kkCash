import Vue from "vue";

import {
    SET_ADDRESS,
    SET_ADDRESSES
} from "./mutations";

const addressURL = `${process.env.KK_API_GATEWAY_URL_DEV}/address`

// const clientURL = `${process.env.KK_API_GATEWAY_URL_DEV}/user`
// const employmentURL = `${process.env.KK_API_GATEWAY_URL_DEV}/employment`
// const financesURL = `${process.env.KK_API_GATEWAY_URL_DEV}/finances`
// const loanURL = `${process.env.KK_API_GATEWAY_URL_DEV}/loan`

const actions = {
    fetchAllAddresses({commit}, payload) {
        return new Promise((resolve, reject) => {
            Vue.axios
            .get (`${addressURL}/all/${payload.adminId}`)
            .then(resp => {
                commit(SET_ADDRESSES, resp.data);
                resolve();
            })
            .catch(error => {
                reject(error);
            });
        });
    },
    fetchAddress({commit}, payload) {
        return new Promise((resolve, reject) => {
            Vue.axios
            .get (`${addressURL}/view/${payload.addressId}/${payload.adminId}`, payload)
            .then(resp => {
                commit(SET_ADDRESS, resp.data);
                resolve();
            })
            .catch(error => {
                reject(error);
            });
        });
    },
    updateAddress({commit}, payload) {
        return new Promise((resolve, reject) => {
            Vue.axios
            .put (`${addressURL}/update/${payload.addressId}/${payload.adminId}`, payload)
            .then(resp => {
                commit(SET_ADDRESS, resp.data);
                resolve();
            })
            .catch(error => {
                reject(error);
            });
        });
    },
    
    fetchAllClientDetails({commit}) {},
    fetchClientDetails({commit}, payload) {},
    updateClientDetails({commit}, payload) {},
    
    fetchAllEmploymentDetails({commit}) {},
    fetchEmploymentDetails({commit}, payload) {},
    updateEmploymentDetails({commit}, payload) {},
    
    fetchAllFinanceDetails({commit}) {},
    fetchFinanceDetails({commit}, payload) {},
    updateFinanceDetails({commit}, payload) {},
    
    fetchAllLoans({commit}) {},
    fetchLoan({commit}, payload) {},
    updateLoan({commit}, payload) {},
}

export default actions;