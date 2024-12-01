import svgLoader from 'vite-svg-loader'

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
          name: '이연권1부',
          accountNumber: '123-456-789',
          phoneNumber: '010-1234-5678',
        },
        mother: {
          name: '이연권1모',
          accountNumber: '123-456-789',
          phoneNumber: '010-1234-5678',
        },
      },

      bride: {
        name: '유하얀',
        accountNumber: '123-456-789',
        phoneNumber: '010-1234-5678',
        father: {
          name: '이연권2부',
          accountNumber: '123-456-789',
          phoneNumber: '010-1234-5678',
        },
        mother: {
          name: '이연권2모',
          accountNumber: '123-456-789',
          phoneNumber: '010-1234-5678',
        },
      },

      wedding: {
        place: '강변 웨딩스퀘어 4F, 그레이스 홀',
        address: '서울특별시 광진구 광나루로56길 85 테크노마트',
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
      'Roboto': true,
      'Josefin+Sans': true,
      'Lato': [100, 300],
      'Raleway': {
        wght: [100, 400],
        ital: [100],
      },
      'Inter': '200..700',
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700',
      },
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
  },
})
