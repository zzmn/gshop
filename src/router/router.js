import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        showFooter: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Home/Home.vue')
    },
    {
      path: '/search',
      name: 'search',
      meta: {
        showFooter: true
      },
      component: () => import('../views/Search/Search.vue')
    },
    {
      path: '/order',
      name: 'order',
      meta: {
        showFooter: true
      },
      component: () => import('../views/Order/Order.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {
        showFooter: true
      },
      component: () => import('../views/Profile/Profile.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/Login.vue')
    }
  ]
})
