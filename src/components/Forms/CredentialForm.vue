<template>
  <div class="backdrop-blur-xl pt-20  bg-black bg-opacity-80 fixed w-full h-full ">
    <div class="form border border-gray-100 bg-gray-200 p-7 sm:w-9/12 w-5/12 mx-auto mt-8 rounded">
      <h1 class="text-4xl">New Credential</h1>

      <div class="mb-3 px-2 mt-5">
        <label class="flex" >Target *</label>
        <input type="text" class=" rounded h-12 w-full mt-2 px-1" v-model="credentials.target">
      </div>

      <div class="mb-3 px-2">
        <label class="flex">Username *</label>
        <input class=" rounded h-12 w-full mt-2 px-1" v-model="credentials.username">
      </div>

      <div class="mb-3 px-2">
        <label class="flex">Password *</label>
        <input class=" rounded h-12 w-full mt-2 px-1" v-model="credentials.password">
      </div>

      <div class="mb-3 px-2">
        <label class="flex">Tag</label>
        <input class="rounded h-28 w-full mt-2 px-1" v-model="credentials.tag">
      </div>

      <div class="flex justify-between px-3 mt-7">
        <button class="border bg-sky-500 border-2 rounded-xl text-2xl w-24 h-12 text-white hover:shadow"
          @click="addCredentials()">
          <i class="bi bi-send flex justify-center"></i>
        </button>
        <button class="border bg-amber-300 border-2 text-2xl rounded-2xl w-24 h-12 text-white hover:shadow"
        v-on:click="closeForm()">
          <i class="bi bi-x-lg flex justify-center"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CredentialForm",

  data(){
    return {
      credentials : {
        target : '',
        username : '',
        password : '',
        tag : '',
      }
    }
  },


  methods : {
    closeForm(){
      this.$router.push({name:this.$route.name, query : {  }})
    },

    addCredentials() {
      this.$store.commit('storeCredentials', this.credentials);
      this.closeForm()
    }
  }
}
</script>

<style scoped>
  .form {
    height: 600px;
  }
  input{
    @apply px-3;
    @apply outline-0;
  }
</style>

