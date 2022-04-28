<template>
  <div class="backdrop-blur-xl pt-20  bg-black bg-opacity-80 flex justify-center fixed top-0 left-0 w-full h-full ">
    <div class="contactCard rounded-xl bg-white mt-20 border border-gray-300 w-5/12 mx-auto">
      <div class="flex justify-start items-center mt-2 text-2xl font-medium">
        <h1 class=" px-3  mt-2">Create New Contact</h1>
      </div>

      <div class="flex justify-around w-full mt-5 items-center border-t">
        <i class="bi bi-person-circle text-2xl w-3/12 flex justify-center items-center"></i>
        <input placeholder="First Name" class="w-9/12 py-4 outline-none h-full" v-model="contacts.firstName">
        <input placeholder="Surname" class=" w-9/12 py-4 px-3 outline-none border-l-2 h-full flex" v-model="contacts.lastName">
      </div>


      <div class="flex justify-around w-full h-12 border-t">
        <i class="bi bi-envelope text-2xl w-2/12 flex justify-center items-center"></i>
        <input placeholder="Email" class="w-full outline-none" v-model="contacts.email">
      </div>


      <div class="flex justify-around w-full h-12 border-t">
        <i class="bi bi-telephone text-2xl w-2/12 flex justify-center items-center"></i>
        <input placeholder="Telephone" class="w-full outline-none" v-model="contacts.phone">
      </div>


      <div class="flex justify-around items-center w-full h-20 border-b border-t py-2">
        <i class="bi bi-journal text-2xl w-2/12  flex justify-center"></i>
        <textarea class="w-full outline-none resize-none pt-3 " placeholder="Note" v-model="contacts.note"></textarea>
      </div>


      <div class="flex justify-between mt-5 py-2 px-3">
        <button class="border bg-sky-400 rounded-xl text-2xl w-24 h-12 text-white hover:bg-sky-500"
                @click="addContact()" v-if="!edit">
          <i class="bi bi-send flex justify-center" ></i>
        </button>
        <button class="border bg-sky-400 rounded-xl text-2xl w-24 h-12 text-white hover:bg-sky-500"
                @click="update()" v-if="edit">
          <i class="bi bi-pencil flex justify-center" ></i>
        </button>
        <button class="border bg-rose-400 border text-2xl rounded-xl w-24 h-12 text-white hover:bg-rose-500"
                @click="closeForm()">
          <i class="bi bi-x-lg flex justify-center"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsForm",

  data() {
    return {
      contacts: {
        firstName : '',
        lastName : '',
        email : '',
        phone : '',
        note : '',
      },
      edit : false,

    }
  },

  methods: {
    closeForm() {
      this.$router.push({path:'/contacts'})
    },

    addContact(){
      this.$store.commit('storeContacts', this.contacts);
      this.closeForm();
    },

    update(){
      this.$router.push({path:'/contacts/'})
    }
  },

  mounted() {
    if(this.$route.params.id && this.$store.getters.getContacts.length > 0){
      this.edit = true;
      let contact = this.$store.getters.getContacts.filter((item, id)=>{
        return id === Number(this.$route.params.id)
      })
      this.contacts = contact[0]

    }
    else if(this.$route.params.id && this.$store.getters.getContacts.length < 1){
      this.closeForm()
    }
  },
}
</script>

<style scoped>
  .contactCard{
    height: 400px;
  }
</style>



