import Vue from 'vue';
import Router from 'vue-router';
import Structure from './views/Structure.vue';
import Forms from './views/Forms.vue';
import Elements from './views/Elements.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'structure',
      component: Structure,
    },
    {
      path: '/elements',
      name: 'elements',
      component: Elements,
    },
    {
      path: '/forms',
      name: 'forms',
      component: Forms,
    },
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
