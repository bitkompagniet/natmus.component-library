import { VueConstructor, PluginObject, PluginFunction } from 'vue';
import authentication, { IAuth0Options } from './builds/authentication';
import customBootstrap from './builds/customBootstrap';
import fontawesome from './builds/fontawesome';
import globalComponents from './builds/globalComponents';
import VueHighlightJS from 'vue-highlightjs';
import vuelidate from 'vuelidate';

const Vuelidate = vuelidate as unknown as PluginFunction<any>;

export interface INclOptions {
    auth?: IAuth0Options;
}

const plugin: PluginObject<INclOptions> = {
    install(vue: VueConstructor, options: INclOptions | undefined): void {
        const x = vue as any;
        console.log(x.options.components);
        vue.config.productionTip = false;

        const defaults: INclOptions = {};
        const finalOptions: INclOptions = { ...defaults, ...options };

        if (finalOptions.auth) {
            vue.use(authentication, finalOptions.auth);
        }

        vue.use(customBootstrap);
        console.log('AFTER');
        console.log(x.options.components);
        vue.use(fontawesome);
        console.log(x.options.components);
        vue.use(globalComponents);
        console.log(x.options.components);
        // vue.use(Vuelidate);
        // console.log(x.options.components);
        vue.use(VueHighlightJS);
        console.log(x.options.components);
    },
};

export default plugin;
