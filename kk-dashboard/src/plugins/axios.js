import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from '../store';

Vue.use(VueAxios, axios);

axios.interceptors.response.use(
    response => response,
    (error) => {
        if (error.respose != null) {
            if (error.response.status === 401) {
                store.dispatch('auth/login');
            }
            else if (error.response.status === 404) {
                store.dispatch('ui/showSnack', {
                    text: 'Resource not found. If this keeps happening, please contact Developer.',
                    color: 'error'
                });
            }
            else if (error.response.status === 500) {
                store.dispatch('ui/showSnack', {
                    text: 'Well, technically this is a server error. Please refresh page, retry what you were doing and if this error pops up, please contact the Developer.',
                    color: 'error'
                });
            }
        }
        else {
            console.error('error', error);
        }
        throw error;
    }
)