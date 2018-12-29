import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/scss/app.scss';
import './register-globals';
import AddFontawesome from './add-fontawesome';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

AddFontawesome();
