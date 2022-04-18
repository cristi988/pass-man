<template>
  <div class="mx-auto py-3 w-10/12 float-right lg:float-none lg:w-10/12 md:float-none">
    <div class="title flex justify-between">
      <div class="left">
        <h2 class="text-4xl">Credentials</h2>
      </div>
      <div class="right ">
        <button class="bg-indigo-600 h-12 w-12 rounded-full text-white text-4xl justify-center flex items-center "><i class="bi bi-plus"></i></button>
      </div>
    </div>

    <hr class="my-5">
    <div class="flex flex-wrap my-5 mx-auto">
      <CardModal v-bind="details" v-bind:id="'1'"/>
      <CardModal v-bind="details" v-bind:id="'2'"/>
      <CardModal v-bind="details" v-bind:id="'3'"/>
      <CardModal v-bind="details" v-bind:id="'4'"/>
      <CardModal v-bind="details" v-bind:id="'5'"/>
    </div>
  </div>

</template>

<script>
import CardModal from './CardModal.vue'
export default {
    name : 'CredentialsComponent',

    components : {
        CardModal
    },

    data(){
    return {
      details : {
        target : '',
        username : '',
        password : '',
        tag : '',
        iconPath : '../images/target.png'
      }      
    }
    },
}
</script>

<style lang="scss" scoped>

</style>