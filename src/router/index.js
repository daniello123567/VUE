import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/Repos.vue')
    },
    {
      path: '/repodetails/:id',
      name: 'about',
      component: ()=>import('../views/repodetails.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: "404 page",
      component: ()=> import('../views/404.vue')
    }
  ]
})

export default router
