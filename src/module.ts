import { VueConstructor, PluginObject, PluginFunction } from 'vue';
import authentication, { IAuth0Options } from './builds/authentication';
import customBootstrap from './builds/customBootstrap';
// import fontawesome from './builds/fontawesome';
import globalComponents from './builds/globalComponents';
import vuelidate from 'vuelidate';

// const Vuelidate = vuelidate as unknown as PluginFunction<any>;

export interface INclOptions {
    auth?: IAuth0Options;
}

const plugin: PluginObject<INclOptions> = {
    install(vue: VueConstructor, options: INclOptions | undefined): void {
        vue.config.productionTip = false;

        const defaults: INclOptions = {};
        const finalOptions: INclOptions = { ...defaults, ...options };

        if (finalOptions.auth) {
            // vue.use(authentication, finalOptions.auth);
        }

        vue.use(customBootstrap);
        // vue.use(fontawesome);
        vue.use(globalComponents);
        // vue.use(Vuelidate);
    },
};

export default plugin;
