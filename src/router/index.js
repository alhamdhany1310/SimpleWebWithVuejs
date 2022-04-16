import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
