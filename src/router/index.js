import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '../components/HomeComponent.vue';
import CredentialsComponent from '../components/CredentialsComponent.vue';
import CardsComponent from '../components/CardsComponent.vue';
import FilesComponent from '../components/FilesComponent.vue';
import SettingsComponent from '../components/SettingsComponent.vue';
import ContactsComponent from "@/components/ContactsComponent";
import CredentialComponent from "@/components/CredentialComponent";


Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    redirect : '/home'
  },

  {
    path: '/home',
    component: HomeComponent,
  },

  {
    path : '/credentials',
    component : CredentialsComponent,
    children : [
      {
        path : '/credential/:id',
        component : CredentialComponent,
      },
    ]
  },



  {
    path : '/cards',
    component : CardsComponent,
  },

  {
    path : '/files',
    component : FilesComponent,
  },

  {
    path : '/settings',
    component : SettingsComponent,
  },

  {
    path : '/contacts',
    component: ContactsComponent,
  }


]

const router = new VueRouter({
  mode : 'history',
  routes
})

export default router
