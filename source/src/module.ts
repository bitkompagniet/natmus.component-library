import { VueConstructor, PluginObject } from 'vue';

export interface INclOptions {
    key: string;
}

const plugin: PluginObject<INclOptions> = {
    install(vue: VueConstructor, options: INclOptions | undefined): void {
        const common = require('./common');
        vue.config.productionTip = false;
        vue.use(common);
    },
};

export default plugin;
