import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import VueHook from 'alova/vue'

export const commentsAlova = createAlova({
  baseURL: '/api',
  statesHook: VueHook,
  requestAdapter: GlobalFetch(),
  responded: async (response) => {
    const json = await response.json()
    if (json.code !== 200) {
      // 抛出错误或返回reject状态的Promise实例时，此请求将抛出错误
      throw new Error(json.message)
    }
    console.log(json.data)

    return json.data
  }
})
