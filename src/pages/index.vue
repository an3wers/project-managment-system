<script setup lang="ts">
import { usePageStore } from '@/stores/page-store'

const { setPageData } = usePageStore()

setPageData({ title: 'Dashboard' })
</script>

<template>
  <div></div>
</template>
