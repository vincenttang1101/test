import { User } from './users.type'

type LoginBody = {
  username: string
  password: string
}

type CreateCartItemsDomainBody = {
  listProducts: {
    domain: string
    price?: number
    priceDiscount?: number
    period: number
    totalPrice?: number
    totalPriceDiscount?: number
    userId: string
    client_id: number
  }[]
}

type DeleteDomainBody = {
  userId: string
  domain: string
}

type OrderServerManagerBody = {
  categories: any[]
  tradingCode: string
  storeNavigate: boolean
  authUser: User
  token: string
  typeService: string
  paymentType: string
}

type UpdateFormCartDomainBody = {
  [Key: string]: any
}

export type { CreateCartItemsDomainBody, DeleteDomainBody, LoginBody, OrderServerManagerBody, UpdateFormCartDomainBody }
