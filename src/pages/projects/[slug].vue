<script setup lang="ts">
import { supabase } from '@/lib/supabas-client'
import type { Tables } from 'database/types'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const project = ref<Tables<'projects'> | null>(null)

const getProject = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select()
    .eq('slug', route.params.slug as string)

  if (error) {
    console.error(error)
  }

  project.value = data?.[0] ?? null
}

await getProject()
</script>

<template>
  <div>
    {{ project }}
  </div>
</template>
