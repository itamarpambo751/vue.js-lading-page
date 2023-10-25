import { createRouter, createWebHistory } from 'vue-router'
import DesyAndLetyView from '../views/DesyAndLetyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DesyAndLetyView
    },
    {
      path: '/about',
      name: 'know-us',
      component: () => import('../views/KnowUsView.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/TeamView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: () => import('../views/ContactUsView.vue')
    }
  ]
})

export default router
