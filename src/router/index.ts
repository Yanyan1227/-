import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/login/Login.vue";
import Tumi from '@/views/Tumi.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component:Login
    },
    {
      path: '/Tumi',
      name: 'Tumi',
      component:Tumi
    },
  ]
})

export default router
