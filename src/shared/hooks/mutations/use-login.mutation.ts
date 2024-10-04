import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import authApi from '@/shared/apis/auth.api'
import { LoginBody } from '@/shared/types/body.type'
import { LoginResponse } from '@/shared/types/response.type'

type UseLoginMutationOptions = Omit<UseMutationOptions<AxiosResponse<LoginResponse>, Error, LoginBody>, 'mutationFn'>

export default function useLoginMutation(options?: UseLoginMutationOptions) {
  return useMutation({
    mutationFn: (body: LoginBody) => authApi.loginWithAxiosBearer(body),
    ...options
  })
}
