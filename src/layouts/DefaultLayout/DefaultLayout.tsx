import { Fragment, ReactNode } from 'react'

import { Footer } from '@/shared/components/common/Footer'
import { Header } from '@/shared/components/common/Header'
import { MainContent } from '@/shared/components/common/MainContent/MainContent'
import { LanguageEnum } from '@/shared/enums/common/language.enum'

type DefaultLayoutProps = {
  lng: LanguageEnum
  children: ReactNode
}

export const DefaultLayout = ({ lng, children }: DefaultLayoutProps) => {
  return (
    <Fragment>
      <Header lng={lng} />
      <MainContent>{children}</MainContent>
      <Footer />
    </Fragment>
  )
}
