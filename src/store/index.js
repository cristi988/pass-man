import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu : false,
    credentials :[],
    bankDetails :[],
  },
  getters: {
    getCredentials(state){
      return [...state.credentials];
    },

    getBankDetails(state){
      return state.bankDetails;
    },
  },

  mutations: {
    toggleMenu(state){
      state.menu = !state.menu;
    },



    storeCredentials(state, credential) {
      state.credentials = [...state.credentials, credential]
    },

    storeBankDetails(state, bankDetail) {
      state.bankDetails = [...state.bankDetails, bankDetail];
    },

    deleteBankDetails(state, id){
      let bankDetails = state.bankDetails.filter((item, index)=>{
        return index != id;
      })
      state.bankDetails = [...bankDetails];
    },

    deleteCredentials(state, id){
      let credentials =state.credentials.filter((item, index)=>{
        return index != id;
      })
      state.credentials = [...credentials];
    }
  },


  actions: {
    deleteBankDetails({commit}, id){
      commit('deleteBankDetails', id)
    },

    deleteCredentials({commit}, id){
      commit('deleteCredentials', id)
    }
  },


  modules: {
  }
})
