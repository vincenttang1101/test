import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { BALANCE_RATE_VND_TO_USD, CurrencyEnum } from '@/shared/enums/common.enum'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
function parseSpecs<T extends Record<string, unknown>>(
  description: string,
  transform?: (key: string, value: string) => [string, unknown]
): T {
  const obj: Record<string, unknown> = {}

  description.split('<br>').forEach((item, index, array) => {
    if (index < array.length - 1) {
      const [key, value] = item.split(':').map((part) => part.trim())
      if (key && value) {
        if (transform) {
          const [newKey, newValue] = transform(key, value)
          obj[newKey] = newValue
        } else {
          obj[key] = value
        }
      }
    }
  })

  return obj as T
}

function formatPriceToVND(
  price: string | number,
  inputCurrency: CurrencyEnum = CurrencyEnum.VND,
  rate = BALANCE_RATE_VND_TO_USD
) {
  const parsedPrice = typeof price === 'string' ? parseFloat(price) : price

  const priceVND = inputCurrency === CurrencyEnum.USD ? parsedPrice * rate : parsedPrice

  return `${priceVND.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })}`
}

function formatPrice(
  price: string | number,
  language: 'vi' | 'en',
  currency: CurrencyEnum = CurrencyEnum.VND,
  rate = BALANCE_RATE_VND_TO_USD
) {
  switch (language) {
    case 'vi':
      return formatPriceToVND(price, currency, rate)
    case 'en':
      return formatPriceToUSD(price, currency, rate)
    default:
      throw new Error(`Không hỗ trợ ngôn ngữ: ${language}`)
  }
}
export function formatPriceToUSD(
  price: string | number,
  currency: CurrencyEnum = CurrencyEnum.USD,
  rate = BALANCE_RATE_VND_TO_USD
) {
  const parsedPrice = typeof price === 'string' ? parseFloat(price) : price

  const priceUSD = currency === CurrencyEnum.VND ? parsedPrice / rate : parsedPrice

  return priceUSD.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

export { cn, formatPrice, parseSpecs }
