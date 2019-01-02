import Vue from 'vue';

import useCustomBootstrap from './builds/customBootstrap';
import useFontawesome from './builds/fontawesome';
import useGlobalComponents from './builds/globalComponents';

Vue.config.productionTip = false;

useCustomBootstrap();
useFontawesome();
useGlobalComponents();
