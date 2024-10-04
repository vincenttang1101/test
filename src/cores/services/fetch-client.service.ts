/* eslint-disable no-undef */
class HttpError extends Error {
  public status: number
  public statusText: string
  public response: Response

  constructor(response: Response) {
    super(`HTTP error! status: ${response.status}`)
    this.status = response.status
    this.statusText = response.statusText
    this.response = response
  }
}

class FetchClient {
  private baseURL: string

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  private buildUrl(endpoint: string): string {
    if (this.baseURL.endsWith('/') && endpoint.startsWith('/')) {
      return `${this.baseURL}${endpoint.slice(1)}`
    } else if (!this.baseURL.endsWith('/') && !endpoint.startsWith('/')) {
      return `${this.baseURL}/${endpoint}`
    } else {
      return `${this.baseURL}${endpoint}`
    }
  }

  private buildUrlWithParams(url: string, params?: Record<string, any>): string {
    if (!params) return url
    const searchParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, value.toString())
      }
    })
    const queryString = searchParams.toString()
    return queryString ? `${url}?${queryString}` : url
  }

  protected async request<R>(endpoint: string, options: RequestInit = {}): Promise<R> {
    const { method = 'GET', headers = {}, body = null, cache = 'no-store', next } = options

    const url = this.buildUrl(endpoint)

    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: body && typeof body === 'object' && !(body instanceof FormData) ? JSON.stringify(body) : body,
      cache: next?.revalidate ? undefined : cache,
      next
    }

    try {
      const response = await fetch(url, fetchOptions)
      if (!response.ok) {
        throw new HttpError(response)
      }
      return await response.json()
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  get<R>(endpoint: string, options: RequestInit & { params?: Record<string, any> } = {}): Promise<R> {
    const { params, ...fetchOptions } = options
    const url = this.buildUrlWithParams(endpoint, params)
    return this.request<R>(url, { ...fetchOptions, method: 'GET' })
  }

  post<B, R>(endpoint: string, body: B, options: RequestInit = {}): Promise<R> {
    return this.request<R>(endpoint, { ...options, method: 'POST', body: JSON.stringify(body) })
  }

  put<B, R>(endpoint: string, body: B, options: RequestInit = {}): Promise<R> {
    return this.request<R>(endpoint, { ...options, method: 'PUT', body: JSON.stringify(body) })
  }

  patch<B, R>(endpoint: string, body: B, options: RequestInit = {}): Promise<R> {
    return this.request<R>(endpoint, { ...options, method: 'PATCH', body: JSON.stringify(body) })
  }

  delete<R>(endpoint: string, options: RequestInit = {}): Promise<R> {
    return this.request<R>(endpoint, { ...options, method: 'DELETE' })
  }
}

export default FetchClient
