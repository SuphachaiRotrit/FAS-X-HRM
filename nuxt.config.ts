// https://nuxt.com/docs/api/configuration/nuxt-config
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
  typescript: {
    strict: true
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    // https://pinia.vuejs.org/ssr/nuxt.html
    '@pinia/nuxt',
    // https://prazdevs.github.io/pinia-plugin-persistedstate/
    '@pinia-plugin-persistedstate/nuxt'
  ],
 
})
