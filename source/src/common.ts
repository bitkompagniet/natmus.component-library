import { VueConstructor, PluginFunction } from 'vue';

import customBootstrap from './builds/customBootstrap';
import fontawesome from './builds/fontawesome';
import globalComponents from './builds/globalComponents';
import vuelidate from 'vuelidate';

const Vuelidate = vuelidate as unknown as PluginFunction<any>;

const plugin = {
    install(vue: VueConstructor) {
        vue.use(customBootstrap);
        vue.use(fontawesome);
        vue.use(globalComponents);
        vue.use(Vuelidate);
    },
};

export default plugin;
