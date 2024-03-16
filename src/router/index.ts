import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/login/Login.vue";
import Main from '@/views/Main.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component:Login
    },
    {
      path: '/Main',
      name: 'Main',
      component:Main
    },
  ]
})

export default router
