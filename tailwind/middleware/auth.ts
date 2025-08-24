export default defineNuxtRouteMiddleware((to) => {
    const auth = useAuthStore()

    console.log('MIDELWAER', auth.isAuthenticated)

    if (!auth.isAuthenticated && to.path !== '/login') {
        return navigateTo('/login')
    }

    if (auth.isAuthenticated && to.path === '/login') {
        return navigateTo('/admin')
    }
})