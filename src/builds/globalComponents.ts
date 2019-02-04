import { VueConstructor } from 'vue';
import _ from 'lodash';
const requireComponent = require.context('../components', true, /\w+\.(vue|js)$/);

const plugin = {
    install(vue: VueConstructor): void {
        requireComponent.keys().forEach((filename) => {
            const componentConfig = requireComponent(filename);
            const componentName = 'n-' + _.kebabCase(filename.replace(/^\.\/(.*)\.\w+$/, '$1'));
            vue.component(componentName, componentConfig.default || componentConfig);
        });
    },
};

export default plugin;
