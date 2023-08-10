import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { fa } from 'vuetify/iconsets/fa'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/dist/vuetify.min.css'
import { main, dark } from '@/utils/theme/themes'
import { VDataTable } from 'vuetify/labs/VDataTable'
import { VDatePicker } from 'vuetify/labs/VDatePicker'
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: {
      ...components,
      VDataTable,
      VDatePicker,
      VSkeletonLoader,
    },
    directives,
    ssr: true,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
        fa
      }
    },
    theme: {
      defaultTheme: 'main',
      themes: {
        main,
        dark
      }
    },
    aliases: {
    },
    defaults: {
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
