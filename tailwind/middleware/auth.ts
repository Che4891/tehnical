export default defineNuxtRouteMiddleware(async () => {
    const loading = useIsLoading()

    console.log('first step', loading.isLoading)

    loading.set(true)

    console.log('second step', loading.isLoading)
})