<template>
  <div id="app">
    <section>
      <NavBar/>
    </section>
    <LeftMenu/>
    <div class="container mx-auto">
      <div class="flex flex-wrap border">
          <CardModal v-bind="details" />
          <CardModal v-bind="details" />
          <CardModal v-bind="details" />
          <CardModal v-bind="details" />
          <CardModal v-bind="details" />
          <CardModal v-bind="details" />
          <CardModal v-bind="details" />
          <CardModal v-bind="details" />
          <CardModal v-bind="details" />
          <CardModal v-bind="details" />
      </div>
    </div>  
  </div>       
</template>

<script>
import CardModal from './components/CardModal.vue'
import NavBar from './components/NavBar.vue'
import LeftMenu from './components/LeftMenu.vue'
export default {
  components : {
    CardModal,
    NavBar,
    LeftMenu,
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

  computed : {
    menu(){
      return this.$store.state.menu
    }
  } 
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
