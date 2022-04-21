import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu : false,
    credentials :[],
  },
  getters: {
    getCredentials(state){
      return state.credentials;
    }
  },
  mutations: {
    toggleMenu(state){
      state.menu = !state.menu;
    },

    storeCredentials(state, credential) {
      state.credentials = [...state.credentials, credential]
    },


  },
  actions: {
  },
  modules: {
  }
})
