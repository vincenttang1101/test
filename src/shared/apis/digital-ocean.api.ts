import envConfig from '@/configs/env.config'
import AxiosBearerClient from '@/cores/services/axios-bear-client.service'
import AxiosClient from '@/cores/services/axios-client.service'
import FetchClient from '@/cores/services/fetch-client.service'

import { SizesByTypeDigitalOceanResponse } from '../types/response.type'

const endpoint = 'digital-ocean'

class DigitalOceanClient {
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
  async getImagesWithAxiosBearer() {
    const response = await this.axiosBearerClient.get('/list/images')
    return response
  }
  async getSizesByType({ type }: { type: string }) {
    const response = await this.fetchClient.get<SizesByTypeDigitalOceanResponse>('/list/sizes', {
      params: {
        type
      },
      headers: {
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjVmYWVlY2IwOWJiMjkyMTY5MjM0NGNlIiwiaWF0IjoxNzI3MTQ4MTQ0LCJleHAiOjE3MjcyMzQ1NDR9.1PAM_g9XB6f33926dEDyFZvRHf21QPS9d9kiue2_lfU'
      },
      next: {
        revalidate: 60
      }
    })
    return response
  }
}

const digitalOceanApi = new DigitalOceanClient()
export default digitalOceanApi
