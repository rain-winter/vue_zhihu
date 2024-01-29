import { alovaInstance } from '@/utils/alova'
import { useRequest } from 'alova'

export const useGet = (url: string) => {
  const { data, loading, error } = useRequest(alovaInstance.Get(url))
  return {
    data,
    loading,
    error
  }
}
