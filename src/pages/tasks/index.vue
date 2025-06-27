<script setup lang="ts">
import { supabase } from '@/lib/supabas-client'
import { ref } from 'vue'
import type { Tables } from '../../../database/types'

const tasks = ref<Tables<'tasks'>[] | null>(null)

;(async () => {
  const { data, error } = await supabase.from('tasks').select()

  if (error) {
    console.error(error)
  }

  tasks.value = data
})()
</script>

<template>
  <div>
    <h1>Tasks</h1>
    <ul>
      <li v-for="t in tasks" :key="t.task_id">
        {{ t.name }}
      </li>
    </ul>
  </div>
</template>
