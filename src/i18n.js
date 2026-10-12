import { createI18n } from 'vue-i18n'
import messages from '@/locales/messages'

const i18n = createI18n({
  legacy: true,
  locale: 'ja',
  messages: messages
})

export default i18n
