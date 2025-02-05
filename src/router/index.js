import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'basic',
      component: () => import('../views/Basic.vue'),
    },
    {
      path: '/bg',
      name: 'bgImage',
      component: () => import('../views/BgImage.vue'),
    },
    {
      path: '/shape',
      name: 'shape',
      component: () => import('../views/Shape.vue'),
    },
    {
      path: '/path',
      name: 'path',
      component: () => import('../views/Path.vue'),
    },
    {
      path: '/text',
      name: 'text',
      component: () => import('../views/Text.vue'),
    },
    {
      path: '/style',
      name: 'style',
      component: () => import('../views/Style.vue'),
    },
    {
      path: '/gradient',
      name: 'gradient',
      component: () => import('../views/Gradient.vue'),
    },
    {
      path: '/useImage',
      name: 'useImage',
      component: () => import('../views/UseImage.vue'),
    },
    {
      path: '/filter',
      name: 'filter',
      component: () => import('../views/Filter.vue'),
    },
    {
      path: '/transform',
      name: 'transform',
      component: () => import('../views/Transform.vue'),
    },
    {
      path: '/group',
      name: 'group',
      component: () => import('../views/Group.vue'),
    },
    {
      path: '/animate',
      name: 'animate',
      component: () => import('../views/Animate.vue'),
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/Event.vue'),
    },
    {
      path: '/draw',
      name: 'draw',
      component: () => import('../views/Draw.vue'),
    },
    {
      path: '/lock',
      name: 'lock',
      component: () => import('../views/Lock.vue'),
    },
    {
      path: '/scaleCanvas',
      name: 'scaleCanvas',
      component: () => import('../views/ScaleCanvas.vue'),
    },
    {
      path: '/moveCanvas',
      name: 'moveCanvas',
      component: () => import('../views/MoveCanvas.vue'),
    },
    {
      path: '/select',
      name: 'select',
      component: () => import('../views/Select.vue'),
    },
    {
      path: '/clip',
      name: 'clip',
      component: () => import('../views/Clip.vue'),
    },
    {
      path: '/serialize',
      name: 'serialize',
      component: () => import('../views/Serialize.vue'),
    },
    {
      path: '/unserialize',
      name: 'unserialize',
      component: () => import('../views/Unserialize.vue'),
    },
  ],
})

export default router
