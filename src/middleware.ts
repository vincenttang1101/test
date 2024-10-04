import acceptLanguage from 'accept-language'
import { NextRequest, NextResponse } from 'next/server'

import { cookieName, fallbackLng, languages } from './i18n/settings'
import { LanguageEnum } from './shared/enums/common/language.enum'

acceptLanguage.languages(languages)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sw.js|site.webmanifest|.*\\..*).*)']
}

export async function middleware(req: NextRequest): Promise<NextResponse> {
  let lng: LanguageEnum | undefined

  // Lấy ngôn ngữ hiện tại từ URL (nếu có)
  const currentLng = req.nextUrl.pathname.split('/')[1] as LanguageEnum

  // Nếu ngôn ngữ trong URL là hợp lệ, ưu tiên sử dụng ngôn ngữ đó
  if (languages.includes(currentLng)) {
    lng = currentLng
  }

  console.log('headerrrr', req.ip)
  // Ưu tiên xác định ngôn ngữ từ IP
  if (!lng) {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1'

    try {
      const geoResponse = await fetch(`http://ip-api.com/json/${ip}`)
      const geo = await geoResponse.json()

      if (geo && geo.country === 'Vietnam') {
        lng = LanguageEnum.VI // Nếu từ Việt Nam, đặt ngôn ngữ là tiếng Việt
      } else {
        lng = LanguageEnum.EN // Ngôn ngữ mặc định là tiếng Anh nếu không phải Việt Nam
      }
    } catch (error) {
      console.error('GeoIP lookup failed:', error)
      lng = undefined // Không xác định được ngôn ngữ từ IP, chuyển sang fallback
    }
  }

  // Nếu không xác định được từ IP, fallback sang `Accept-Language`
  if (!lng) {
    lng = acceptLanguage.get(req.headers.get('Accept-Language')) as LanguageEnum
  }

  // Nếu không xác định được ngôn ngữ nào, fallback về ngôn ngữ mặc định
  if (!lng) lng = fallbackLng

  console.log('Current pathname:', req.nextUrl.pathname)
  console.log('Detected language:', lng)

  // Nếu ngôn ngữ trong URL không khớp với ngôn ngữ xác định, thực hiện redirect và cập nhật cookie
  if (currentLng !== lng) {
    console.log('Redirecting to:', `/${lng}${req.nextUrl.pathname}`)
    const redirectUrl = new URL(`/${lng}${req.nextUrl.pathname}`, req.url)

    // Cập nhật cookie để ghi nhớ ngôn ngữ
    const response = NextResponse.redirect(redirectUrl)
    response.cookies.set(cookieName, lng)

    return response
  }

  // Nếu ngôn ngữ đã khớp, tiếp tục request mà không cần redirect
  return NextResponse.next()
}
