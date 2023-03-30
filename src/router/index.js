import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Kurs from '../pages/Kurs.vue'
import Pris from '../pages/Pris.vue'
import Om from '../pages/Om.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/kurs',
      name: 'kurs',
      component: Kurs
    },
    {
      path: '/pris',
      name: 'pris',
      component: Pris
    },
    {
      path: '/om-oss',
      name: 'om-oss',
      component: Om
    }
  ]
})

export default router
