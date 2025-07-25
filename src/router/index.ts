import { useAuthStore } from '@/stores/auth-store'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const { getSession } = useAuthStore()
  await getSession()
  // TODO: check if user is authenticated logic...
  next()
})

export default router
