<template>
  <div class="">
    <div class="image h-screen ">
      <img src="/public/images/2.jpg" alt="" class="">
    </div>

    <form class="">
      <div class="login bg-slate-50 ">
        <h1 class="text-6xl mt-5 ">Login</h1>

        <div class=" mt-10 mx-auto w-9/12 flex justify-center  h-10">
          <input type="text" placeholder="Email" class="w-full px-2 rounded border">
        </div>

        <div class=" mt-5 mx-auto w-9/12 flex justify-center h-10">
          <input type="password" placeholder="Password" class="w-full px-2 rounded border">
        </div>

        <div class="mt-3 mr-44 mx-1">
          <input type="checkbox" name="" id=""> Remember Me
        </div>

        <div class="bg-gray-700 text-white rounded mt-5 w-9/12 h-10 text-2xl flex justify-center ml-12">
           <router-link to="/login"><button class="w-full">Login</button></router-link>
        </div>

        <div class="text-blue-300 rounded mt-2 h-10 mr-28">
          <a href="">Forgot Your Password?</a>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
export default {
    name : 'LoginPage'
}
</script>

<style lang="scss" scoped>
    .image {
      background-image: url('/public/images/2.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat ;
    }

    .login {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      //background-color: white;
      width: 400px;
    }
</style>