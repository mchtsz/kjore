import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Kurs from '../views/Kurs.vue'
import Pris from '../views/Pris.vue'
import Om from '../views/Om.vue'

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
