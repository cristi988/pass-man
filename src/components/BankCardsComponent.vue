<template>
  <div class="mx-auto py-3 w-10/12 float-right lg:float-none lg:w-10/12 md:float-none">
    <div class="title flex justify-between">
      <div class="left">
        <h2 class="text-4xl">Bank Cards</h2>
      </div>
      <div class="right ">
        <button v-on:click="addBankCards()" class="bg-indigo-400 h-12 w-44 rounded-full text-white text-xl
        justify-center flex items-center ">Add Card
          <i class="bi bi-plus text-4xl"></i>
        </button>
      </div>
    </div>
    <div class="search-bar">
      <input v-on:keyup="searchCard($event)" placeholder="Searchbar" type="text" class="border border-gray-400 rounded w-full mt-5 h-10 px-2 outline-0">
    </div>
    <hr class="mt-5">

    <div class=" flex flex-wrap my-5 mx-auto">
      <BankCardComponent
          v-for="(bankCard, index) in bankCards"
          v-bind:key="index"
          v-bind:id="index"
          v-bind:details="bankCard"/>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
import BankCardComponent from "@/components/Modals/BankCardModal";
import BankCardsForm  from "@/components/Forms/BankCardsForm";
export default {
  name : 'CardsComponent',

  components : {
    BankCardComponent,
    BankCardsForm,
  },

  data(){
    return {
      addNew : false,
    }
  },

  methods : {
    addBankCards(){
      this.$router.push({path:'/cards/add'})
    },

    changeRoute(status){
      this.addNew = status
    },

    searchCard(event){
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
    bankCards(){
     return this.$store.getters.getBankDetails;
    }
  }
}
</script>