<template>
  <div class="backdrop-blur-xl pt-20  bg-black bg-opacity-80 flex justify-center fixed top-0 left-0 w-full h-full ">
    <div class="form border border-gray-100 bg-gray-200 p-7 sm:w-6/12 w-5/12 mx-auto mt-8 rounded">
      <h1 class="text-4xl">Upload a personal file</h1>
      <hr class="mt-3">
      <div class="mb-3 px-2 mt-5">
        <label class="flex" >File Name</label>
        <input type="text" class="border border-gray-300 rounded h-12 w-full mt-2 px-1">
      </div>
      <div class="mb-3 px-2">
        <label class="flex">File description</label>
        <textarea class="border border-gray-300 rounded h-28 w-full mt-2 px-1 resize-none outline-none"></textarea>
      </div>

      <div class="mb-3 flex justify-between">
        <input type="file" class="form-control" id="inputGroupFile02">
      </div>

      <div class="flex justify-between px-2 mt-7">
        <button class="border bg-sky-400 border-2 rounded-xl text-2xl w-24 h-12 text-white hover:bg-sky-500"
                >
          <i class="bi bi-send flex justify-center"></i>
        </button>
        <button class="border bg-rose-400 border-2 text-2xl rounded-2xl w-24 h-12 text-white hover:bg-rose-500"
                v-on:click="closeForm()">
          <i class="bi bi-x-lg flex justify-center"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilesForm",

  methods : {
    closeForm(){
      this.$router.push({path:'/files'})
    },
  }
}
</script>

<style scoped>
  .form {
    height: 500px;
  }
  input{
    @apply px-3;
    @apply outline-0;
  }
  hr{
    height: 1px;
    background-color: black;
    border: none;
  }
</style>