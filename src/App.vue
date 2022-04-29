<template>
  <div id="app">

    <section>
      <NavBar v-if="!$route.meta.menu"/>
    </section>
    <!--End NavBar-->

    <!--Left menu-->
    <LeftMenu class=" z-50 fixed" v-if="!$route.meta.menu"/>
    <!--End Left menu-->

    <div class="container mx-auto" >
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
import NavBar from './components/NavBarComponent.vue'
import LeftMenu from './components/LeftMenuComponent.vue'
import LoginPage from './components/LoginPageComponent.vue'
import AlertComponent from "@/components/AlertComponent";
export default {
  components : {
    AlertComponent,
    NavBar,
    LeftMenu,
    LoginPage,
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

  methods : {

  },

  computed : {
    menu(){
      return this.$store.state.menu
    },

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

.container {
  padding-top: 70px;
}
</style>
