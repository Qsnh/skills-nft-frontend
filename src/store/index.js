import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    address: null,
    isLogin: false,
  },
  mutations: {
    login(state, address) {
      state.address = address;
      state.isLogin = true;
    }
  },
  actions: {},
  modules: {},
});
