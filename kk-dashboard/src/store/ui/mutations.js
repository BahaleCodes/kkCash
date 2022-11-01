const SHOW_SNACKBAR = 'SHOW_SNACKBAR';
const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

const mutations = {
    [SHOW_SNACKBAR](state, payload) {
        state.snackbar.text = payload.text;
        state.snackbar.multiline = payload.text.length > 50 || payload.multiline;
        state.snackbar.color = payload.color ? payload.color : 'success';

        if (payload.timeout) {
            state.snackbar.timeout = payload.timeout;
        }
        state.snackbar.visible = true;
    },
    [CLOSE_SNACKBAR](state) {
        state.snackbar.visible = false;
        state.snackbar.text = null;
        state.snackbar.multiline = false;
        state.snackbar.timeout = 10000;
    }
}

export {
    SHOW_SNACKBAR,
    CLOSE_SNACKBAR
}