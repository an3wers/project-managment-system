import type { CustomError } from '@/types/error'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const useErrorStore = defineStore('error', () => {
  const activeError = ref<null | CustomError>(null)

  function setActiveError({ error, customCode }: { error: string | Error; customCode: number }) {
    activeError.value = error instanceof Error ? error : Error(error)
    activeError.value.customCode = customCode
  }

  function clearActiveError() {
    activeError.value = null
  }

  return { activeError, setActiveError, clearActiveError }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useErrorStore, import.meta.hot))
}
