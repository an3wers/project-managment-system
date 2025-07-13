<script setup lang="ts">
import { usePageStore } from '@/stores/page-store'
import { useErrorStore } from '@/stores/error-store'

const { setPageData } = usePageStore()

setPageData({ title: '' })

const { setActiveError } = useErrorStore()

setActiveError({ error: 'Page not found', customCode: 404 })
</script>

<template>
  <div></div>
</template>
