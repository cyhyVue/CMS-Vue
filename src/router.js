import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/home/Home.vue'
import Login from '@/views/login/Login.vue'
import Client from '@/views/client/Client.vue'
const router = new VueRouter({
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '/client',
        component: Client
      }
    ]
})

export default router