<template>
    <div class="columns-7 ">
        <p>CV</p>
        <p>2021 CV</p>
        <p>Document</p>
        <p>61.28Kb</p>
        <p><i class="bi bi-file-earmark-medical-fill"></i></p>
        <p>1 second ago</p>


        <div class="dropdown inline-block relative">
          <button class="bg-slate-300 rounded w-20">...</button>
          <div class="dropdown-content hidden absolute w-32 overflow-auto border rounded ">
            <button class="block text-black p-1 decoration-0 flex justify-start w-full hover:bg-gray-200">
              <i class="bi bi-arrow-down mr-1"></i>Download
            </button>
            <button class="block text-black p-1 decoration-0 flex justify-start w-full hover:bg-gray-200">
              <i class="bi bi-trash mr-2"></i>Delete
            </button>
            <button class="block text-black p-1 decoration-0 flex justify-start w-full hover:bg-gray-200">
              <i class="bi bi-share mr-2"></i>Share
            </button>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "FilesModal"
}
</script>

<style scoped>
  .dropdown:hover .dropdown-content {
    display: block;
    position: fixed;
  }
</style>