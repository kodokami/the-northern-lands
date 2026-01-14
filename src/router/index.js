import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/MapView.vue')
    },
    //{
    //  path: '/glossary',
    //  name: 'glossary',
    //  component: () => import('../views/GlossaryView.vue')
    //},
    //{
    //  path: '/resources',
    //  name: 'resources',
    //  component: () => import('../views/ResourcesView.vue')
    //},
  ]
});

export default router;
