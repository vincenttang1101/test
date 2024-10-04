'use client'

import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { languages } from '@/i18n/settings'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/components/cores/ui/select'
import { LanguageEnum } from '@/shared/enums/common/language.enum'

const LANGUAGE_ICONS = {
  en: '/icons/united-states.svg',
  vi: '/icons/vietnam.svg'
}

export const LanguageSwitcher = () => {
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const params = searchParams.toString()
  const lng = pathName.split('/')[1]

  const redirectPathName = (value: LanguageEnum) => {
    if (!pathName) {
      return '/'
    }
    const segments = pathName.split('/')
    segments[1] = value
    return segments.join('/')
  }

  const handleLanguageChange = (language: LanguageEnum) => {
    const newUrl = `${redirectPathName(language)}${params ? `?${params}` : ''}`
    router.push(newUrl)
  }

  return (
    <div>
      <Select value={lng} onValueChange={(language: LanguageEnum) => handleLanguageChange(language)}>
        <SelectTrigger className='w-full'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map((language) => (
            <SelectItem key={language} value={language}>
              <div className='flex items-center gap-3'>
                <Image src={LANGUAGE_ICONS[language as LanguageEnum]} alt={`${language}`} width={25} height={25} />
                <span>{language.toUpperCase()}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
