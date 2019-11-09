import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/views/home/Home.vue'
import Login from '@/views/login/Login.vue'
import Commodity from '@/views/commodity/Commodity.vue'
import Client from '@/views/client/Client.vue'
import Order from '@/views/order/Order.vue'
import qyk from '@/views/qyk/qyk.vue'
import newqyk from '@/views/qyk/newqyk.vue'
const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/commodity',
      component: Commodity
    },
    {
      path: '/client',
      component: Client
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/login',
      components: {
        login: Login
      }
    },
    {
      path:'/qyk',
      component:qyk
    },
    {
      path:'/newqyk',
      component:newqyk
    }
  ]
});
//登入拦截
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    let res = localStorage.getItem('login')
    if (res && JSON.parse(res).isLogin) {
      next()
    } else {
      next('./login')
    }
    console.log('登入成功')
  }
})


export default router