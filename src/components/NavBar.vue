<template>
    <nav class="navbar w-full text-left flex items-center px-3 fixed">
      <div>
      <button class="btn w-10 h-10 text-2xl border rounded-full p-1" v-on:click="toggleLeftMenu()">
        <i class="bi bi-list"></i>
      </button>
      </div>
    </nav>
</template>

<script>
export default {
    name : 'NavBar',

    methods : {
        toggleLeftMenu(){
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style lang="scss" scoped>
    .navbar {
        background-color: #8FA9BF;
        min-height: 70px;
        color: #EFF2DC;
        z-index: 999;
    }
</style>
