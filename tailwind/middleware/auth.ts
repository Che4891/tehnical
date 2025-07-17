import { getCurrentUserSafe } from '@/lib/helpers'

export default defineNuxtRouteMiddleware(async () => {
  const store = authStore()
  const user = await getCurrentUserSafe()

  if (user) {
    store.set(user)
  } else {
    return navigateTo('/login')
  }
})