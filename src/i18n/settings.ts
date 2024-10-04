import { LanguageEnum } from '@/shared/enums/common/language.enum'

export const fallbackLng = LanguageEnum.EN
export const languages = [fallbackLng, LanguageEnum.VI]
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}
