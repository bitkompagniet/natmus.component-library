import Vue from 'vue';

import module from './module';
import demoWebApp from './builds/demoWebApp';
import VueHighlightJS from 'vue-highlightjs';

import { IAuth0Options } from './builds/authentication';

Vue.config.productionTip = false;

const authOptions: IAuth0Options = {
    domain: process.env.VUE_APP_AUTH0_DOMAIN,
    clientID: process.env.VUE_APP_AUTH0_CLIENT_ID,
    redirectUri: `${process.env.VUE_APP_URL}/auth-callback`,
};

Vue.use(module, { auth: authOptions });
Vue.use(VueHighlightJS);
Vue.use(demoWebApp);
