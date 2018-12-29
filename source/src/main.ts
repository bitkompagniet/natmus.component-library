import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import router from './router';

import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/scss/app.scss';
import './register-globals';

import AddFontawesome from './add-fontawesome';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

AddFontawesome();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
