export default function ({ store, redirect }) {
    if (!store.getters.isLogin) {
        store.dispatch('logout');
        return redirect('/');
    }
}