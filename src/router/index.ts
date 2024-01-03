import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/PostsView.vue')
        },
        {
          path: 'my-posts',
          component: () => import('../views/MyPosts.vue')
        },
        {
          path: 'collects',
          component: () => import('../views/MyCollects.vue')
        }
      ]
    }
  ]
})

export default router
