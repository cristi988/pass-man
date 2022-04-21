<template>
    <div class="flex justify-evenly space-x-28 mt-2">
      <p>CV</p>
      <p>2021 CV</p>
      <p>Document</p>
      <p>61.28Kb</p>
      <p><i class="bi bi-file-earmark-medical-fill"></i></p>
      <p>1 second ago</p>

      <div class="dropdown inline-block relative ">
        <button class="bg-slate-300 rounded w-16">...</button>
        <div class="dropdown-content hidden absolute w-28 overflow-auto ">
          <button class="block text-black p-1 decoration-0 flex justify-start w-full hover:bg-gray-200">
            Download
          </button>
          <button class="block text-black p-1 decoration-0 flex justify-start w-full hover:bg-gray-200">
            Delete
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
  .dropdown-content {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .dropdown:hover .dropdown-content {
    display: block;
    margin-top: 2px;
  }
</style>