import { useUserStore } from '@/stores/user'
import LoginView from '@/views/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        redirectAlreadyLogin: true
      }
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('@/views/CreatePost.vue'),
      meta: { requiredLogin: true }
    },
    {
      path: '/column/:id',
      name: 'column',
      component: () => import('@/views/ColumnDetail.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.meta.requiredLogin && !userStore.user.isLogin) {
    next({ name: 'login' })
  } else if (to.meta.redirectAlreadyLogin && userStore.user.isLogin) {
    next('/')
  } else {
    next()
  }
})

export default router
