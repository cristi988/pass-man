<template>
  <div class="mt-20 text-gray-500 text-4xl ">
    <div class="flex w-7/12 mx-auto h-56 ">
      <div class="border w-1/2 ">
        <router-link to="/credentials">
            <button class="pt-20 w-full">Credentials</button>
            <i class="bi bi-card-list "></i>
        </router-link>
      </div>

      <div class="border w-1/2 ">
        <router-link to="/cards">
          <button class="pt-20 w-full">Cards</button>
          <i class="bi bi-credit-card-2-front"></i>
        </router-link>
      </div>
    </div>

    <div class="flex bg-blue-400 w-7/12 mx-auto h-56">
      <div class="border w-1/2">
        <router-link to="/files">
          <button class="pt-20 w-full"> Files</button>
          <i class="bi bi-folder2"></i>
        </router-link>
      </div>

      <div class="border w-1/2">
        <router-link to="/settings">
          <button class="pt-20 w-full"> Settings</button>
          <i class="bi bi-gear"></i>
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
  .flex{
    background-color: #9BB0C7;
    color: #EFF2DC;
  }
</style>