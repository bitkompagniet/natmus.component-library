import Vue from 'vue';

import useCustomBootstrap from './builds/customBootstrap';
import useFontawesome from './builds/fontawesome';
import useGlobalComponents from './builds/globalComponents';
import useDemoWebApp from './builds/demoWebApp';

Vue.config.productionTip = false;

useCustomBootstrap();
useFontawesome();
useGlobalComponents();
useDemoWebApp();
