
interface LoginPayload {
    email: string
    password: string
}

interface LoginResponse {
    token: string
}

const config = useRuntimeConfig()
const apiUrl: string = config.public.apiUrl
const apiKey: string = config.public.apiKey

export const useAuthStore = defineStore('auth', () => {
    const token = useCookie<string | null>('token', {
        path: '/',
        maxAge: 60 * 60 * 24
    })

    const isAuthenticated = computed(() => !!token.value)

    const login = async (payload: LoginPayload): Promise<boolean> => {
        try {
            const response = await $fetch<LoginResponse>(apiUrl, {
                method: "POST",
                headers: { 'x-api-key': apiKey },
                body: payload
            })

            if (response?.token) {
                token.value = response.token
                return true
            }

            return false
        } catch (err) {
            return false
        }
    }

    const logout = () => {
        token.value = null
    }

    return { token, isAuthenticated, login, logout }
})
