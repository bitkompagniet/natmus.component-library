import Vue from 'vue';
import _ from 'lodash';

const requireComponent = require.context('./components', true, /\w+\.(vue|js)$/);

requireComponent.keys().forEach((filename) => {
    const componentConfig = requireComponent(filename);

    const componentName = _.kebabCase(filename.replace(/^\.\/(.*)\.\w+$/, '$1'));

    Vue.component(componentName, componentConfig.default || componentConfig);
    // console.log(componentName);
});
