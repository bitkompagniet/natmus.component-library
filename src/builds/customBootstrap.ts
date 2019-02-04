import { VueConstructor } from 'vue';

const plugin = {
    install(vue: VueConstructor): void {
        const BootstrapVue = require('bootstrap-vue').default;
        require('bootstrap-vue/dist/bootstrap-vue.css');
        require('../assets/scss/app.scss');

        vue.use(BootstrapVue);
    },
};

export default plugin;
