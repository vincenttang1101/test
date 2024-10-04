type ApiKeys = 'system_gofiber'

type ApiConfig = {
  [K in ApiKeys]: {
    host: string
    version: string
  }
}

type EnvConfig = {
  api: ApiConfig
}

export type { ApiConfig, ApiKeys, EnvConfig }
