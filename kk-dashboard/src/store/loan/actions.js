import Vue from "vue";

import {
    SET_ALL_LOANS,
    SET_LOAN
} from "./mutations";

const loanURL = `${process.env.KK_API_GATEWAY_URL_DEV}/loan`

const actions = {
    fetchAllLoans({commit}, payload) {
        return new Promise((resolve, reject) => {
            Vue.axios
            .get (`${loanURL}/all/${payload.adminId}`)
            .then(resp => {
                commit(SET_ALL_LOANS, resp.data);
                resolve();
            })
            .catch(error => {
                reject(error);
            });
        });
    },
    fetchLoan({commit}, payload) {
        return new Promise((resolve, reject) => {
            Vue.axios
            .get (`${loanURL}/view/${payload.loanId}/${payload.adminId}`, payload)
            .then(resp => {
                commit(SET_LOAN, resp.data);
                resolve();
            })
            .catch(error => {
                reject(error);
            });
        });
    },
    updateLoan({commit}, payload) {
        return new Promise((resolve, reject) => {
            Vue.axios
            .put (`${loanURL}/update/${payload.loanId}/${payload.adminId}`, payload)
            .then(resp => {
                commit(SET_LOAN, resp.data);
                resolve();
            })
            .catch(error => {
                reject(error);
            });
        });
    },
}

export default actions;
