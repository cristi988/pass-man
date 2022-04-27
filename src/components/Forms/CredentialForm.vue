<template>
  <div class="backdrop-blur-xl pt-20  bg-black bg-opacity-80 flex justify-center fixed top-0 left-0  w-full h-full">
    <div class="credentialCard rounded-xl bg-white mt-20 border border-gray-300 w-5/12 mx-auto">
      <div class="flex justify-start items-center mt-2 text-2xl font-medium">
        <h1 class=" px-3  mt-2">Create New Credential</h1>
      </div>

      <div class="flex justify-around w-full mt-5 items-center border-t">
        <i class="bi bi-bullseye text-2xl w-2/12 flex justify-center items-center"></i>
        <input type="text" placeholder="Target" class="w-full py-4 h-full" v-model="credentials.target">
      </div>

      <div class="flex justify-around w-full h-14 border-t">
        <i class="bi bi-person-circle text-2xl w-2/12 flex justify-center items-center"></i>
        <input type="text" placeholder="Username" class="w-full" v-model="credentials.username">
      </div>

      <div class="flex justify-around w-full h-14 border-t">
        <i class="bi bi-key text-2xl w-2/12 flex justify-center items-center"></i>
        <input type="text" placeholder="Password" class="w-full" v-model="credentials.password">
      </div>

      <div class="flex justify-around items-center w-full h-20 border-b border-t py-2">
        <i class="bi bi-journal text-2xl w-2/12  flex justify-center mb-2.5"></i>
        <textarea class="w-full resize-none pt-3 outline-none ml-3" placeholder="Tag" v-model="credentials.tag">
        </textarea>
      </div>

      <div class="flex justify-between px-3 mt-7">
        <button class="border bg-sky-400 rounded-xl text-2xl w-24 h-12 text-white hover:bg-sky-500"
                @click="addCredentials()" v-if="!edit">
          <i class="bi bi-send flex justify-center"></i>
        </button>
         <button class="border bg-sky-400 rounded-xl text-2xl w-24 h-12 text-white hover:bg-sky-500"
                @click="update()" v-if="edit">
          <i class="bi bi-pencil flex justify-center"></i>
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
  name: "CredentialForm",

  data(){
    return {
      credentials : {
        target : '',
        username : '',
        password : '',
        tag : '',
      },
      edit : false,
    }
  },


  methods : {
    closeForm(){
      this.$router.push({path:'/credentials'})
    },

    addCredentials() {
      this.$store.commit('storeCredentials', this.credentials);
      this.closeForm();
    },
    update() {
      this.$router.push({path:'/credentials/'})
    }


  },

  mounted (){
    if(this.$store.getters.getCredentialsEdit){
      this.credentials = this.$store.getters.getCredentialsEdit
    }
    if(this.$route.params.id){
      this.edit = true;
      let credential = this.$store.getters.getCredentials.filter((item, id)=>{
        return id === Number(this.$route.params.id)
      })
      this.credentials = credential[0]
    }
  },

}
</script>

<style scoped>
  input{
    @apply px-3;
    @apply outline-0;
  }

  .credentialCard{
    height: 420px;
  }
</style>








