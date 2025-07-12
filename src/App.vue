<script setup lang="ts">
import { RouterView } from 'vue-router'
import AuthLayot from './components/layout/wrappers/AuthLayot.vue'
</script>

<template>
  <AuthLayot>
    <RouterView v-slot="{ Component, route }">
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
