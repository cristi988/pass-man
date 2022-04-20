<template>
  <div class="mx-auto py-3 w-10/12 float-right lg:float-none lg:w-10/12 md:float-none">

    <div class="title flex justify-between">
      <div class="left">
        <h2 class="text-4xl">Credentials</h2>
      </div>
      <div class="right ">
        <button v-on:click="addCredentials()" class="bg-indigo-400 h-12 w-12 rounded-full text-white text-4xl
        justify-center flex items-center ">
          <i class="bi bi-plus"></i>
        </button>
      </div>
    </div>

    <div class="search-bar">
      <input placeholder="Searchbar" type="text" class="border border-gray-400 rounded w-full mt-5 h-10 px-2 outline-0">
    </div>

    <hr class="my-5">
    <div class="flex flex-wrap my-5 mx-auto">
      <CardModal v-bind="details" v-bind:id="'1'"/>
      <CardModal v-bind="details" v-bind:id="'2'"/>
      <CardModal v-bind="details" v-bind:id="'3'"/>
      <CardModal v-bind="details" v-bind:id="'4'"/>
      <CardModal v-bind="details" v-bind:id="'5'"/>
    </div>

    <CredentialForm v-if="addNew" class="flex justify-center fixed top-0 left-0 "/>
  </div>

</template>

<script>
import CardModal from './Modals/CardModalComponent.vue';
import CredentialForm from "@/components/Forms/CredentialForm";

export default {
    name : 'CredentialsComponent',

    components : {
        CardModal,
        CredentialForm
    },

    data(){
      return {
        details : {
          target : '',
          username : '',
          password : '',
          tag : '',
          iconPath : '../images/target.png'
        },
        addNew : false
     }
    },
    methods : {
      addCredentials(){
        if(!this.$route.query.add){
          this.$router.push({name:this.$route.name, query : { add : true }})
        }else{
          this.$router.push({name:this.$route.name, query : {  }})
        }
      },

      changeRoute(status){
        this.addNew = status
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
  mounted(){
      console.log(this.$route.query.remove)
  }

}
</script>

<style lang="scss" scoped>

</style>