'use client'

import { useTranslation } from '@/i18n/client'
import { LanguageEnum } from '@/shared/enums/common/language.enum'

export default function TestPage({ params: { lng } }: { params: { lng: LanguageEnum } }) {
  const { t } = useTranslation(lng, 'home')
  return <div>{t('message')}</div>
}
