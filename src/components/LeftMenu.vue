<template>
     <div class="left-menu px-3 py-4" v-bind:class="{vis:menuVisible, unvis:!menuVisible}">
      
        <div class="row">
            <button class="btn">Home<i class="bi bi-house"></i></button>
            <button class="btn">Credentials<i class="bi bi-card-list"></i> </button>    
            <button class="btn">Cards<i class="bi bi-credit-card-2-front"></i></button>
            <button class="btn">Files<i class="bi bi-folder2"></i></button>
            <button class="btn">Settings<i class="bi bi-gear"></i></button>
            <button class="btn">Contacts<i class="bi bi-person-video2"></i></button>
            <button class="btn">Logout<i class="bi bi-box-arrow-right"></i></button>
        </div>
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
        min-width:200px;
        max-width: 250px;
        height: 99%;
        background-color: #5A6B7C;
        color : #EFF2DC;
        
        .row{         
            .btn{
                color: #EFF2DC;
                display: flex;
                justify-content: space-between;
                font-size: 25px;
                outline: none !important;
                box-shadow: none;
                &:hover{
                    background-color: #50585F;
                }
            }
        }

        
    }

    .vis{
        left : 0;
    }

    .unvis{
        left: -185px;
    }
</style>

