<script setup lang="ts">
import { supabase } from '@/lib/supabas-client'
import { h, ref } from 'vue'
import type { Tables } from '../../../database/types'
import type { ColumnDef } from '@tanstack/vue-table'
import DataTable from '@/components/data-table/DataTable.vue'

// TODO: migrate to Tanstack Query
const tasks = ref<Tables<'tasks'>[] | null>(null)
const getTasks = async () => {
  const { data, error } = await supabase.from('tasks').select()

  if (error) {
    console.error(error)
  }

  tasks.value = data
}

await getTasks()

const columns: ColumnDef<Tables<'tasks'>>[] = [
  {
    accessorKey: 'task_id',
    header: () => h('div', { class: 'text-left' }, 'ID'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, row.getValue('task_id'))
    },
  },
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, row.getValue('name'))
    },
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left' }, row.getValue('status'))
    },
  },
  {
    accessorKey: 'due_date',
    header: () => h('div', { class: 'text-left' }, 'Due Date'),
    cell: ({ row }) => {
      const date = row.getValue('due_date')
      return h(
        'div',
        { class: 'text-left' },
        date ? new Date(String(date)).toLocaleDateString() : '-',
      )
    },
  },
  {
    accessorKey: 'project_id',
    header: () => h('div', { class: 'text-left' }, 'Project ID'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left' }, row.getValue('project_id') || '-')
    },
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'Collaborators'),
    cell: ({ row }) => {
      const collaborators = (row.getValue('collaborators') as string[]) || []
      return h('div', { class: 'text-left' }, collaborators.join(', ') || '-')
    },
  },
]
</script>

<template>
  <div>
    <DataTable v-if="tasks" :columns="columns" :data="tasks" />
  </div>
</template>
