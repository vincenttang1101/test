type Domain = {
  available: boolean
  definitive: boolean
  domain: string
  currency?: string
  period?: number
  price?: number
  priceSign?: number
  discountSign?: number
}

type CreateCartItemDomain = {
  _id: string
  userId: string
  client_id: number
  status: number
  statusAction: number
  domain: string
  period: number
  price: number
  priceDiscount: number
  totalPrice: number
  totalPriceDiscount: number
  personal: any
  admin: any
  tech: any
  payment: any
  activeDate: any
  expDate: any
  periodRenew: any
  statusRenew: number
  createdAt: string
  updatedAt: string
}

type DeleteDomain = {
  acknowledged: boolean
  deletedCount: number
}

export type { CreateCartItemDomain, DeleteDomain, Domain }
