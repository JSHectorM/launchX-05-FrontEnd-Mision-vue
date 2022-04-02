import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/pasteles',
    name: 'PastelesView',
    component: () => import('../views/PastelesView.vue')
  },
  {
    path: '/pedido',
    name: 'pedidoView',
    component: () => import('../views/PedidoView.vue')
  },
  {
    path: '/pastelero',
    name: 'pasteleroView',
    component: () => import('../views/PasteleroView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
