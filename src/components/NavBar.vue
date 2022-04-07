<template>
    <nav class="navbar navbar-expand-lg px-3">
      <button class="btn" v-on:click="toggleLeftMenu()"><i class="bi bi-list"></i></button>
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
        .btn{
            border-color : white; 
        }
        .bi {
            color: white;
            font-size: 20px;
        }
    }
</style>
