import { VueConstructor } from 'vue';

const plugin = {
    install(vue: VueConstructor) {
        const customBootstrap = require('./builds/customBootstrap').default;
        const fontawesome = require('./builds/fontawesome').default;
        const globalComponents = require('./builds/globalComponents').default;

        vue.use(customBootstrap);
        vue.use(fontawesome);
        vue.use(globalComponents);
    },
};

export default plugin;
