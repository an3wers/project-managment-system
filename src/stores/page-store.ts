import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const usePageStore = defineStore('page-store', () => {
  const pageData = ref<{ title: string }>({ title: '' })

  function setPageData(data: { title: string }) {
    pageData.value = data
  }

  return { pageData, setPageData }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
}
