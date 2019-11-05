import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/home/Home.vue'
import Login from '@/views/login/Login.vue'
import Order from '@/views/order/Order.vue'
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
        path: '/order',
        component: Order
      }
    ]
})

export default router