<template>
    <div class="w-3/12">
        <div class="rounded-lg bg-slate-700 text-yellow-50 p-2 relative ">
            <div class="flex flex-row justify-between items-center">
                <div class="rounded-full border-slate-300 border inline-flex p-2">
                    <img :src="d.iconPath" class="w-12" >
                </div>          
                <h3 class=" text-xl "> Google.com </h3>
               <button class=" hover:bg-red-800 w-12 h-12  bg-slate-500 rounded-full flex justify-center items-center ">
                    <i class="bi bi-trash text-light" style="font-size: 20px;"></i>
                </button>
            </div>

            <section class="card-body mt-6 relative ">
                <div class=" rounded-full bg-slate-600 flex justify-between flex-row p-1">
                    <div class="w-12 h-12 bg-slate-900 rounded-full flex justify-center items-center">
                        <i class="bi bi-person " style="font-size: 20px;"></i>
                    </div>
                    <div class="py-3" >
                        <p >Username</p>
                    </div>
                    <button class="hover:bg-slate-400 w-12 h-12  bg-slate-500 rounded-full flex justify-center items-center ">
                        <i class="bi bi-files text-light" style="font-size: 20px;"></i>
                    </button>
                    
                </div>

                <div class=" w-100 rounded-full bg-slate-600 flex justify-between flex-row p-1 my-2">
                    <div class="w-12 h-12 bg-slate-900 rounded-full flex justify-center items-center">
                        <i class="bi bi-key " style="font-size: 20px;"></i>
                    </div>
                    <div class="py-3" >
                        <p >***********</p>
                    </div>
                    <button class=" hover:bg-slate-400 w-12 h-12 bg-slate-500 rounded-full flex justify-center items-center ">
                        <i class="bi bi-files text-light" style="font-size: 20px;"></i>
                    </button>
                </div>
                <button class="w-20 border-2 rounded-full  hover:border-slate-400" v-on:click="cardOpen=!cardOpen" v-bind:class="{'border-slate-700':!cardOpen, 'border-slate-400':cardOpen}">
                    <i class="bi bi-three-dots mx-0 px-0" style="font-size:30px;"></i>
                </button>
            </section>
               
            <section class="details" v-if=cardOpen>

                <p class="h-auto py-3 flex items-center justify-center bg-slate-600 my-5 rounded-md" >
                    Tags and everything else
                </p>

                <div class="flex justify-between">
                    <button  class="w-3/12 border-2 py-1 border-blue-300 hover:bg-blue-400 rounded-full"><i class="bi bi-pencil text-light" style="font-size: 25px;"></i></button>
                    <button  class="w-3/12 border-2 py-1 border-yellow-500 hover:bg-yellow-500  rounded-full"><i class="bi bi-share text-light" style="font-size: 25px;"></i></button>
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
    },
    data : ()=>{
        return {
            cardOpen:false
        }
    },
    computed:{
        d(){
            if(this.details){
                return this.details
            }else{
                return {
                target : '',
                username : '',
                password : '',
                tag : '',
                iconPath :'../images/target.png'                
            }
            }
            
        }
    }
}
</script>
