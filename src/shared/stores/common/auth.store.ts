import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import localStorageService from '@/cores/services/local-storage.service'
import { User } from '@/shared/types/users.type'

type AuthState = {
  isAuthenticated: boolean
  profile: User | null
  accessToken: string | null
  setAuth: (payload: { profile?: User | null; accessToken?: string | null }) => void
  logout: () => void
}

const useAuthStore = create<AuthState>()(
  devtools(
    (set) => ({
      isAuthenticated: !!localStorageService.get('accessToken'),
      profile: localStorageService.get('profile'),
      accessToken: localStorageService.get('accessToken'),

      setAuth: (payload) =>
        set((state) => {
          const { profile, accessToken } = payload
          const newProfile = profile ?? state.profile
          const newToken = accessToken ?? state.accessToken
          return {
            isAuthenticated: !!newProfile && !!newToken,
            profile: newProfile,
            accessToken: newToken
          }
        }),

      logout: () => {
        localStorageService.remove('profile')
        localStorageService.remove('accessToken')
        set(() => ({
          isAuthenticated: false,
          profile: null,
          accessToken: null
        }))
      }
    }),
    { name: 'AuthStore' }
  )
)

export { useAuthStore }
export const authStore = useAuthStore
