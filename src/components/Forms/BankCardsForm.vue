<template>
  <div class="backdrop-blur-xl pt-20  bg-black bg-opacity-80 flex justify-center fixed top-0 left-0 w-full h-full">
    <div class="bankCard rounded-xl bg-white mt-20 border border-gray-300 w-5/12 mx-auto">
      <div class="flex justify-start items-center mt-2 text-2xl font-medium">
        <h1 class=" px-3  mt-2">Create New Bank Card</h1>
      </div>
      <div class="flex justify-around w-full mt-5 items-center border-t">
        <i class="bi bi-person-circle text-2xl w-2/12 flex justify-center items-center"></i>
        <input
            type="text"
            placeholder="Holder Name"
            class="w-full py-4 h-full"
            v-model="bankDetails.name">
      </div>


      <div class="flex justify-around w-full h-14 border-t">
        <i class="bi bi-calendar-minus text-2xl w-2/12 flex justify-center items-center"></i>
        <input
            placeholder="Expire Date"
            class="w-full"
            v-model="bankDetails.expireDate"
            maxlength="5">
      </div>


      <div class="flex justify-around w-full h-14 border-t">
        <i class="bi bi-credit-card-2-front text-2xl w-2/12 flex justify-center items-center"></i>
        <input type="number"
               placeholder="Card Number"
               class="w-full"
               v-model="bankDetails.cardNumber"
               maxlength="16"
               oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
      </div>

      <div class="flex justify-around w-full h-14 border-t">
        <i class="bi bi-credit-card-2-back text-2xl w-2/12 flex justify-center items-center"></i>
        <input
            placeholder="Short Code"
            class="w-full"
            v-model="bankDetails.shortCode"
            maxlength="8">
      </div>

      <div class="flex justify-around w-full h-14 border-t">
        <i class="bi bi-credit-card-2-back text-2xl w-2/12 flex justify-center items-center"></i>
        <input type="number"
               placeholder="Account Number"
               class="w-full" v-model="bankDetails.accountNumber"
               maxlength="8"
               oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
      </div>

      <div class="flex justify-around w-full h-14 border-t border-b">
        <i class="bi bi-123 text-2xl w-2/12 flex justify-center items-center"></i>
        <input type="number"
               placeholder="CCV"
               class="w-full"
               v-model="bankDetails.ccv"
               maxlength="3"
               oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
      </div>

      <div class="flex justify-between px-3 mt-7">
        <button class="border bg-sky-400 rounded-xl text-2xl w-24 h-12 text-white hover:bg-sky-500 disabled:bg-gray-400"
                @click="addBankCards()" v-bind:disabled="!isValid">
          <i class="bi bi-send flex justify-center"></i>
        </button>
        <button class="border bg-rose-400 text-2xl rounded-2xl w-24 h-12 text-white hover:bg-rose-500"
                v-on:click="closeForm()">
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
      this.$router.push({path:'/cards'})
    },

    addBankCards() {
      this.$store.commit('storeBankDetails', this.bankDetails);
      this.closeForm();
    },
  },

  computed : {
    isValid(){
      return this.bankDetails.name && this.bankDetails.expireDate && this.bankDetails.cardNumber &&
        this.bankDetails.shortCode && this.bankDetails.accountNumber && this.bankDetails.ccv;
    }
  }

}
</script>

<style scoped>
  .bankCard {
    height: 500px;
  }
  input{
    @apply px-3;
    @apply outline-0;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>