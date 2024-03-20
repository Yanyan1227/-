import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/login/Login.vue";
import Main from '@/views/main/Main.vue';
import dashboard from "@/views/main/analysis/dashboard/dashboard.vue";
import overview from "@/views/main/analysis/overview/overview.vue";
import category from "@/views/main/product/category/category.vue";
import goods from "@/views/main/product/goods/goods.vue";
import chat from "@/views/main/story/chat/chat.vue";
import list from "@/views/main/story/list/list.vue";
import department from "@/views/main/system/department/department.vue";
import menu from "@/views/main/system/menu/menu.vue";
import role from "@/views/main/system/role/role.vue";
import user from "@/views/main/system/user/user.vue";


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
      component:Main,
      children:[
        {
          path:'/main/analysis/dashboard',
          component:dashboard
        },
        {
          path:'/main/analysis/overview',
          component:overview
        },
        {
          path:'/main/product/category',
          component:category
        },
        {
          path:'/main/product/goods',
          component:goods
        },
        {
          path:'/main/story/chat',
          component:chat
        },
        {
          path:'/main/story/list',
          component:list
        },
        {
          path:'/main/system/department',
          component:department
        },
        {
          path:'/main/system/menu',
          component:menu
        },
        {
          path:'/main/system/role',
          component:role
        },
        {
          path:'/main/system/user',
          component:user
        },
      ]
    }

  ]
})

export default router
