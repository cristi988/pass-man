import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu : false,
  },
  getters: {
  },
  mutations: {
    toggleMenu(state){
      state.menu = !state.menu;
    }
  },
  actions: {
  },
  modules: {
  }
})
