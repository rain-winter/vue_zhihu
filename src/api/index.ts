import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import VueHook from 'alova/vue'

import { useGlobalStore } from '@/stores/global'

const beforeRequest = (method: any) => {
  // 假设我们需要添加token到请求头
  // method.config.headers.common.Authorization = ''
  const globalStore = useGlobalStore()
  globalStore.isLoading = true
}
const responded = async (response: any) => {
  const globalStore = useGlobalStore()
  const json = await response.json()
  globalStore.isLoading = false

  if (json.code !== 200) {
    // 抛出错误或返回reject状态的Promise实例时，此请求将抛出错误
    throw new Error(json.message)
  }
  return json.data
}

export const commentsAlova = createAlova({
  baseURL: '/api',
  statesHook: VueHook,
  requestAdapter: GlobalFetch(),
  beforeRequest: (method) => beforeRequest(method),
  responded: (response) => responded(response)
})

export const userAlova = createAlova({
  baseURL: '/api',
  statesHook: VueHook,
  requestAdapter: GlobalFetch(),
  beforeRequest: (method) => beforeRequest(method),
  responded: (response) => responded(response)
})
