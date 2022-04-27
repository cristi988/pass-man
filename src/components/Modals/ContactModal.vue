<template>
  <div class="flex-row">
    <div class="columns-5 mt-5">
      <p> {{ contactDetails.firstName}} </p>
      <p> {{ contactDetails.email }} </p>
      <p> {{ contactDetails.phone }} </p>
      <p class=" "> {{contactDetails.note}} </p>
      <div class="dropdown inline-block relative ">
        <button class="bg-slate-300 rounded w-20">...</button>
        <div class="dropdown-content hidden absolute w-28 overflow-auto border rounded ">
          <button class="block text-black p-1 decoration-0 flex justify-start w-full hover:bg-gray-200" @click="deleteContact()">
            <i class="bi bi-trash mr-2"></i>Delete
          </button>
          <button class="block text-black p-1 decoration-0 flex justify-start w-full hover:bg-gray-200" @click="editContact(id)">
            <i class="bi bi-pencil mr-2"></i>Edit
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "ContactModal",

  props : {
    contactDetails : Object,
    id : Number,
  },

  methods : {
    editContact(id){
      this.$router.replace({path:`/contacts/${id}/update`, params: {id : id}})
    },

    deleteContact(){
      this.$confirm(
          {
            message: 'Are you sure?',
            button: {
              no: 'No',
              yes: 'Yes'
            },
            /**
             * Callback Function
             * @param {Boolean} confirm
             */
            callback: confirm => {
              if (confirm) {
                this.$store.dispatch('deleteContacts', this.id)
                this.$toast.success("Your card has been deleted", {
                  timeout: 2000,
                  position: "bottom-right",
                })
              }
            }
          }
      )
    }
  },

}
</script>

<style scoped>
  .dropdown:hover .dropdown-content {
    display: block;
    position: fixed;
    z-index: 999;
    background-color: white;
  }
</style>