import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { DefaultLayout } from '@/layouts/DefaultLayout'
import { LanguageEnum } from '@/shared/enums/common/language.enum'

export const metadata: Metadata = {}

type MainLayoutProps = {
  params: { lng: LanguageEnum }
  children: ReactNode
}

export default function MainLayout({ params: { lng }, children }: MainLayoutProps) {
  return <DefaultLayout lng={lng}>{children}</DefaultLayout>
}
