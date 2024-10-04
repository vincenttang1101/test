import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

class AxiosClient {
  protected axiosInstance: AxiosInstance

  constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  private removeEmptyParams(params: Record<string, any>): Record<string, any> {
    return Object.entries(params).reduce(
      (acc, [key, value]) => {
        if (value !== null && value !== undefined) {
          acc[key] = value
        }
        return acc
      },
      {} as Record<string, any>
    )
  }

  private async request<R>(config: AxiosRequestConfig): Promise<AxiosResponse<R>> {
    try {
      if (config.params) {
        config.params = this.removeEmptyParams(config.params)
      }
      const response = await this.axiosInstance.request<R>(config)
      return response
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Request error:', error)
      }
      throw error
    }
  }

  get<R>(endpoint: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<R>> {
    return this.request<R>({ ...config, method: 'GET', url: endpoint })
  }

  post<B, R>(endpoint: string, body: B, config: AxiosRequestConfig = {}): Promise<AxiosResponse<R>> {
    return this.request<R>({
      ...config,
      method: 'POST',
      url: endpoint,
      data: body
    })
  }

  put<B, R>(endpoint: string, body: B, config: AxiosRequestConfig = {}): Promise<AxiosResponse<R>> {
    return this.request<R>({
      ...config,
      method: 'PUT',
      url: endpoint,
      data: body
    })
  }

  patch<B, R>(endpoint: string, body: B, config: AxiosRequestConfig = {}): Promise<AxiosResponse<R>> {
    return this.request<R>({
      ...config,
      method: 'PATCH',
      url: endpoint,
      data: body
    })
  }

  delete<R>(endpoint: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<R>> {
    return this.request<R>({ ...config, method: 'DELETE', url: endpoint })
  }
}

export default AxiosClient
