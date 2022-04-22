<template>
  <div class="mx-auto 2xl:w-1/4 lg:w-1/3 md:w-1/2 w-full p-2 ">
    <div class="card rounded-lg p-2 relative ">

      <div class="flex flex-row justify-between items-center">
        <div class="rounded-full inline-flex p-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" class="w-20" >
        </div>
        <h3 class=" text-xl font-bold"> Barclays Debit </h3>
      </div>

      <section class="mt-3">
        <div class=" rounded bg-white flex justify-between flex-row">
          <div class="py-3 p-1" >
            <p>Holder Name</p>
          </div>
          <div class="py-3 p-1" >
            <p >{{ details.name }}</p>
          </div>
        </div>

        <div class=" rounded bg-white flex justify-between flex-row mt-2">
          <div class="py-3 p-2" >
            <p>Expire Data</p>
          </div>
          <div class="py-3 p-2" >
            <p >{{details.expireDate}}</p>
          </div>
        </div>

        <button class="w-20 " v-on:click="cardOpen=!cardOpen" >
          <i class="bi  mx-0 px-0" v-bind:class="{'bi-toggle-off':!cardOpen, 'bi-toggle-on':cardOpen}" style="font-size:40px;"></i>
        </button>
      </section>

      <section v-if="cardOpen" class="">
        <div class=" rounded bg-white flex justify-between flex-row mt-2">
          <div class="py-3 p-2" >
            <p>Card Number</p>
          </div>
          <div class="py-3 p-2" >
            <p>{{details.cardNumber}}</p>
          </div>
        </div>

        <div class=" rounded bg-white flex justify-between flex-row mt-2">
          <div class="py-3 p-2" >
            <p>Short Code</p>
          </div>
          <div class="py-3 p-2" >
            <p>{{details.shortCode}}</p>
          </div>
        </div>

        <div class=" rounded bg-white flex justify-between flex-row mt-2">
          <div class="py-3 p-2" >
            <p>Account number</p>
          </div>
          <div class="py-3 p-2" >
            <p>{{details.accountNumber}}</p>
          </div>
        </div>

        <div class=" rounded bg-white flex justify-between flex-row mt-2">
          <div class="py-3 p-2" >
            <p>CCV</p>
          </div>
          <div class="py-3 p-2" >
            <p>{{details.ccv}}</p>
          </div>
        </div>

        <div class="flex justify-between mt-2">
          <button  class="w-3/12  py-1 bg-sky-500 rounded-full h-12">
            <i class="bi bi-eye-slash text-white flex justify-center" style="font-size: 25px;"></i>
          </button>
          <button  class="w-3/12  py-1 bg-red-600 rounded-full h-12" @click="deleteCard()">
            <i class="bi bi-trash text-white flex justify-center" style="font-size: 25px;"></i>
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name : 'CardsComponent',
  props : {
    details : Object,
    id : Number,
  },

  data : ()=> {
    return  {
      cardOpen : false,
    }
  },

  methods : {
    deleteCard(){
      this.$store.dispatch('deleteBankDetails', this.id)
    }
  }
}
</script>


<style lang="scss" scoped>
.card {
  background-color: #EFF2DC;
}
</style>