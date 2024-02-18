<script setup lang="ts">
import useDomCreate from '@/hooks/useDomCreate'
import type { MessageType } from '@/types/global'
import { ref, type PropType } from 'vue'

defineOptions({
  name: 'MessageInfo'
})
defineProps({
  message: String,
  type: {
    type: String as PropType<MessageType>,
    default: 'primary'
  }
})
const emits = defineEmits(['closeMessage'])

// 创建节点
useDomCreate('message')

const isVisible = ref(true)
const hide = () => {
  isVisible.value = false
  emits('closeMessage', true)
}
</script>
<template>
  <teleport to="#message">
    <div
      class="alert fixed-top w-50 mt-2 mx-auto d-flex justify-content-between"
      :class="`alert-${type}`"
      role="alert"
      v-if="isVisible"
    >
      <strong>{{ message }}</strong>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        @click="hide"
      ></button>
    </div>
  </teleport>
</template>
