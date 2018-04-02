import Vue from 'vue';
import Vuex from 'Vuex';

Vue.use(Vuex);

const state = {
  language: 'en',
}
const getters = {
  getLanguage: state => { return state.language; }
}
const actions = {
  changeLanguage ({ commit }, data) {
    commit('changeLanguage', data);
  }
}
const mutations = {
  changeLanguage (state, data) {
    state.language = data;
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,   
});
