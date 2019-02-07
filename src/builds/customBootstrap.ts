import { VueConstructor } from 'vue';
import BootstrapVue from 'bootstrap-vue';

const plugin = {
    install(vue: VueConstructor): void {
        vue.use(BootstrapVue);
    },
};

export default plugin;
