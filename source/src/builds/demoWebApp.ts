import { VueConstructor } from 'vue';

const plugin = {
    install(vue: VueConstructor) {
        const DemoApp = require('../demo/DemoApp.vue').default;
        const router = require('../demo/router').default;

        new vue({
            router,
            render: (h) => h(DemoApp),
        }).$mount('#app');
    },
};

export default plugin;
