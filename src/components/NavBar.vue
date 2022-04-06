<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
