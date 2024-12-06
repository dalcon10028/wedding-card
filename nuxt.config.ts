import svgLoader from 'vite-svg-loader'
import { defaultOptions } from 'primevue/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  css: ['@/assets/styles/tailwind.css', '@/assets/styles/base.css', 'primeicons/primeicons.css'],
  runtimeConfig: {
    public: {
      amplitudeApiKey: 'bfb5c83035c7a5d0537d1ada422fcb4c',

      groom: {
        name: '이연권',
        accountNumber: '123-456-789',
        phoneNumber: '010-1234-5678',
        father: {
          name: '이해산',
          accountNumber: '123-456-789',
          phoneNumber: '010-1234-5678',
        },
        mother: {
          name: '이선영',
          accountNumber: '123-456-789',
          phoneNumber: '010-1234-5678',
        },
      },

      bride: {
        name: '유하얀',
        accountNumber: '123-456-789',
        phoneNumber: '010-1234-5678',
        father: {
          name: '유종관',
          accountNumber: '123-456-789',
          phoneNumber: '010-1234-5678',
        },
        mother: {
          name: '지명옥',
          accountNumber: '123-456-789',
          phoneNumber: '010-1234-5678',
        },
      },

      wedding: {
        place: '강변 웨딩스퀘어 4F, 그레이스 홀',
        address: '서울 광진구 광나루로56길 85 테크노마트',
        longitude: '127.095692162256',
        latitude: '37.535725176732',
        date: '2025-03-29T16:40',
      },
    },
  },
  compatibilityDate: '2024-11-01',
  vite: {
    plugins: [svgLoader()],
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss': {},
      'autoprefixer': {},
    },
  },
  buildModules: ['@nuxtjs/svg'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  googleFonts: {
    families: {
      'Gowun Dodum': [300, 400, 700],
      'Crimson Pro': [200],
    },
  },
  primevue: {
    options: { theme: 'none' },
    pt: {
      dialog: {
        root: {
          style: {
            display: 'block',
          },
        },
      },
    },
    locale: {
      ...defaultOptions.locale,
    },
  },
})
