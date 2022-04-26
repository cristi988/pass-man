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
import LoginPage from '@/components/LoginPageComponent';
import FileComponent from "@/components/Empty Route/FileComponent";
import ContactComponent from "@/components/Empty Route/ContactComponent";
import SettingsForm from "@/components/Forms/PasswordForm";
import PasswordForm from "@/components/Forms/PasswordForm";


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
    path : '/credentials/:id?',
    component : CredentialsComponent,
    name: 'credentials',
    props : true,
    children : [
      {
        path : 'update',
        component : CredentialForm,
      },
      {
        path : 'add',
        component: CredentialForm,
      }
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
    name: 'files',
    props : true,
    children : [
      {
        path : '/file/:id',
        component : FileComponent,
      },
    ]
  },

  {
    path : '/contacts',
    component: ContactsComponent,
    name: 'contacts',
    props : true,
    children : [
      {
        path : '/contact/:id',
        component : ContactComponent,
      },
    ]
  },

  {
    path : '/settings',
    component : SettingsComponent,
    name : 'settings',
    props : true,
    children : [
      {
        path: 'password',
        component: PasswordForm,
      },
      {
        path: 'token',
        // component: TokenForm,
      }
    ]
  },


]

const router = new VueRouter({
  mode : 'history',
  routes
})

export default router
