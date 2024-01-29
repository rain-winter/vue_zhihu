import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import VueHook from 'alova/vue'

export const alovaInstance = createAlova({
  baseURL: '/api',
  // 请求超时时间，单位为毫秒，默认为0，表示永不超时
  timeout: 50000,
  statesHook: VueHook,
  requestAdapter: GlobalFetch(),
  responded: (response) => response.json()
})
