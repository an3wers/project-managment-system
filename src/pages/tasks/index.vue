<script setup lang="ts">
import { ref } from 'vue'
import DataTable from '@/components/data-table/DataTable.vue'
import { usePageStore } from '@/stores/page-store'
import { tasksWithProjectsQuery } from '@/utils/supabase/queryes'
import type { TasksWithProjects } from '@/utils/supabase/queryes'
import { columns } from '@/utils/table-columns/tasksColumns'
import { useErrorStore } from '@/stores/error-store'

const { setPageData } = usePageStore()

setPageData({ title: 'My tasks' })

const tasks = ref<TasksWithProjects | null>(null)
const getTasks = async () => {
  const { data, error, status } = await tasksWithProjectsQuery

  if (error) {
    useErrorStore().setActiveError({ error: error.message, customCode: status })
  }

  tasks.value = data
}

await getTasks()
</script>

<template>
  <div>
    <DataTable v-if="tasks" :columns="columns" :data="tasks" />
  </div>
</template>
