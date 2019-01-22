import Vue from 'vue';

import common from './common';
import demoWebApp from './builds/demoWebApp';

Vue.config.productionTip = false;

Vue.use(common);
Vue.use(demoWebApp);
