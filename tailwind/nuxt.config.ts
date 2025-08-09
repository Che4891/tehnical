// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  app: {
    head: {
      title: 'VMKC ZR',
      htmlAttrs: {
        lang: 'ua',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },


  css: ['~/assets/css/tailwind.css'],

  devtools: { enabled: true },
  modules: [
    'shadcn-nuxt',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
  ],


  runtimeConfig: {
    public: {
      appwriteProjectId: process.env.NUXT_PUBLIC_APPWRITE_PROJECT_ID || '',
      appwriteEndpoint: process.env.NUXT_PUBLIC_APPWRITE_ENDPOINT || '',
      usersObjectKey: process.env.NUXT_USERS || '',
    }
  },

  routeRules: {
    '/**': { ssr: true },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  }

})