<script setup lang="ts">
import { ref } from 'vue'
import DataTable from '@/components/data-table/DataTable.vue'
import { usePageStore } from '@/stores/page-store'
import { projectsQuery } from '@/utils/supabase/queryes'
import type { Projects } from '@/utils/supabase/queryes'
import { columns } from '@/utils/table-columns/projectsColumns'
import { useErrorStore } from '@/stores/error-store'

const { setPageData } = usePageStore()

setPageData({ title: 'Projects' })

const projects = ref<Projects | null>(null)

const getProjects = async () => {
  const { data, error, status } = await projectsQuery

  if (error) {
    useErrorStore().setActiveError({ error: error.message, customCode: status })
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
