import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/PageHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ // Pages
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/PageAbout.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/PageProjects.vue')
    }
  ]
})

export default router
