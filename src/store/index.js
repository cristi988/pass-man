import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu : false,
    credentials :[],
    bankDetails :[],
    credentialsEdit : 0,
  },
  getters: {
    getCredentials(state){
      return state.credentials;
    },

    getBankDetails(state){
      return state.bankDetails;
    },

    getCredentialsEdit(state){
      if(state.credentialsEdit){
        return {...state.credentials[state.credentialsEdit]}
      }else{
        return null
      }
    }
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
    }


  },
  actions: {
    deleteBankDetails({commit}, id){
      commit('deleteBankDetails', id)
    }
  },
  modules: {
  }
})
