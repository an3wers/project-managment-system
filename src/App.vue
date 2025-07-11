<script setup lang="ts">
import { RouterView } from 'vue-router'
import AuthLayot from './components/layout/wrappers/AuthLayot.vue'
</script>

<template>
  <AuthLayot>
    <RouterView />
  </AuthLayot>
</template>

<style scoped></style>
