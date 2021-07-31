import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import MedDetail from '@/views/MedDetail.vue';
import CustomMed from '@/views/CustomMed.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/custom',
    name: 'CustomMed',
    component: CustomMed,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/medicine/:id',
    name: 'MedDetail',
    component: MedDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
