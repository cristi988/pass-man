<template>
  <div class="mx-auto 2xl:w-96 lg:w-1/3 md:w-2/2 w-full p-2 ">
    <div class="card rounded-lg p-2 relative ">

      <div class="flex flex-row justify-between items-center">
        <div class="rounded-full inline-flex p-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" class="w-20" >
        </div>
        <h3 class=" text-xl font-bold"> Barclays Debit </h3>
      </div>

      <section class="mt-3">
        <div class=" rounded bg-white flex justify-between flex-row break-words">
          <div class="py-3 p-1" >
            <p>Holder Name</p>
          </div>
          <div class="py-3 p-1 " >
            {{ details.name }}
          </div>
        </div>

        <div class=" rounded bg-white flex justify-between flex-row mt-2">
          <div class="py-3 p-2" >
            <p>Expire Data</p>
          </div>
          <div class="py-3 p-2" >
            {{details.expireDate}}
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
            {{details.cardNumber}}
          </div>
        </div>

        <div class=" rounded bg-white flex justify-between flex-row mt-2">
          <div class="py-3 p-2" >
            <p>Short Code</p>
          </div>
          <div class="py-3 p-2" >
            {{details.shortCode}}
          </div>
        </div>

        <div class=" rounded bg-white flex justify-between flex-row mt-2">
          <div class="py-3 p-2" >
            <p>Account number</p>
          </div>
          <div class="py-3 p-2" >
            {{details.accountNumber}}
          </div>
        </div>

        <div class=" rounded bg-white flex justify-between flex-row mt-2">
          <div class="py-3 p-2" >
            <p>CCV</p>
          </div>
          <div class="py-3 p-2" >
            {{details.ccv}}
          </div>
        </div>

        <div class="flex justify-between mt-2">
          <button  class="w-3/12  py-1 bg-sky-400 rounded-full h-12 hover:bg-sky-500">
            <i class="bi bi-eye-slash text-white flex justify-center text-2xl" ></i>
          </button>
          <button  class="w-3/12  py-1 bg-red-500 rounded-full h-12 hover:bg-red-600" @click="deleteCard()">
            <i class="bi bi-trash text-white flex justify-center text-2xl" ></i>
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
    deleteCard() {
      this.$confirm(
          {
            message: 'Are you sure?',
            button: {
              no: 'No',
              yes: 'Yes'
            },
            /**
             * Callback Function
             * @param {Boolean} confirm
             */
            callback: confirm => {
              if (confirm) {
                this.$store.dispatch('deleteBankDetails', this.id)
                this.$toast.success("Your card has been deleted", {
                  timeout: 2000,
                  position: "bottom-right",
                })
              }
            }
          }
      )
    },


  }
}
</script>


<style lang="scss" scoped>
.card {
  background-color: #EFF2DC;
}
</style>