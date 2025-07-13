<script setup lang="ts">
import { usePageStore } from '@/stores/page-store'
import { taskWithProjectQuery, type TaskWithProject } from '@/utils/supabase/queryes'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useErrorStore } from '@/stores/error-store'

const route = useRoute('/tasks/[id]')

const { setPageData } = usePageStore()

const task = ref<TaskWithProject | null>(null)

watch(
  () => task.value?.name,
  () => {
    setPageData({ title: task.value?.name ?? 'Task Details' })
  },
)

const getTask = async () => {
  const { data, error, status } = await taskWithProjectQuery(Number(route.params.id))

  if (error) {
    useErrorStore().setActiveError({ error: error.message, customCode: status })
  }

  task.value = data ?? null
}

await getTask()
</script>

<template>
  <div>
    <p>{{ task?.description }}</p>
    <p>{{ task?.status }}</p>
    <p>{{ task?.due_date }}</p>
    <p>Project: {{ task?.projects?.name }}</p>
  </div>
</template>
