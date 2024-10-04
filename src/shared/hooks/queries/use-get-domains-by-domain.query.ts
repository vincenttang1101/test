// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { keepPreviousData, QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import domainsApi from '@/shared/apis/domains.api'
import { DomainsResponse } from '@/shared/types/response.type'

export function useGetDomainsByDomainQuery(
  params: { domain: string },
  options?: Omit<
    UseQueryOptions<AxiosResponse<DomainsResponse>, Error, AxiosResponse<DomainsResponse>, QueryKey>,
    'queryKey' | 'queryFn'
  >
) {
  return useQuery({
    queryKey: ['domains', params],
    queryFn: () => domainsApi.getDomainsByDomainWithFetch(params),
    placeholderData: keepPreviousData,
    ...options
  })
}
