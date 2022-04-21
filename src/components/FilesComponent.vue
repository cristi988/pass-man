<template>
  <div class="mx-auto py-3 w-10/12 float-right lg:float-none lg:w-10/12 md:float-none">

    <div class="title flex justify-between p-2">
      <div class="left flex items-center">
        <h2 class="text-4xl">Files</h2>
      </div>
      <div class="right">
        <button v-on:click="addFiles()" class="bg-indigo-400 h-12 w-32 rounded-full text-white text-xl
        justify-evenly flex items-center ">Upload
          <i class="bi bi-cloud-arrow-up text-3xl flex justify-centre"></i>
        </button>
      </div>
    </div>

    <div class="search-bar">
      <input placeholder="Searchbar" type="text" class="border border-gray-400 rounded w-full mt-5 h-10 px-2 outline-0">
    </div>

    <hr class="mt-3">

    <div>
      <h2 class="flex justify-start text-2xl p-2">My Files</h2>
      <p class="flex justify-start p-2">0.00 Bits</p>
      <hr class="mt-1">
    </div>


    <div class="flex justify-between space-x-28 mt-2 ">
      <p>Name</p>
      <p>Description</p>
      <p>Category</p>
      <p>Size</p>
      <p>Type</p>
      <p>Uploaded</p>
      <p>Actions</p>
    </div>
    <hr class="mt-2">

    <div>
      <FilesModal v-bind="test"/>
    </div>

    <div>
    <FilesForm v-if="addNew" class="flex justify-center fixed top-0 left-0 "/>
    </div>

  </div>
</template>

<script>
import FilesModal from '@/components/Modals/FilesModal';
import FilesForm from "@/components/Forms/FilesForm";
export default {
  name : 'FilesComponent',

  components: {
    FilesModal,
    FilesForm
  },

  data(){
    return {
      test : true,
      addNew : false,
    }
  },

  methods : {
    addFiles(){
      if(!this.$route.query.add){
        this.$router.push({name:this.$route.name, query : { add : true }})
      }else{
        this.$router.push({name:this.$route.name, query : {  }})
      }
    },

    changeRoute(status){
      this.addNew = status
    }
  },
  watch:{
    $route: {
      handler (){
        this.addNew = !this.addNew
      },
      deep: true
    }
  },
}
</script>