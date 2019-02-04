import { VueConstructor, PluginFunction } from 'vue';

import customBootstrap from './builds/customBootstrap';
import fontawesome from './builds/fontawesome';
import globalComponents from './builds/globalComponents';
import VueHighlightJS from 'vue-highlightjs';
import vuelidate from 'vuelidate';
import authentication, { IAuth0Options } from './builds/authentication';

const Vuelidate = vuelidate as unknown as PluginFunction<any>;

const plugin = {
    install(vue: VueConstructor, authOptions: IAuth0Options) {
        if (authOptions) {
            vue.use(authentication, authOptions);
        }

        vue.use(customBootstrap);
        vue.use(fontawesome);
        vue.use(globalComponents);
        vue.use(Vuelidate);
        vue.use(VueHighlightJS);
    },
};

export default plugin;
