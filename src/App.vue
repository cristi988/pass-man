<template>
  <div id="app">
    <!-- <LoginPage/> -->
    <section>
      <NavBar/>
    </section>
    <LeftMenu class=" z-50  fixed "/>

    <div class="container mx-auto">
      <router-view ></router-view>
    </div>  
  </div>       
</template>

<script>
import NavBar from './components/NavBar.vue'
import LeftMenu from './components/LeftMenu.vue'
import LoginPage from './components/Loginpage.vue'
export default {
  components : {
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

.container {
  padding-top: 70px;
}
</style>
