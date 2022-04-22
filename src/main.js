import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.css';
import VueConfirmDialog from './components/ConfirmationDialog'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


Vue.config.productionTip = false
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)

const options = {
  // You can set your default options here
};


Vue.use(Toast, options);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
