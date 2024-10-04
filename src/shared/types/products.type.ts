export type Product = {
  _id: string
  object_id: number
  product_id: number
  name: string
  description: string
  m: number
  q: number
  s: number
  a: number
}

export type DigitalOceanSizeDetail = {
  slug: string
  memory: number
  vcpus: number
  disk: number
  transfer: number
  price_monthly: number
  price_monthly_discount: number
  price_hourly: number
}
