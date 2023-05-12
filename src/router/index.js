import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/om-oss',
      name: 'om-oss',
      component: () => import('../pages/Om.vue')
    }
  ]
})

export default router
