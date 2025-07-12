<script setup lang="ts">
import { usePageStore } from '@/stores/page-store'

const { setPageData } = usePageStore()

setPageData({ title: 'Page not found' })
</script>

<template>
  <div></div>
</template>
