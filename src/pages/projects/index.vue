<script setup lang="ts">
import { ref } from 'vue'
import DataTable from '@/components/data-table/DataTable.vue'
import { usePageStore } from '@/stores/page-store'
import { projectsQuery } from '@/utils/supabase/queryes'
import type { Projects } from '@/utils/supabase/queryes'
import { columns } from '@/utils/table-columns/projectsColumns'

const { setPageData } = usePageStore()

setPageData({ title: 'Projects' })

const projects = ref<Projects | null>(null)

const getProjects = async () => {
  const { data, error } = await projectsQuery

  if (error) {
    console.error(error)
  }

  projects.value = data
}

await getProjects()
</script>

<template>
  <div>
    <DataTable v-if="projects" :columns="columns" :data="projects" />
  </div>
</template>
