import Vue from 'vue';
import DemoApp from '../demo/DemoApp.vue';
import router from '../demo/router';

export default function() {
    new Vue({
        router,
        render: (h) => h(DemoApp),
    }).$mount('#app');
}
