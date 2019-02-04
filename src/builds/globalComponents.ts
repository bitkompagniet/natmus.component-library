import { VueConstructor } from 'vue';

const plugin = {
    install(vue: VueConstructor): void {
        console.log('globalComponents.ts');

        const _ = require('lodash');
        const requireComponent = require.context('../components', true, /\w+\.(vue|js)$/);

        console.log(requireComponent);

        requireComponent.keys().forEach((filename) => {
            const componentConfig = requireComponent(filename);
            const componentName = 'n-' + _.kebabCase(filename.replace(/^\.\/(.*)\.\w+$/, '$1'));
            vue.component(componentName, componentConfig.default || componentConfig);
            console.log(componentName);
        });
    },
};

export default plugin;
