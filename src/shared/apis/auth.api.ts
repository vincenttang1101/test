import envConfig from '@/configs/env.config'
import AxiosBearerClient from '@/cores/services/axios-bear-client.service'
import AxiosClient from '@/cores/services/axios-client.service'
import FetchClient from '@/cores/services/fetch-client.service'

import { LoginBody } from '../types/body.type'
import { LoginResponse } from '../types/response.type'

const endpoint = 'auth'

class AuthClient {
  private readonly fetchClient!: FetchClient
  private readonly axiosClient!: AxiosClient
  private readonly axiosBearerClient: AxiosBearerClient

  constructor() {
    this.axiosBearerClient = new AxiosBearerClient(
      `${envConfig.api.system_gofiber.host}/${envConfig.api.system_gofiber.version}/${endpoint}`
    )
  }

  async loginWithAxiosBearer(body: LoginBody) {
    const response = await this.axiosBearerClient.post<LoginBody, LoginResponse>('/login', body)
    return response
  }
}

const authApi = new AuthClient()
export default authApi
