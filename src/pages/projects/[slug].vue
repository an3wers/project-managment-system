<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePageStore } from '@/stores/page-store'
import { projectQuery } from '@/utils/supabase/queryes'
import type { Project } from '@/utils/supabase/queryes'

const route = useRoute('/projects/[slug]')
const { setPageData } = usePageStore()

const project = ref<Project | null>(null)

watch(
  () => project.value?.name,
  () => {
    setPageData({ title: project.value?.name ?? 'Project' })
  },
)

const getProject = async () => {
  const { data, error } = await projectQuery(route.params.slug as string)

  if (error) {
    console.error(error)
  }

  project.value = data ?? null
}

await getProject()
</script>

<template>
  <div>
    <p>{{ project?.description }}</p>
    <p>{{ project?.status }}</p>
    <p>{{ project?.created_at }}</p>
    <p>{{ project?.tasks }}</p>
  </div>
</template>
