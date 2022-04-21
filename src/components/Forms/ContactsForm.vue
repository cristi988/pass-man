<template>
  <div class="backdrop-blur-xl pt-20  bg-black bg-opacity-80 fixed w-full h-full ">
    <div class="contactCard rounded-xl bg-white mt-20 border border-gray-300 w-5/12 mx-auto">
      <div class="flex justify-start items-center mt-2 text-2xl font-medium">
        <h1 class=" pl-3 mt-2">Create New Contact</h1>
      </div>
      <hr class="mt-3">

      <div class="flex justify-around w-full mt-3">
        <i class="bi bi-person-circle text-4xl w-3/12"></i>
        <input placeholder="First Name" class="w-9/12 outline-none">
        <input placeholder="Surname" class=" w-9/12 outline-none">
      </div>
      <hr>
      <div class="flex justify-around w-full mt-3">
        <i class="bi bi-envelope text-4xl w-2/12"></i>
        <input placeholder="Email" class="w-full outline-none">
      </div>
      <hr>
      <div class="flex justify-around w-full mt-3">
        <i class="bi bi-telephone text-4xl w-2/12"></i>
        <input placeholder="Telephone" class="w-full outline-none">
      </div>
      <hr>
      <div class="flex justify-around w-full h-20">
        <i class="bi bi-journal text-4xl w-2/12 pt-5"></i>
        <textarea class="w-full outline-none resize-none pt-3" placeholder="Note"></textarea>
      </div>
      <hr>
      <div class="flex justify-between mt-5 p-2">
        <button class="border bg-sky-500 border-2 rounded-xl text-2xl w-24 h-12 text-white hover:shadow">
          <i class="bi bi-send flex justify-center"></i>
        </button>
        <button class="border bg-amber-300 border-2 text-2xl rounded-2xl w-24 h-12 text-white hover:shadow"
                v-on:click="closeForm()">
          <i class="bi bi-x-lg flex justify-center"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsForm",

  methods : {
    closeForm() {
      this.$router.push({name:this.$route.name, query : { }})
    }
  }
}
</script>

<style scoped>
  .contactCard{
    height: 400px;
  }
</style>