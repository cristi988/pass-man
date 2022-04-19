<template>
  <form class="form bg-blue-100 w-5/12 mx-auto mt-5 rounded">
    <h1 class="text-4xl">New Credential</h1>

    <div class="mb-3 px-2 mt-5">
      <label class="flex" >Tag *</label>
      <input type="text" class=" rounded h-10 w-full mt-2 border border-gray-400 px-1" placeholder="Enter Tag Name">
    </div>

    <div class="mb-3 px-2">
      <label class="flex">Username *</label>
      <input class=" rounded h-10 w-full mt-2 border border-gray-400 px-1" placeholder="Enter Your Username">
    </div>

    <div class="mb-3 px-2">
      <label class="flex">Password *</label>
      <input class=" rounded h-10 w-full mt-2 border border-gray-400 px-1" placeholder="Enter Your Password">
    </div>

    <div class="mb-3 px-2">
      <label class="flex">Target</label>
      <input class=" rounded h-28 w-full mt-2 border border-gray-400 px-1"  placeholder="Enter Your Details">
    </div>

    <div class="flex justify-between px-3 mt-7">
      <button class="border border-sky-500 border-2 rounded-xl text-2xl w-24 h-12 hover:bg-sky-500 hover:text-white">
        <i class="bi bi-send"></i>
      </button>
      <button class="border border-yellow-300 border-2 text-2xl rounded-2xl w-24 h-12 hover:bg-yellow-300
            hover:text-white">
        <i class="bi bi-x-square"></i>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "CredentialForm"
}
</script>

<style scoped>
  .form {
    height: 550px;
  }
</style>

