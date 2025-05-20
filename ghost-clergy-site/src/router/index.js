import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  {
    path: '/', 
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // Example of lazy loading for a route (good for larger apps):
    // component: () => import('../views/AboutView.vue')
  }
  // We will add more routes here for News, Gallery, Profiles etc. later
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Uses the browser's history API for clean URLs
  routes // shorthand for `routes: routes`
});

export default router; // Export the router instance