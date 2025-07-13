<script setup lang="ts">
import { RouterView } from 'vue-router'
import AuthLayot from './components/layout/wrappers/AuthLayot.vue'
import { useErrorStore } from './stores/error-store'
import AppErrorPage from './components/app-error/AppErrorPage.vue'
import { onErrorCaptured } from 'vue'

const errorStore = useErrorStore()

onErrorCaptured((error) => {
  errorStore.setActiveError({ error: error, customCode: 500 })
})
</script>

<template>
  <AuthLayot>
    <AppErrorPage v-if="errorStore.activeError !== null" />

    <RouterView v-else v-slot="{ Component, route }">
      <Suspense v-if="Component">
        <Component :is="Component" :key="route.path" />

        <template #fallback>
          <p class="text-center font-bold my-10">Loading...</p>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayot>
</template>

<style scoped></style>
