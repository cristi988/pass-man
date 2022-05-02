<template>
  <div class="pt-96 bg-black bg-opacity-60 flex justify-center fixed top-0 left-0 w-full h-full">
    <div class="alert w-4/12 mx-auto rounded-xl bg-white py-5">
      <div class="border-gray-300 text-xl font-bold ">
        <h2 class="">Confirm</h2>
      </div>

      <div class="py-1 break-words h-16 mt-4">
        <p>Are you sure you want to delete this {{ type }}?</p>
      </div>

      <div class=" flex justify-between mt-4 h-14 border-t border-gray-400 ">
        <button
            class="w-full border-r border-gray-400 text-sky-500 font-bold hover:bg-gray-200 hover:rounded-bl-xl"
            @click="cancelAlert()">
          Cancel
        </button>
        <button
            class="w-full text-sky-500 font-bold hover:bg-gray-200 hover:rounded-br-xl"
        @click="confirmDeletion()">
          Yes
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertComponent",
  props:{
    type : '',

  },

  data() {
    return {

    }
  },

  methods : {
    cancelAlert(){
      this.$store.commit('showAlert');
    },
    confirmDeletion(){
      this.$store.dispatch('confirmDelete')
      this.$toast.success("Your information has been deleted",{
        position: "bottom-right",
        timeout: 3000,
        pauseOnHover: true,
        hideProgressBar: true,
      })
    }
  },

  computed : {

  },

  mounted(){

  }
}
</script>

<style scoped>
  .alert {
    max-height: 200px;
    flex-direction: column;
  }
</style>