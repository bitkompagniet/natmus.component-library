import Vue from 'vue';
import Router from 'vue-router';
import Structure from './views/Structure.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'structure',
      component: Structure,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
