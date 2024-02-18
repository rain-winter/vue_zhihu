import type { GlobalErrorProps } from '@/types/global'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore('global', () => {
  const isLoading = ref(false)
  const error = ref<GlobalErrorProps>({
    status: false
  })

  return {
    isLoading,
    error
  }
})
