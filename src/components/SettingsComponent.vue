<template>
  <div class="mx-auto py-3 w-8/12 lg:w-10/12">
    <!-- Title of the page-->
    <div class="p-2">
      <div class=" flex justify-center items-center">
        <h2 class="text-6xl">User Details</h2>
      </div>
    </div>
    <!-- buttons for change password and API token-->
    <div class="flex mt-2  border-b">
      <router-link to="/settings">
        <button class="mr-3 text-sky-500 hover:text-sky-700">
          <a href="">Change Password</a>
        </button>
      </router-link>

      <router-link to="/settings/token">
        <button class="ml-20 text-sky-500 hover:text-sky-700">
          <a href="">Your API Token</a>
        </button>
      </router-link>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
import PasswordForm from "@/components/Forms/PasswordForm";
export default {
  name : 'SettingsComponent',

  components : {
    PasswordForm,
  },

  props : {

  },



}
</script>
