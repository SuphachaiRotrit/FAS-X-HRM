export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bree+Serif&family=Pridi:wght@300;400;600&display=swap' }
      ]
    }
  },
  css: [
    '@/assets/styles/override.scss'
  ],
  typescript: {
    strict: true
  },
  runtimeConfig: {
    public: {
      ENDPOINT_URL: process.env.ENDPOINT_URL || '',
      PRINTER_URL: process.env.PRINTER_URL || '',
      VERSION: process.env.VERSION || '',
      COPYRIGHT: process.env.COPYRIGHT || '',
      COMPANY_NAME: process.env.COMPANY_NAME || '',
      PRINTER_SECRET_KEY: process.env.PRINTER_SECRET_KEY || ''
    }
    // private: {
    //   PRINTER_SECRET_KEY: process.env.PRINTER_SECRET_KEY || '',
    // }
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    // https://nuxt.com/modules/i18n
    '@nuxtjs/i18n',
    // https://pinia.vuejs.org/ssr/nuxt.html
    '@pinia/nuxt',
    // https://prazdevs.github.io/pinia-plugin-persistedstate/
    '@pinia-plugin-persistedstate/nuxt'
  ],
  i18n: {
    // https://v8.i18n.nuxtjs.org/getting-started/basic-usage#translate-with-vue-i18n
    vueI18n: './i18n.config.ts', // if you are using custom path, default 
    defaultLocale: 'th',
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'th',
        name: 'Thai'
      },
    ],
  }
})
