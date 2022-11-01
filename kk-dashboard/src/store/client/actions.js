import Vue from "vue";

import {
	SET_CLIENT,
	SET_CLIENTS
} from "./mutations";

const clientURL = `${process.env.KK_API_GATEWAY_URL_DEV}/user`

const actions = {
	fetchAllClients({ commit }, payload) {
		return new Promise((resolve, reject) => {
			Vue.axios
				.get(`${clientURL}/all/${payload.adminId}`)
				.then(resp => {
					commit(SET_CLIENTS, resp.data);
					resolve();
				})
				.catch(error => {
					reject(error);
				});
		});
	},
	fetchClient({ commit }, payload) {
		return new Promise((resolve, reject) => {
			Vue.axios
				.get(`${clientURL}/view/${payload.clientId}/${payload.adminId}`, payload)
				.then(resp => {
					commit(SET_CLIENT, resp.data);
					resolve();
				})
				.catch(error => {
					reject(error);
				});
		});
	},
	updateClient({ commit }, payload) {
		return new Promise((resolve, reject) => {
			Vue.axios
				.put(`${clientURL}/update/${payload.clientId}/${payload.adminId}`, payload)
				.then(resp => {
					commit(SET_CLIENT, resp.data);
					resolve();
				})
				.catch(error => {
					reject(error);
				});
		});
	}
}

export default actions;