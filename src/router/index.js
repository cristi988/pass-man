import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '../components/HomeComponent.vue';
import CredentialsComponent from '../components/CredentialsComponent.vue';
import CardsComponent from '../components/BankCardsComponent.vue';
import FilesComponent from '../components/FilesComponent.vue';
import SettingsComponent from '../components/SettingsComponent.vue';
import ContactsComponent from "@/components/ContactsComponent";
import CredentialComponent from "@/components/Empty Route/CredentialComponent";
import CredentialForm from "@/components/Forms/CredentialForm";
import BankCardComponent from "@/components/Empty Route/BankCardComponent";
import LoginPage from '@/components/LoginPage';


Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    redirect : '/home'
  },

  {
    path : '/login',
    component : LoginPage,
  },

  {
    path: '/home',
    component: HomeComponent,
  },

  {
    path : '/credentials',
    component : CredentialsComponent,
    name: 'credentials',
    props : true,
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
    name: 'cards',
    props : true,
    children : [
      {
        path : '/card/:id',
        component : BankCardComponent ,
      },
    ]
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
