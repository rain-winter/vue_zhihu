import { ref } from 'vue'

function useURLLoader<T>(url: string) {
  const result = ref<T | null>(null)
  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      loading.value = false
      loaded.value = true
      result.value = result
    })
    .catch((err) => {
      error.value = err
    })

  return {
    result,
    loaded,
    loading,
    error
  }
}

export default useURLLoader
