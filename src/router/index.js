/*
 * @Author: your name
 * @Date: 2020-02-25 17:37:06
 * @LastEditTime: 2020-03-17 20:17:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test_dev\vue_i_project\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  //   children: [
  //     {
  //       path: 'test',
  //       name: 'test',
  //       component: () => import('../components/test.vue'),
  //     }
  //   ],
  // },
  {
    path: '/login',
    name: 'login',
    // component: () => import('../views/login.vue'),
    component: () => import('../views/login/index.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
