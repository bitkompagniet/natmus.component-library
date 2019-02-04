import { IAuth0Options } from './builds/authentication';
import { VueConstructor, PluginObject } from 'vue';
import common from './common';

export interface INclOptions {
    auth?: IAuth0Options;
}

const plugin: PluginObject<INclOptions> = {
    install(vue: VueConstructor, options: INclOptions | undefined): void {
        vue.config.productionTip = false;

        const defaults: INclOptions = {};
        const finalOptions: INclOptions = { ...defaults, ...options };

        vue.use(common, finalOptions.auth);
    },
};

export default plugin;
