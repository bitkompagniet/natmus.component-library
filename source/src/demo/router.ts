import Vue from 'vue';
import Router from 'vue-router';
import Structure from './views/Structure.vue';
import Forms from './views/Forms.vue';
import Components from './views/Components.vue';
import FullExample from './views/FullExample.vue';
import BootstrapStyling from './views/BootstrapStyling.vue';
import TextPage from './views/TextPage.vue';
import StepPage from './views/StepPage.vue';
import RichTextExample from './views/RichTextExample.vue';
import FileUploadExample from './views/FileUploadExample.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'structure',
    },
    {
      path: '/structure',
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
      path: '/bootstrap-styling',
      name: 'bootstrap-styling',
      component: BootstrapStyling,
    },
    {
      path: '/examples/text-page',
      name: 'text-page',
      component: TextPage,
    },
    {
      path: '/examples/step-page',
      name: 'step-page',
      component: StepPage,
    },
    {
      path: '/examples/full',
      name: 'full',
      component: FullExample,
    },
    {
      path: '/examples/rich-text',
      name: 'rich-text',
      component: RichTextExample,
    },
    {
      path: '/examples/file-uploads',
      name: 'file-uploads',
      component: FileUploadExample,
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
