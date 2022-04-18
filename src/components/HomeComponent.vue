<template>
  <div class="container">
    <div class="flex">
      <div class="border w-1/2">
        <router-link to="/credentials">
          <button>Credentials<i class="bi bi-card-list"></i> </button>
        </router-link>
      </div>
      <div class="border w-1/2">
        <router-link to="/cards">
          <button>Cards<i class="bi bi-credit-card-2-front"></i></button>
        </router-link>
      </div>
    </div>

    <div class="flex">
      <div class="border w-1/2">
        <router-link to="/files">
          <button> Files<i class="bi bi-folder2"></i></button>
        </router-link>
      </div>
      <div class="border w-1/2">
        <router-link to="/settings">
          <button> Settings<i class="bi bi-gear"></i></button>
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

</style>