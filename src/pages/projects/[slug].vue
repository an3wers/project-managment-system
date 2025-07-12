<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { usePageStore } from '@/stores/page-store'
import { projectQuery } from '@/utils/supabase/queryes'
import type { Project } from '@/utils/supabase/queryes'

const route = useRoute()
const { setPageData } = usePageStore()

const project = ref<Project | null>(null)

const getProject = async () => {
  const { data, error } = await projectQuery(route.params.slug as string)

  if (error) {
    console.error(error)
  }

  project.value = data?.[0] ?? null
}

await getProject()

setPageData({ title: project.value?.name ?? 'Project' })
</script>

<template>
  <div>
    {{ project }}
  </div>
</template>
