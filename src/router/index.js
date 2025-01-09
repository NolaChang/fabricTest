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
    {
      path: '/path',
      name: 'path',
      component: () => import('../views/FabricPath.vue'),
    },
    {
      path: '/text',
      name: 'text',
      component: () => import('../views/FabricText.vue'),
    },
    {
      path: '/style',
      name: 'style',
      component: () => import('../views/FabricStyle.vue'),
    },
  ],
})

export default router
