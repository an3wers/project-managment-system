<script setup lang="ts">
import { useErrorStore } from '@/stores/error-store'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const errorStore = useErrorStore()

const message = ref('')
const customCode = ref(0)

if (errorStore.activeError) {
  message.value = errorStore.activeError.message
  customCode.value = errorStore.activeError.customCode ?? 0
}

router.afterEach(() => {
  errorStore.clearActiveError()
})
</script>
<template>
  <section class="flex flex-col items-center justify-center h-full min-h-[calc(100vh-10rem)] gap-4">
    <Icon icon="lucide:alert-circle" class="text-red-500 text-4xl" />
    <h1 class="text-4xl font-bold">{{ customCode }}</h1>
    <p class="text-lg">{{ message }}</p>
    <RouterLink to="/" class="text-blue-500">Go to home</RouterLink>
  </section>
</template>
