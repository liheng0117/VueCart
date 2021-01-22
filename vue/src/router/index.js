import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home, Login, Reg, User, Cart } from './assembly'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta:{
      intercept:true
    },
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    meta:{
      intercept:true
    },
    component: Cart
  },
  {
    path: '/user',
    name: 'User',
    meta:{
      intercept:true
    },
    component: User
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/reg',
    name: 'Reg',
    component: Reg
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

//  全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.intercept) {
    if (sessionStorage.getItem('user')) {
      next()
    } else {
      next({ path: '/login' });
    }
  }else{
    next()
  }
});
export default router
