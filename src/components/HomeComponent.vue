<template>
  <div class="container h-80 text-5xl">

    <div class="flex bg-blue-400 w-7/12 mx-auto flex h-56 ">
      <div class="border w-1/2 ">
        <router-link to="/credentials">
          <button class="pt-20 flex justify-evenly w-full">Credentials
            <i class="bi bi-card-list "></i>
          </button>
        </router-link>
      </div>

      <div class="border w-1/2">
        <router-link to="/cards">
          <button class="pt-20 flex justify-evenly w-full">Cards
            <i class="bi bi-credit-card-2-front"></i>
          </button>
        </router-link>
      </div>
    </div>

    <div class="flex bg-blue-400 w-7/12 mx-auto h-56">
      <div class="border w-1/2">
        <router-link to="/files">
          <button class="pt-20 flex justify-evenly w-full"> Files
            <i class="bi bi-folder2"></i>
          </button>
        </router-link>
      </div>

      <div class="border w-1/2">
        <router-link to="/settings">
          <button class="pt-20 flex justify-evenly w-full"> Settings
            <i class="bi bi-gear"></i>
          </button>
        </router-link>
      </div>
    </div>

  </div>
</template>


<script>
export default {
    name : 'HomeComponent',
}
</script>


<style lang="scss" scoped>
  .container {
    color: #EFF2DC;
  }
</style>