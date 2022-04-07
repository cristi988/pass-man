<template>
    <nav class="navbar w-full text-left flex items-center px-3">
      <button class="btn w-10 h-10 text-2xl border rounded-full p-1" v-on:click="toggleLeftMenu()"><i class="bi bi-list"></i></button>
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
        background-color: #5A6B7C;
        min-height: 70px;
        color: #EFF2DC;
    }
</style>
