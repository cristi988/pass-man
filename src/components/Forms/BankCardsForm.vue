<template>
  <div class="backdrop-blur-xl pt-20  bg-black bg-opacity-80 fixed w-full h-full ">
    <div class="form border border-gray-100 bg-gray-200 p-7 w-5/12 sm:w-5/12 md:w-5/12 mx-auto mt-8 rounded">
      <h1 class="text-4xl">New Bank Card</h1>

      <div class="mb-3 px-2 mt-5">
        <label class="flex">Holder Name</label>
        <input type="text" class=" rounded h-12 w-full mt-2 px-1" v-model="bankDetails.name">
      </div>

      <div class="mb-3 px-2">
        <label class="flex">Expire Date</label>
        <input class=" rounded h-12 w-full mt-2 px-1" v-model="bankDetails.expireDate">
      </div>

      <div class="mb-3 px-2">
        <label class="flex">Card Number</label>
        <input class=" rounded h-12 w-full mt-2 px-1" v-model="bankDetails.cardNumber">
      </div>

      <div class="mb-3 px-2">
        <label class="flex">Short Code</label>
        <input class=" rounded h-12 w-full mt-2 px-1" v-model="bankDetails.shortCode">
      </div>
      <div class="mb-3 px-2">
        <label class="flex">Account number</label>
        <input class=" rounded h-12 w-full mt-2 px-1" maxlength="8" v-model="bankDetails.accountNumber">
      </div>
      <div class="mb-3 px-2">
        <label class="flex">CCV</label>
        <input class=" rounded h-12 w-full mt-2 px-1" maxlength="3" v-model="bankDetails.ccv">
      </div>
      <div class="flex justify-between px-3 mt-7">
        <button class="border bg-sky-500 border-2 rounded-xl text-2xl w-24 h-12 text-white hover:shadow"
                @click="addBankCards">
          <i class="bi bi-send flex justify-center"></i>
        </button>
        <button class="border bg-amber-300 border-2 text-2xl rounded-2xl w-24 h-12 text-white hover:shadow"
                @click="closeForm()">
          <i class="bi bi-x-lg flex justify-center"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackCardsForm",

  data : ()=>{
    return {
      bankDetails :{
        name : '',
        expireDate : '',
        cardNumber: '',
        shortCode : '',
        accountNumber : '',
        ccv : '',
      }
   }
  },

  methods : {
    closeForm() {
      this.$router.push({name:this.$route.name, query : { }})
    },

    addBankCards() {
      this.$store.commit('storeBankDetails', this.bankDetails);
      this.closeForm();
    },


  }
}
</script>

<style scoped>
  .form {
    height: 730px;
  }
  input{
    @apply px-3;
    @apply outline-0;
  }
</style>