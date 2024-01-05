import { createRouter, createWebHistory } from 'vue-router';
import { useUser } from '@/stores/user';

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
          path: '/posts/:id',
          component: () => import('../views/PostView.vue')
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
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue')
    }
  ]
});

router.beforeEach(async (to) => {
  const { isLogin } = useUser();
  if (!isLogin && to.path !== '/login') {
    return '/login';
  }
});

export default router;
