import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Employees from '@/views/Employees.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Employees
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
