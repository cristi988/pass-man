<template>

    <div class="columns-5">
      <p>Boss Giovany</p>
      <p>boss.giovy@yahoo.com</p>
      <p>0765412345</p>
      <p class=" ">Boss the boss sa moara veta</p>
      <div class="dropdown inline-block relative ">
        <button class="bg-slate-300 rounded w-20">...</button>
        <div class="dropdown-content hidden absolute w-28 overflow-auto border rounded ">
          <button class="block text-black p-1 decoration-0 flex justify-start w-full hover:bg-gray-200">
            <i class="bi bi-trash mr-2"></i>Delete
          </button>
          <button class="block text-black p-1 decoration-0 flex justify-start w-full hover:bg-gray-200">
            <i class="bi bi-pencil mr-2"></i>Edit
          </button>

        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "ContactModal"
}
</script>

<style scoped>
  .dropdown:hover .dropdown-content {
    display: block;
    position: fixed;
  }
</style>