'use client'

import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'

import { LanguageEnum } from '@/shared/enums/common/language.enum'

import { cookieName, getOptions, languages } from './settings'

const runsOnServerSide = typeof window === 'undefined'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language: LanguageEnum, namespace: string) => import(`./locales/${language}/${namespace}.json`))
  )
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator']
    },
    preload: runsOnServerSide ? languages : []
  })

export function useTranslation(
  lng: LanguageEnum,
  ns: string | string[],
  options?: {
    keyPrefix?: string
  }
) {
  const [cookies, setCookie] = useCookies([cookieName])
  const ret = useTranslationOrg(ns, options)
  const { i18n } = ret

  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)

  useEffect(() => {
    if (!runsOnServerSide && activeLng !== i18n.resolvedLanguage) {
      setActiveLng(i18n.resolvedLanguage)
    }
  }, [activeLng, i18n.resolvedLanguage])

  useEffect(() => {
    if (!runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
      i18n.changeLanguage(lng)
    }
  }, [lng, i18n])

  useEffect(() => {
    if (!runsOnServerSide && cookies.i18next !== lng) {
      setCookie(cookieName, lng, { path: '/' })
    }
  }, [lng, cookies.i18next, setCookie])

  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng)
  }

  return ret
}
