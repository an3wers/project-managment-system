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
  <div class="max-w-6xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">{{ project?.name }}</h1>
    {{ project }}
  </div>
</template>
