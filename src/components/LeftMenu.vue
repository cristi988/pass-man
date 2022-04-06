<template>
     <div class="left-menu" v-bind:class="{vis:menuVisible, unvis:!menuVisible}">
        <h2>Menu</h2>
    </div>
</template>

<script>
export default {
    name : 'LeftMenu',

    computed : {
        menuVisible(){
            return this.$store.state.menu
        }
    }
}
</script>

<style lang="scss" scoped>
    .left-menu {
        position: fixed;
        width:200px;
        border:1px solid red;
        height: 90%;
    }

    .vis{
        left : 0;
    }

    .unvis{
        left: -150px;
    }
</style>

//2 classe 
//menu visibil complet
//visibil doar putin