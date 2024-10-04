import './globals.css'

import { dir } from 'i18next'
import { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { ReactNode } from 'react'

import { ReactQueryProvider } from '@/cores/providers/react-query.provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Bucloud',
  description: 'Your Ultimate Solution for Web Hosting & WHMCS'
}

type RootLayoutProps = {
  params: {
    lng: string
  }
  children: ReactNode
}

export default function RootLayout({ params: { lng }, children }: RootLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)} className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  )
}
