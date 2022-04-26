<template>
  <div>
    <div class="border border-gray-100 bg-gray-100 p-7 mx-auto mt-8 rounded">
      <h1 class="text-4xl">Upload a personal file</h1>
      <hr class="mt-3">
      <div class="mb-3 px-2 mt-5">
        <label class="flex">Email</label>
        <input type="email" class="border border-gray-300 rounded h-12 w-full mt-2 px-1 bg-white" disabled>
      </div>
      <div class="px-2 mt-7">
        <button class="border bg-sky-400 border-2 rounded-xl text-2xl w-full h-12 text-white hover:bg-sky-500">
          Generate Token
        </button>
        <button class="border bg-sky-400 border-2 mt-5 rounded-xl text-2xl w-full h-12 text-white hover:bg-sky-500">
          Refresh Token
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TokenComponent"
}
</script>

<style scoped>

</style>