import Vue from 'vue';
import Vuex from 'Vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: 'en',
  },
  getters: {
    getLanguage: state => { return state.language; }
  },
  actions: {
    changeLanguage ({ commit }, data) {
      commit('changeLanguage', data);
    }
  },
  mutations: {
    changeLanguage (state, data) {
      state.language = data;
    }
  }
});
