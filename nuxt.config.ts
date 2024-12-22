import svgLoader from 'vite-svg-loader'
import { defaultOptions } from 'primevue/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@primevue/nuxt-module', '@vueuse/nuxt', '@nuxt/eslint', '@nuxt/image', '@nuxt/fonts', '@vite-pwa/nuxt'],
  devtools: { enabled: true },
  css: ['@/assets/styles/tailwind.css', '@/assets/styles/base.css', 'primeicons/primeicons.css', 'vue3-toastify/dist/index.css'],
  runtimeConfig: {
    public: {

      amplitudeApiKey: 'bfb5c83035c7a5d0537d1ada422fcb4c',
      naverMapClientId: 'fdvtct88qw',
      kakaoAppKey: '7fccb30eb56474d5ad73def74b62250a',

      share: {
        // 526x528
        thumbnail: 'http://k.kakaocdn.net/dn/bSbH9w/btqgegaEDfW/vD9KKV0hEintg6bZT4v4WK/kakaolink40_original.png',
      },

      groom: {
        name: '이연권',
        account: {
          bank: '케이뱅크',
          accountNumber: '100-157-676199',
          kakaoPay: 'https://link.kakaopay.com/_/-nlEAe1',
        },
        phoneNumber: '010-8566-7296',
        father: {
          name: '이해산',
          phoneNumber: '010-9256-7296',
          account: {
            bank: '신한은행',
            accountNumber: '608-02-213274',
          },
        },
        mother: {
          name: '이선영',
          account: {
            bank: '카카오뱅크',
            accountNumber: '3333-31-8245763',
          },
          phoneNumber: '010-9290-7296',
        },
      },

      bride: {
        name: '유하얀',
        account: {
          bank: '국민은행',
          accountNumber: '774602-04-075682',
          kakaoPay: 'https://link.kakaopay.com/_/WWDVYVM',
        },
        phoneNumber: '010-3397-5854',
        father: {
          name: '유종관',
          account: {
            bank: '국민은행',
            accountNumber: '496525-96-110092',
          },
          phoneNumber: '010-2235-5854',
        },
        mother: {
          name: '지명옥',
          account: {
            bank: '우리은행',
            accountNumber: '1002-709-991512',
          },
          phoneNumber: '010-8959-5854',
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
  fonts: {
    provider: 'google',
    families: [
      { name: 'Gowun Dodum', provider: 'google', global: true },
      { name: 'Crimson Pro', provider: 'google', global: true },
      { name: 'Noto Sans KR', provider: 'google', global: true },
    ],
  },
  image: {
    // https://image.nuxt.com/get-started/configuration
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536,
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

  pwa: {
    includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'favicon-16x16.png', 'favicon-32x32.png', 'favicon-96x96.png', 'favicon-192x192.png', 'favicon-512x512.png'],
    manifest: {
      name: '연권 ❤ 하얀 결혼식',
      short_name: '연권 ❤ 하얀',
      description: '연권 ❤ 하얀 결혼식',
      lang: 'ko',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      icons: [
        {
          src: '/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          src: '/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: '/favicon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: '/favicon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/favicon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      screenshots: [
        {
          src: '/screenshot1.jpg',
          sizes: '1280x720',
          type: 'image/jpg',
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
})
