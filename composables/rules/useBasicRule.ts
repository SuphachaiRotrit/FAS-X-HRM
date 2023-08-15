import { useI18n } from 'vue-i18n'

export function useBasicRule () {
  const { t } = useI18n()

  const isRequired = (name: string = t('data')) => ((v: any) => (!!v || t('required', { name: name })))

  const isArrayNotEmpty = (name: string = t('data')) => ((v: any) => (v || v.length > 0 || t('required', { name: name })))

  const isNumber = (name: string = '') => ((v: any) => (/^\d*\.?\d*$/.test(v) || t('numberonly', { name: name })))

  const minLength = (name: string, length: number = 1, unit?: string) => ((v: any) => (v && v.length >= length || t('minlength', { name: name, length: length, unit: !unit ? t('units.character', length) : unit })))

  const maxLength = (name: string, length: number = 1, unit?: string) => ((v: any) => (v && v.length <= length || t('maxlength', { name: name, length: length, unit: !unit ? t('units.character', length) : unit })))

  const isEmail = (name: string) => ((v: any) => (!!v && (/^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(v)) || t('invalid', { name: name })))

  const isMatched = (matcher: any, name: string) => ((v: any) => (!!v && (!!matcher && v === matcher) || t('notMatch', { name: name }) ))

  const isBasicPassword = () => ((v: any) => (!!v && !(/((?!([a-zA-Z0-9.-])).)/.test(v)) || t('basicPassword')))

  const isStrongPassword = () => ((v: any) => (!!v && /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(v)) || t('strongPassword'))

  return { isRequired, isArrayNotEmpty, isNumber, minLength, maxLength, isEmail, isMatched, isBasicPassword, isStrongPassword }
}