<template>
  <div class="mx-auto py-3 w-10/12 float-right lg:float-none lg:w-10/12 md:float-none">
    <div class="title flex justify-between">
      <div class="left">
        <h2 class="text-4xl">Contacts</h2>
      </div>
      <div class="right ">
        <button v-on:click="addContacts()" class="bg-indigo-400 h-12 w-12 rounded-full text-white text-4xl
        justify-center flex items-center ">
          <i class="bi bi-plus"></i>
        </button>
      </div>
    </div>
    <div class="search-bar">
      <input placeholder="Searchbar" type="text" class="border border-gray-400 rounded w-full mt-5 h-10 px-2 outline-0">
    </div>
    <hr class="mt-5">

    <div class="columns-5">
      <p>Name</p>
      <p>Email</p>
      <p>Phone Number</p>
      <p>Note</p>
      <p>Actions</p>
    </div>
    <hr class="mt-2">

    <ContactModal v-bind="test"/>
    <router-view></router-view>

  </div>
</template>

<script>
import ContactModal from "@/components/Modals/ContactModal";
import ContactsForm from "@/components/Forms/ContactsForm";
import FilesModal from "@/components/Modals/FilesModal";
import FilesForm from "@/components/Forms/FilesForm";
export default {
  name: "ContactsComponent",
  components: {
    ContactModal,
    ContactsForm,
  },

  data(){
    return {
      test : true,
      addNew : false,
    }
  },

  methods : {
    addContacts(){
      this.$router.push({path:'/contacts/add'})
    },

    changeRoute(status){
      this.addNew = status
    }
  },
  watch:{
    $route: {
      handler (){
        this.addNew = !this.addNew
      },
      deep: true
    }
  },
}
</script>

<style scoped>

</style>