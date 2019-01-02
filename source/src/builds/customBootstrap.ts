import Vue from 'vue';

import BootstrapVue from 'bootstrap-vue';


export default function() {
    require('bootstrap-vue/dist/bootstrap-vue.css');
    require('../assets/scss/app.scss');
    Vue.use(BootstrapVue);
}
