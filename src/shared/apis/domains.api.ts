import envConfig from '@/configs/env.config'
import AxiosBearerClient from '@/cores/services/axios-bear-client.service'
import AxiosClient from '@/cores/services/axios-client.service'
import FetchClient from '@/cores/services/fetch-client.service'

import { CreateCartItemsDomainBody, OrderServerManagerBody, UpdateFormCartDomainBody } from '../types/body.type'
import { DeleteDomainQueryParams, UpdateFormCartDomainQueryParams } from '../types/params.type'
import {
  CheckDomainResponse,
  CreateCartItemsDomainResponse,
  DeleteDomainResponse,
  DomainsResponse,
  OrderServerManagerResponse
} from '../types/response.type'

class DomainsClient {
  private readonly fetchClient: FetchClient
  private readonly axiosClient: AxiosClient
  private readonly axiosBearerClient: AxiosBearerClient

  constructor() {
    this.fetchClient = new FetchClient(`${envConfig.api.system_gofiber.host}/${envConfig.api.system_gofiber.version}`)
    this.axiosClient = new AxiosClient(`${envConfig.api.system_gofiber.host}/${envConfig.api.system_gofiber.version}`)
    this.axiosBearerClient = new AxiosBearerClient(
      `${envConfig.api.system_gofiber.host}/${envConfig.api.system_gofiber.version}`
    )
  }

  async getDomainsByDomainWithFetch(params: { domain: string }) {
    const response = await this.fetchClient.get<DomainsResponse>('/cart-item/get-tail-domains', { params })
    return response
  }

  async checkDomainWithAxios(params: { search: string; tailDomain: string }) {
    const response = await this.axiosClient.get<CheckDomainResponse>('/cart-item/check-domain-more', { params })
    return response
  }

  async createCartItemsDomain(body: CreateCartItemsDomainBody) {
    const response = await this.axiosBearerClient.post<CreateCartItemsDomainBody, CreateCartItemsDomainResponse>(
      '/cart-item/create-cart-item-domain',
      body
    )
    return response
  }

  async deleteDomainWhenSearch(params: DeleteDomainQueryParams) {
    const response = await this.axiosBearerClient.delete<DeleteDomainResponse>('/cart-item/delete-cart-item-search', {
      params
    })
    return response
  }

  async deleteDomain(id: string) {
    const response = await this.axiosBearerClient.delete<DeleteDomainResponse>(`/cart-item/delete-cart-item/${id}`)
    return response
  }

  async deleteDomains(userId: string) {
    const response = await this.axiosBearerClient.delete<DeleteDomainResponse>(
      `/cart-item/delete-many-cart-item/${userId}`
    )
    return response
  }

  async orderServerManager(body: OrderServerManagerBody) {
    const response = await this.axiosBearerClient.post<OrderServerManagerBody, OrderServerManagerResponse>(
      '/client-order/order-server-manager',
      body
    )
    return response
  }

  async updateFormCartDomain(params: UpdateFormCartDomainQueryParams, body: UpdateFormCartDomainBody) {
    const response = await this.axiosBearerClient.patch<any, any>('/cart-item/update-form-cart-item', body, { params })
    return response
  }
}

const domainsApi = new DomainsClient()
export default domainsApi
