import { VueConstructor } from 'vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../assets/scss/app.scss';

const plugin = {
    install(vue: VueConstructor) {
        const _ = require('lodash');
        const requireComponent = require.context('../demo', true, /\w+\.(vue|js)$/);

        requireComponent.keys().forEach((filename) => {
            const componentConfig = requireComponent(filename);
            const componentName = 'd-' + _.kebabCase(filename.replace(/^\.\/(.*)\.\w+$/, '$1'));
            vue.component(componentName, componentConfig.default || componentConfig);
        });

        const DemoApp = require('../demo/DemoApp.vue').default;
        const router = require('../demo/router').default;

        new vue({
            router,
            render: (h) => h(DemoApp),
        }).$mount('#app');
    },
};

export default plugin;
