export default {
    setToken(state, token) {
        state.token = token;
    },

    clearToken(state) {
        state.token = null;
    },

    setLogin(state, status) {
        state.isLogin = status;
    },

    setTrack(state) {
        state.track = true;
    },

    unsetTrack(state) {
        state.track = false;
    }
}