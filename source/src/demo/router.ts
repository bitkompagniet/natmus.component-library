import Vue from 'vue';
import Router from 'vue-router';
import Structure from './views/Structure.vue';
import Forms from './views/Forms.vue';
import Components from './views/Components.vue';
import FullExample from './views/FullExample.vue';
import BootstrapStyling from './views/BootstrapStyling.vue';
import TextPage from './views/TextPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'structure',
      component: Structure,
    },
    {
      path: '/components',
      name: 'components',
      component: Components,
    },
    {
      path: '/forms',
      name: 'forms',
      component: Forms,
    },
    {
      path: '/full',
      name: 'full',
      component: FullExample,
    },
    {
      path: '/bootstrap-styling',
      name: 'bootstrap-styling',
      component: BootstrapStyling,
    },
    {
      path: '/text-page',
      name: 'text-page',
      component: TextPage,
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
