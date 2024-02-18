import { Method, createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import VueHook from 'alova/vue'

import { useGlobalStore } from '@/stores/global'

const beforeRequest = (method: Method) => {
  // 假设我们需要添加token到请求头
  // method.config.headers.common.Authorization = ''
  const globalStore = useGlobalStore()
  globalStore.isLoading = true
  globalStore.error = {
    status: false,
    message: ''
  }
}
const onSuccess = async (response: any) => {
  if (response.status !== 200) {
    const globalStore = useGlobalStore()
    globalStore.error = {
      status: true,
      message: response.statusText
    }
  }
  const json = await response.json()
  if (json.code !== 200) {
    // 抛出错误或返回reject状态的Promise实例时，此请求将抛出错误
    throw new Error(json.message)
  }

  // 解析的响应数据将传给method实例的transformData钩子函数，这些函数将在后续讲解
  return json.data
}

// 请求错误时将会进入该拦截器。
// 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
const onError = (err: any, method: Method) => {
  console.log(err, 'onError')
  const globalStore = useGlobalStore()
  globalStore.error = {
    status: true,
    message: 'onError'
  }
}

const onComplete = (method: Method) => {
  // 处理请求完成逻辑
  const globalStore = useGlobalStore()
  globalStore.isLoading = false
}

const BaseAlovaOption = {
  baseURL: '/api',
  statesHook: VueHook,
  requestAdapter: GlobalFetch(),
  beforeRequest: (method: Method) => beforeRequest(method),
  responded: {
    onSuccess: (response) => onSuccess(response),
    onError: (err, method) => onError(err, method),
    onComplete: (method) => onComplete(method)
  }
}

export const commentsAlova = createAlova({
  ...BaseAlovaOption
})

export const userAlova = createAlova({
  ...BaseAlovaOption
})
