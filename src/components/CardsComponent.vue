<template>
  <div class="border mx-auto 2xl:w-1/4 lg:w-1/3 md:w-1/2 w-full p-2">
    <div class="card rounded-lg p-2 relative ">
      <div class="flex flex-row justify-between items-center">
        <div class="rounded-full border-slate-300 border inline-flex p-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" class="w-12" >
        </div>
        <h3 class=" text-xl "> Barclays Debit </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name : 'CardsComponent'
}
</script>


<style lang="scss" scoped>
  .card {
    background-color: #EFF2DC;
  }
</style>