import { EnvConfig } from '@/shared/types/configs.type'

const envConfig: EnvConfig = {
  api: {
    system_gofiber: {
      host: process.env.NEXT_PUBLIC_SYSTEM_GOFIBER_HOST || 'https://system.gofiber.vn',
      version: process.env.NEXT_PUBLIC_SYSTEM_GOFIBER_API_VERSION || 'api/v1'
    }
  }
}

export default envConfig
