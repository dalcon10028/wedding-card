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
  compatibilityDate: '2024-11-01',
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss': {},
      'autoprefixer': {},
    },
  },
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
