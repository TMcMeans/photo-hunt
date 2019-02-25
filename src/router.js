import Vue from 'vue';
import VueRouter from 'vue-router';

// import App from './App.vue';
import Photo from './views/Photo.vue';

Vue.use(VueRouter);

export default new VueRouter({
  route: [
    // {
    //   path: '/',
    //   name: 'App',
    //   component: App
    // },
    {
      path: '/:photo_id',
      name: 'photo',
      component: Photo
    }
  ]
});
