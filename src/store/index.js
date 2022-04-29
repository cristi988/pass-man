import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: false,
    showAlert: false,
    cancelAlert: false,
    credentials:[],
    bankDetails:[],
    contacts: [],
    searchTerm: '',

  },
  getters: {
    getCredentials(state){
      // return [...state.credentials];
      if(state.credentials.length > 0){
        return state.credentials.filter((credential)=>{
          if((credential.tag.toLowerCase().includes(state.searchTerm)) ||
              (credential.username.toLowerCase().includes(state.searchTerm)) ||
              (credential.target.toLowerCase().includes(state.searchTerm))){
            return credential;
          }
        })
      }
      return null;
    },

    getBankDetails(state){
      // return state.bankDetails;
      return state.bankDetails.filter((card)=>{
        if((card.name.toLowerCase().includes(state.searchTerm))){
          return card;
        }
      })
    },

    getContacts(state){
      return [...state.contacts];
    },
  },

  mutations: {
    setSearchTerm(state, term){
      state.searchTerm = term;
    },

    toggleMenu(state){
      state.menu = !state.menu;
    },

    showAlert(state){
      state.showAlert = !state.showAlert;
    },

    cancelAlert(state){
      state.cancelAlert = !state.cancelAlert;
    },

    storeCredentials(state, credential) {
      state.credentials = [...state.credentials, credential];
    },

    storeBankDetails(state, bankDetail) {
      state.bankDetails = [...state.bankDetails, bankDetail];
    },

    storeContacts(state, contact) {
      state.contacts = [...state.contacts, contact];
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
    },

    deleteContact(state, id) {
      let contacts = state.contacts.filter((item, index)=>{
        return index != id;
      })
      state.contacts = [...contacts]
    }
  },


  actions: {
    deleteBankDetails({commit}, id){
      commit('deleteBankDetails', id)
    },

    deleteCredentials({commit}, id){
      commit('deleteCredentials', id)
    },

    deleteContacts({commit}, id){
      commit('deleteContact', id)
    }
  },


  modules: {
  }
})
