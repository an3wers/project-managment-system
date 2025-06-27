<script setup lang="ts">
import { supabase } from '@/lib/supabas-client'
import { ref } from 'vue'
import type { Tables } from '../../../database/types'

const projects = ref<Tables<'projects'>[] | null>(null)

;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) {
    console.error(error)
  }

  projects.value = data
})()
</script>

<template>
  <div>
    <h1>Projects</h1>
    {{ projects }}
  </div>
</template>
