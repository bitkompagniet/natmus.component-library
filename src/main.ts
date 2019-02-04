import Vue from 'vue';

import common from './common';
import demoWebApp from './builds/demoWebApp';
import { IAuth0Options } from './builds/authentication';

Vue.config.productionTip = false;

const authOptions: IAuth0Options = {
    domain: process.env.VUE_APP_AUTH0_DOMAIN,
    clientID: process.env.VUE_APP_AUTH0_CLIENT_ID,
    redirectUri: `${process.env.VUE_APP_URL}/auth-callback`,
};

Vue.use(common, authOptions);
Vue.use(demoWebApp);
