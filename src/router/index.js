import { createRouter, createWebHistory } from 'vue-router'
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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/categories',
  //   name: 'categories',
  //   component: () => import(/* webpackChunkName: "categories" */ '../views/Categories.vue')
  // },
  {
    path: '/products',
    name: 'products',
    props:true,
    params:true,
    component: () => import(/* webpackChunkName: "products" */ '../views/Categories.vue')
  }
  ,{
    path: '/product/:id',
    name: 'product',
    props:true,
    params:true,
    component: () => import(/* webpackChunkName: "products" */ '../views/Product.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
