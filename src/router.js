import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
import Photo from './views/Photo.vue';

Vue.use(Router);

export default new Router({
  route: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/:photo_id',
      name: 'photo',
      component: Photo
    }
  ]
});
