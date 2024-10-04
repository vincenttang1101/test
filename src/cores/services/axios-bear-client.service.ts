import { InternalAxiosRequestConfig } from 'axios'

import { authStore } from '@/shared/stores/common/auth.store'
import { LoginResponse } from '@/shared/types/response.type'
import { User } from '@/shared/types/users.type'

import AxiosClient from './axios-client.service'
import localStorageService from './local-storage.service'

class AxiosBearerClient extends AxiosClient {
  private accessToken: string | null = null
  private profile: User | null = null

  constructor(baseURL: string) {
    super(baseURL)
    this.accessToken = localStorageService.get('accessToken')
    this.profile = localStorageService.get('profile')

    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.axiosInstance.interceptors.response.use(
      (response) => {
        const { url } = response.config

        if (url === '/login') {
          const result = response.data.data as LoginResponse['data']
          const { accessToken, user } = result
          this.handleAuthResponse(accessToken, user)
        }

        return response
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  private handleAuthResponse(accessToken: string, profile: User) {
    this.accessToken = accessToken
    this.profile = profile

    localStorageService.set('accessToken', this.accessToken)
    localStorageService.set('profile', this.profile)

    authStore.getState().setAuth({
      accessToken,
      profile
    })
  }
}

export default AxiosBearerClient
