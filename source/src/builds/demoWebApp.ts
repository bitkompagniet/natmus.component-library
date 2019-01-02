import Vue from 'vue';
import DemoApp from '../DemoApp.vue';
import router from '../router';

export default function() {
    new Vue({
        router,
        render: (h) => h(DemoApp),
    }).$mount('#app');
}
