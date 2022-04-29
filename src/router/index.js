import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '../components/HomeComponent.vue';
import CredentialsComponent from '../components/CredentialsComponent.vue';
import CardsComponent from '../components/BankCardsComponent.vue';
import FilesComponent from '../components/FilesComponent.vue';
import SettingsComponent from '../components/SettingsComponent.vue';
import ContactsComponent from "@/components/ContactsComponent";
import CredentialForm from "@/components/Forms/CredentialForm";
import LoginPage from '@/components/LoginPageComponent';
import PasswordForm from "@/components/Forms/PasswordForm";
import BankCardsForm from "@/components/Forms/BankCardsForm";
import FilesForm from "@/components/Forms/FilesForm";
import ContactsForm from "@/components/Forms/ContactsForm";
import TokenComponent from "@/components/TokenComponent";

Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    redirect : '/login'
  },

  {
    path : '/login',
    component : LoginPage,
    name:'login',
    meta: {
      menu: true,
    }
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
        path:'update',
        component:CredentialForm,
      },
      {
        path:'add',
        component:CredentialForm,
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
        path:'add',
        component:BankCardsForm,
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
        path:'add',
        component:FilesForm,
      },
    ]
  },

  {
    path:'/contacts/:id?',
    component:ContactsComponent,
    name:'contacts',
    props:true,
    children:[
      {
        path:'update',
        component:ContactsForm
      },
      {
        path:'add',
        component:ContactsForm,
      },
    ]
  },

  {
    path : '/settings',
    component : SettingsComponent,
    props : true,
    children : [
      {
        path: '',
        component: PasswordForm,
        name: 'passwordForm'
      },
      {
        path: 'token',
        component: TokenComponent,
      }
    ]
  },


]

const router = new VueRouter({
  mode : 'history',
  routes
})

export default router
