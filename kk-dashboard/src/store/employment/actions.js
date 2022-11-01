import Vue from "vue";

import {
    SET_EMPLOYMENT_DETAILS,
    SET_ALL_EMPLOYMENT_DETAILS
} from "./mutations";

const employmentURL = `${process.env.KK_API_GATEWAY_URL_DEV}/employment`

const actions = {
    fetchAllEmploymentDetails({commit}, payload) {
        return new Promise((resolve, reject) => {
            Vue.axios
            .get (`${employmentURL}/all/${payload.adminId}`)
            .then(resp => {
                commit(SET_ALL_EMPLOYMENT_DETAILS, resp.data);
                resolve();
            })
            .catch(error => {
                reject(error);
            });
        });
    },
    fetchEmploymentDetails({commit}, payload) {
        return new Promise((resolve, reject) => {
            Vue.axios
            .get (`${employmentURL}/view/${payload.employmentDetailsId}/${payload.adminId}`, payload)
            .then(resp => {
                commit(SET_EMPLOYMENT_DETAILS, resp.data);
                resolve();
            })
            .catch(error => {
                reject(error);
            });
        });
    },
    updateEmploymentDetails({commit}, payload) {
        return new Promise((resolve, reject) => {
            Vue.axios
            .put (`${employmentURL}/update/${payload.employmentDetailsId}/${payload.adminId}`, payload)
            .then(resp => {
                commit(SET_EMPLOYMENT_DETAILS, resp.data);
                resolve();
            })
            .catch(error => {
                reject(error);
            });
        });
    },
}

export default actions;