import { ResponseStatusCodeEnum } from '../enums/response.enum'
import { CreateCartItemDomain, DeleteDomain, Domain } from './domains.type'
import { DigitalOceanSizeDetail, Product } from './products.type'
import { User } from './users.type'

type SuccessResponse<T> = {
  data: T
  message: string
  status: ResponseStatusCodeEnum
}

type LoginResponse = SuccessResponse<{
  user: User
  accessToken: string
}>

type DomainsResponse = {
  isAvailable: Domain
  listPrefer: {
    domains: Domain[]
  }
}

type CheckDomainResponse = SuccessResponse<{
  isAvailable: Domain
}>

type DeleteDomainResponse = SuccessResponse<DeleteDomain>

type CreateCartItemsDomainResponse = SuccessResponse<CreateCartItemDomain>

type OrderServerManagerResponse = {
  message: string
}

type ProductsBySubOrderPageResponse = SuccessResponse<Product[]>

type SizesByTypeDigitalOceanResponse = SuccessResponse<
  {
    _id: string
    data: DigitalOceanSizeDetail[]
  }[]
>

export type {
  CheckDomainResponse,
  CreateCartItemsDomainResponse,
  DeleteDomainResponse,
  DomainsResponse,
  LoginResponse,
  OrderServerManagerResponse,
  ProductsBySubOrderPageResponse,
  SizesByTypeDigitalOceanResponse,
  SuccessResponse
}
