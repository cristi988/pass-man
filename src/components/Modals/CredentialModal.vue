<template>

    <div class=" 2xl:w-1/4 lg:w-1/3 md:w-1/2 w-full p-2 mx-auto ">
        <div class="card rounded-lg p-2 relative ">

            <div class="flex flex-row justify-between items-center">
                <div class="rounded-full border-slate-300 border inline-flex p-2">
                    <img :src="d" class="w-12" >
                </div>          
                <h3 class=" text-xl "> {{details.target}} </h3>
               <button class=" bg-red-500 hover:bg-red-600 w-10 h-10  bg-white rounded-full flex justify-center items-center ">
                    <i class="bi bi-trash text-white text-xl flex justify-centre" ></i>
                </button>
            </div>

            <section class="card-body mt-6 relative ">
                <div class=" rounded-full bg-white flex justify-between flex-row p-1">
                    <div class="w-12 h-12 bg-slate-400 rounded-full flex justify-center items-center">
                        <i class="bi bi-person text-white" style="font-size: 20px;"></i>
                    </div>
                    <div class="py-3" >
                        <p >{{ details.username }}</p>
                    </div>
                    <button class="bg-slate-500 hover:bg-slate-600 w-12 h-12   rounded-full flex justify-center items-center">
                        <i class="bi bi-files text-white" style="font-size: 20px;"></i>
                    </button>
                    
                </div>

                <div class=" w-100 rounded-full bg-white flex justify-between flex-row p-1 my-2">
                    <div class="w-12 h-12 bg-slate-400 rounded-full flex justify-center items-center">
                        <i class="bi bi-key text-white" style="font-size: 20px;"></i>
                    </div>
                    <div class="py-3" >
                        <p >{{ details.password }}</p>
                    </div>
                    <button class=" bg-slate-500 hover:bg-slate-600 w-12 h-12  rounded-full flex justify-center
                    items-center ">
                        <i class="bi bi-files text-white" style="font-size: 20px;"></i>
                    </button>
                </div>
                <button class="w-20 text-gray-600" v-on:click="cardOpen=!cardOpen" >
                    <i class="bi  mx-0 px-0" v-bind:class="{'bi-toggle-off':!cardOpen, 'bi-toggle-on':cardOpen}"
                     style="font-size:40px;">
                    </i>
                </button>
            </section>
               
            <section class="details" v-if=cardOpen>

                <p class="h-auto py-3 flex items-center justify-center bg-white my-5 rounded-md break-words" >
                  {{ details.tag }}
                </p>

                <div class="flex justify-between">
                    <button  class="w-3/12 py-1 hover:bg-blue-500 bg-blue-400  rounded-full">
                      <i class="bi bi-pencil text-white" style="font-size: 25px;" v-on:click="edit(id)"></i>
                    </button>
                    <button  class="w-3/12 py-1 hover:bg-yellow-500 bg-yellow-400   rounded-full">
                      <i class="bi bi-share text-white" style="font-size: 25px;"></i>
                    </button>
                </div>
            </section>
        </div> 
    </div>
</template>

<script>
export default {
    name : 'CardModal',
    props: {
        details : Object,
        id : Number,
    },
    data : ()=>{
        return {
            cardOpen:false,
        }
    },
    computed:{
        d(){
          return '../images/target.png';
        },
    },

    methods : {
      edit(id){
        this.$router.push(`credential/${id}`)
      }
    },

}
</script>

<style>
 .card {
   background-color: #EFF2DC;
 }
</style>

