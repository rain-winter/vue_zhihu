import { onUnmounted } from 'vue'

function useDomCreate(nodeId: string) {
  // 创建节点
  const node = document.createElement('div')
  node.id = nodeId
  document.body.appendChild(node)
  onUnmounted(() => {
    document.body.removeChild(node)
  })
}

export default useDomCreate
