<template>

    <div class="w-2/6 p-2 mx-auto ">
        <div class="card rounded-lg p-2 relative ">
            <div class="flex flex-row justify-between items-center">
                <div class=" rounded-full border-slate-300 border border-gray-500 inline-flex p-2">
                    <img :src="d" class="w-12" >
                </div>          
                <h3 class="text-xl w-full"> {{details.target}} </h3>
                </div>
            <section class="card-body mt-6 relative ">
                <div class=" rounded bg-white flex justify-between items-center flex-row p-1 ">
                    <div class="hi w-10 h-10  rounded flex justify-center items-center ">
                        <i class="bi bi-person  text-xl text-white" ></i>
                    </div>
                    <div class="py-3" >
                        <p>{{ details.username }}</p>
                    </div>
                    <button class="hy w-10 h-10 rounded flex justify-center items-center">
                        <i class="bi bi-files text-xl text-white"></i>
                    </button>
                    
                </div>

                <div class=" w-100 rounded bg-white flex justify-between items-center flex-row p-1 my-2">
                    <div class="hi w-10 h-10   rounded flex justify-center items-center">
                        <i class="bi bi-key text-xl text-white"></i>
                    </div>
                    <div class="py-3" >
                      <input type="password" class="bg-white text-center" v-model:value="details.password" disabled>
                    </div>
                    <button class="hy w-10 h-10  rounded flex justify-center
                    items-center ">
                        <i class="bi bi-files text-xl text-white"></i>
                    </button>
                </div>
                <button class="w-20 text-gray-600" v-on:click="cardOpen=!cardOpen" >
                    <i class="bi  mx-0 px-0" v-bind:class="{'bi-toggle-off':!cardOpen, 'bi-toggle-on':cardOpen}"
                     style="font-size:40px;">
                    </i>
                </button>
            </section>
               
            <section class="details" v-if=cardOpen>
                <p class="h-auto py-4 pl-1 pt-3
                  flex items-center justify-center
                  my-5 w-full
                  bg-white
                  rounded-md
                  break-words
                  text-left
                  resize-none" >
                  {{ details.tag }}
                </p>
                <div class="flex justify-between">
                  <button  class="w-3/12 py-1 hover:bg-sky-500 bg-sky-400  rounded-full" @click="edit(id)">
                    <i class="bi bi-pencil text-white text-2xl"></i>
                  </button>
                  <button class="w-3/12 py-1 hover:bg-red-500 bg-red-400  rounded-full flex justify-center items-center"
                          @click="deleteCredentials()" >
                    <i class="bi bi-trash text-white text-2xl flex justify-centre" ></i>
                  </button>

                  <button  class="w-3/12 py-1 hover:bg-yellow-500 bg-yellow-400   rounded-full">
                    <i class="bi bi-share text-white text-2xl" ></i>
                  </button>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import AlertComponent from "@/components/AlertComponent";
export default {
  name: 'CardModal',

  components : {
    AlertComponent,
  },

  props: {
    details: Object,
    id: Number,
  },

  data: () => {
    return {
      cardOpen: false,
    }
  },


  methods: {
    edit(id) {
      this.$router.replace({path:`/credentials/${id}/update`, params: {id : id}})
    },

    deleteCredentials(){
      // this.$store.dispatch('deleteCredentials' , this.id)
      this.$store.commit('showAlert', {state:true, parent :'credentials', child:this.id})
    },

  },

  computed: {
    d() {
      return '../images/target.png';
    },
  },
}
</script>

<style>
 .card {
   /*background-color: #EFF2DC;*/
   background-color: #EFF2DC;
 }

 .hi {
   background-color: #D9E0AD;
 }

 .hy {
   background-color: #B1C055;
 }

 .hy:hover {
   background-color: #565E23;
 }
</style>

