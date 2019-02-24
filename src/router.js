import Vue from 'vue';
import Router from 'vue-router';

import Photo from './views/Photo.vue';

Vue.use(Router);

export default new Router({
  route: [
    {
      path: '/:photo_id',
      name: 'photo',
      component: Photo
    }
  ]
});
