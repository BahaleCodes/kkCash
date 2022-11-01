import Vue from "vue";

import {
    SET_BANKING_DETAILS,
    SET_BANKS
} from './mutations';


const bankURL = `${process.env.KK_API_GATEWAY_URL_DEV}/bank`

const actions = {
    fetchAllBankingDetails({commit}) {
        return new Promise((resolve, reject) => {
            Vue.axios
            .get (`${bankURL}/all/${payload.adminId}`)
            .then(resp => {
                commit(SET_BANKS, resp.data);
                resolve();
            })
            .catch(error => {
                reject(error);
            });
        });
    },
    fetchBankingDetails({commit}, payload) {
        return new Promise((resolve, reject) => {
            Vue.axios
            .get (`${bankURL}/view/${payload.bankId}/${payload.adminId}`)
            .then(resp => {
                commit(SET_BANKING_DETAILS, resp.data);
                resolve();
            })
            .catch(error => {
                reject(error);
            });
        });
    },
    updateBankingDetails({commit}, payload) {
        return new Promise((resolve, reject) => {
            Vue.axios
            .put (`${bankURL}/update/${payload.bankId}/${payload.adminId}`)
            .then(resp => {
                commit(SET_BANKING_DETAILS, resp.data);
                resolve();
            })
            .catch(error => {
                reject(error);
            });
        });
    }
}

export default actions;