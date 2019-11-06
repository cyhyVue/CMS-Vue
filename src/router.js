import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/home/Home.vue'
import Login from '@/views/login/Login.vue'
import Commodity from '@/views/commodity/Commodity.vue'
import Client from '@/views/client/Client.vue'
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
        path: '/commodity',
        component: Commodity
      },
{
        path: '/client',
        component: Client},
        {
        path: '/order',
        component: Order
      }
    ]
})

export default router