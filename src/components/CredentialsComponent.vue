<template>
  <div class="mx-auto py-3 w-10/12 float-right lg:float-none lg:w-10/12 md:float-none">
    <div class="title flex justify-between">
      <div class="left">
        <h2 class="text-4xl">Credentials</h2>
      </div>
      <div class="flex justify-between">
        <button v-on:click="addCredentials()" class="bg-indigo-400 h-12 w-52 rounded-full text-white text-xl
        justify-center flex items-center ">Add Credential
          <i class="bi bi-plus text-3xl flex justify-centre "></i>
        </button>
        <button class=" ml-2 bg-indigo-400 h-12 w-52 rounded-full text-white text-xl
        justify-center flex items-center ">Upload List
          <i class="bi bi-cloud-arrow-up text-4xl flex justify-centre ml-2"></i>
        </button>
      </div>
    </div>

    <div class="search-bar">
      <input placeholder="Searchbar"
             v-on:keyup="searchCredential($event)"
             type="search"
             class="border border-gray-400 rounded w-full mt-5 h-10 px-2 outline-0">
    </div>

    <hr class="my-5">
    <div class="flex flex-wrap my-5 mx-auto">
      <CardModal
          v-bind:details="credential"
          v-bind:key="index"
          v-bind:id="index"
          v-for="(credential, index) in credentials"/>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
import CardModal from './Modals/CredentialModal.vue';
import CredentialForm from "@/components/Forms/CredentialForm";

export default {
  name : 'CredentialsComponent',

  components : {
      CardModal,
      CredentialForm
  },

  data(){
    return {
      addNew : false
   }
  },

  methods : {
    addCredentials(){
     this.$router.push({path:'/credentials/add'})
    },

    changeRoute(status){
      this.addNew = status
    },

    searchCredential(event) {
      this.$store.commit('setSearchTerm', event.target.value)
    }

  },

  watch:{
      $route: {
        handler (){
          this.addNew = !this.addNew
        },
        deep: true
      }
  },

  computed : {
    credentials(){
      return this.$store.getters.getCredentials;
    },

  },
}
</script>

<style lang="scss" scoped>

</style>