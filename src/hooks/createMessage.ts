import Message from '@/components/Message.vue'
import type { MessageType } from '@/types/global'
import { createApp } from 'vue'

const createMessage = (message: string, type: MessageType, timeout = 1500) => {
  const messageInstance = createApp(Message, {
    message,
    type
  })
  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)
  messageInstance.mount(mountNode)
  setTimeout(() => {
    messageInstance.unmount()
    document.body.removeChild(mountNode)
  }, timeout)
}
export default createMessage
