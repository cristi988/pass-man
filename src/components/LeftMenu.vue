<template>
     <div class="left-menu bg-slate-600 duration-300 h-full" v-bind:class="{vis:menuVisible, unvis:!menuVisible}">
         <div class="flex flex-col items-start text-xl">
            <button class="w-full btn px-2 py-2 flex justify-between flex-row hover:bg-slate-700">Home<i class="bi bi-house"></i></button>
            <button class="w-full btn px-2 py-2 flex justify-between flex-row hover:bg-slate-700">Credentials<i class="bi bi-card-list"></i> </button>    
            <button class="w-full btn px-2 py-2 flex justify-between flex-row hover:bg-slate-700">Cards<i class="bi bi-credit-card-2-front"></i></button>
            <button class="w-full btn px-2 py-2 flex justify-between flex-row hover:bg-slate-700">Files<i class="bi bi-folder2"></i></button>
            <button class="w-full btn px-2 py-2 flex justify-between flex-row hover:bg-slate-700">Settings<i class="bi bi-gear"></i></button>
            <button class="w-full btn px-2 py-2 flex justify-between flex-row hover:bg-slate-700">Contacts<i class="bi bi-person-video2"></i></button>
            <button class="w-full btn px-2 py-2 flex justify-between flex-row hover:bg-slate-700">Logout<i class="bi bi-box-arrow-right"></i></button>
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
        width:220px;
        color: #EFF2DC;
        background-color: #5A6B7C;        
    }

    .vis{
        left : 0;
    }

    .unvis{
        left: -170px;
    }
</style>

