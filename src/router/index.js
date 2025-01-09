import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'basic',
      component: () => import('../views/FabricBasic.vue'),
    },
    {
      path: '/bg',
      name: 'bgImage',
      component: () => import('../views/FabricbgImage.vue'),
    },
    {
      path: '/shape',
      name: 'shape',
      component: () => import('../views/FabricShape.vue'),
    },
  ],
})

export default router
