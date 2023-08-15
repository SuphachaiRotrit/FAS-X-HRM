// import { en, th} from '~/locales'
import messages from '~/locales'

export default defineI18nConfig(() => ({
  legacy: false,
  strategy: 'prefix_except_default',
  locale: 'en',
  langDir: 'locales',
  messages
}))