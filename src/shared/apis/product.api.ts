import envConfig from '@/configs/env.config'
import AxiosBearerClient from '@/cores/services/axios-bear-client.service'
import AxiosClient from '@/cores/services/axios-client.service'
import FetchClient from '@/cores/services/fetch-client.service'

import { ProductsBySubOrderPageResponse } from '../types/response.type'

const endpoint = 'products'

class ProductClient {
  private readonly fetchClient: FetchClient
  private readonly axiosClient!: AxiosClient
  private readonly axiosBearerClient: AxiosBearerClient

  constructor() {
    this.axiosBearerClient = new AxiosBearerClient(
      `${envConfig.api.system_gofiber.host}/${envConfig.api.system_gofiber.version}/${endpoint}`
    )
    this.fetchClient = new FetchClient(
      `${envConfig.api.system_gofiber.host}/${envConfig.api.system_gofiber.version}/${endpoint}`
    )
  }
  async getProductsBySubOrderPage({ categoryId = 1 }: { categoryId: number }) {
    const response = await this.fetchClient.get<ProductsBySubOrderPageResponse>(
      '/products-by-sub-order-page/' + categoryId,
      {
        next: {
          revalidate: 60
        }
      }
    )
    return response
  }
}

const productApi = new ProductClient()
export default productApi
