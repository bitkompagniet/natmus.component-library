import Vue from 'vue';

import core from './module';
import demoWebApp from './builds/demoWebApp';
import VueHighlightJS from 'vue-highlightjs';
import fontawesome from './builds/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { IAuth0Options } from './builds/authentication';

Vue.config.productionTip = false;

const authOptions: IAuth0Options = {
    domain: process.env.VUE_APP_AUTH0_DOMAIN,
    clientID: process.env.VUE_APP_AUTH0_CLIENT_ID,
    redirectUri: `${process.env.VUE_APP_URL}/auth-callback`,
    audience: `https://${process.env.VUE_APP_AUTH0_DOMAIN}/api/v2/`,
};

Vue.use(core, {
    globalBootstrap: true,
    globalComponents: true,
    auth: authOptions,
});

Vue.use(fontawesome);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueHighlightJS);
Vue.use(demoWebApp);
