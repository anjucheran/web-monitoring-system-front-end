import { LOGIN } from '../config';

export default {
    async nuxtServerInit({ commit, dispatch, getters }, { app }) {
        const token = app.$cookies.get('token');
        if (token) {
            app.$axios.setToken(token);
            commit('setToken', token);
            commit('setLogin', true);
        } else {
            dispatch('logout');
        }
    },
    async login({ commit }, userData) {
        try {
            const { data } = await this.$axios.post(LOGIN, userData);
            if (typeof data.token != 'undefined') {
                window.localStorage.setItem('token', data.token);
                this.$cookies.set('token', data.token);
                commit('setToken', data.token);
                commit('setLogin', true);
                this.$router.push('webs/track');
            }
        } catch (e) {
            throw e
        }
    },
    logout({ commit }, redirect = false) {
        commit('clearToken');
        commit('setLogin', false);
        commit('unsetTrack');
        this.$axios.setToken(false);
        if (process.browser) {
            window.localStorage.removeItem('token');
        }
        this.$cookies.remove('token');
        this.$router.push('/');
    },
    track({ commit }, data) {
        if(data) {
            commit('setTrack');
        } else {
            commit('unsetTrack');
        }
    }
}