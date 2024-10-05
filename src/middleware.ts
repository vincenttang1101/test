import acceptLanguage from 'accept-language'
import { NextRequest, NextResponse } from 'next/server'

import { cookieName, fallbackLng, languages } from './i18n/settings'
import { LanguageEnum } from './shared/enums/common/language.enum'

acceptLanguage.languages(languages)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sw.js|site.webmanifest|.*\\..*).*)']
}

export async function middleware(req: NextRequest): Promise<NextResponse> {
  let resolvedLanguage: LanguageEnum | undefined

  // Lấy ngôn ngữ hiện tại từ URL (nếu có)
  const cookieLanguage = req.cookies.get(cookieName)?.value as LanguageEnum
  const urlLanguage = req.nextUrl.pathname.split('/')[1] as LanguageEnum

  // Nếu ngôn ngữ trong URL là hợp lệ, ưu tiên sử dụng ngôn ngữ đó
  if (urlLanguage) {
    resolvedLanguage = urlLanguage
  }

  // Nếu không có ngôn ngữ trong URL nhưng có trong cookie, sử dụng ngôn ngữ từ cookie
  if (!urlLanguage && cookieLanguage) {
    resolvedLanguage = cookieLanguage
  }

  // Ưu tiên xác định ngôn ngữ từ IP
  if (!resolvedLanguage) {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1'

    try {
      const geoResponse = await fetch(`http://ip-api.com/json/${ip}`)
      const geo = await geoResponse.json()

      if (geo && geo.country === 'Vietnam') {
        resolvedLanguage = LanguageEnum.VI
      } else {
        resolvedLanguage = LanguageEnum.EN
      }
    } catch (error) {
      console.error('GeoIP lookup failed:', error)
      resolvedLanguage = undefined // Không xác định được ngôn ngữ từ IP, chuyển sang fallback
    }
  }

  // Nếu không xác định được ngôn ngữ nào, fallback về ngôn ngữ mặc định
  if (!resolvedLanguage) resolvedLanguage = fallbackLng

  // Nếu ngôn ngữ trong URL không khớp với ngôn ngữ xác định, thực hiện redirect và cập nhật cookie
  if (urlLanguage !== resolvedLanguage || cookieLanguage !== resolvedLanguage) {
    const redirectUrl = new URL(`/${resolvedLanguage}${req.nextUrl.pathname}`, req.url)

    const response = urlLanguage === resolvedLanguage ? NextResponse.next() : NextResponse.redirect(redirectUrl)

    response.cookies.set(cookieName, resolvedLanguage)

    return response
  }

  // Nếu ngôn ngữ đã khớp, tiếp tục request mà không cần redirect
  return NextResponse.next()
}
