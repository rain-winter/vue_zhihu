import type { CheckCondition } from '@/types/common'
import type { ImageProps } from '@/types/user'

export function beforeUploadCheck(file: File, condition: CheckCondition) {
  const { format, size } = condition
  const isValidFormat = format ? format.includes(file.type) : true
  const isValidSize = size ? file.size / 1024 / 1024 < size : true
  let error = null
  if (!isValidFormat) {
    error = 'format'
  }
  if (!isValidSize) {
    error = 'size'
  }
  return {
    passed: isValidFormat && isValidSize,
    error
  }
}

export function generateFitUrl(data?: ImageProps, width?: number, height?: number, format = ['m_pad']) {
  return 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F26c87c4d-f7f1-4bcf-8ccb-bbf4593e5daa%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1711444006&t=ffab90c9ab9e58d2f4a81051c1e4753d'
  // if (data && data.url) {
  //   const formatStr = format.reduce((prev, current) => {
  //     return current + ',' + prev
  //   }, '')
  //   data.fitUrl = data.url + `?x-oss-process=image/resize,${formatStr}h_${height},w_${width}`
  // }
}