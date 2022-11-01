import Vue from "vue";

import {
	SET_ALL_FINANCES,
	SET_FINANCES
} from "./mutations";

const financesURL = `${process.env.KK_API_GATEWAY_URL_DEV}/finances`

const actions = {
	fetchAllFinances({ commit }, payload) {
		return new Promise((resolve, reject) => {
			Vue.axios
				.get(`${financesURL}/all/${payload.adminId}`)
				.then(resp => {
					commit(SET_ALL_FINANCES, resp.data);
					resolve();
				})
				.catch(error => {
					reject(error);
				});
		});
	},
	fetchFinances({ commit }, payload) {
		return new Promise((resolve, reject) => {
			Vue.axios
				.get(`${financesURL}/view/${payload.financesId}/${payload.adminId}`, payload)
				.then(resp => {
					commit(SET_FINANCES, resp.data);
					resolve();
				})
				.catch(error => {
					reject(error);
				});
		});
	},
	updateFinances({ commit }, payload) {
		return new Promise((resolve, reject) => {
			Vue.axios
				.put(`${financesURL}/update/${payload.financesId}/${payload.adminId}`, payload)
				.then(resp => {
					commit(SET_FINANCES, resp.data);
					resolve();
				})
				.catch(error => {
					reject(error);
				});
		});
	},
}

export default actions;