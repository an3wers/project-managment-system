import type { ColumnDef } from '@tanstack/vue-table'
import type { TasksWithProjects } from '../supabase/queryes'
import { h } from 'vue'
import { RouterLink } from 'vue-router'

export const columns: ColumnDef<TasksWithProjects[number]>[] = [
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
      return h(
        RouterLink,
        { to: `/tasks/${row.original.task_id}`, class: 'text-left font-medium' },
        () => row.getValue('name'),
      )
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
    accessorKey: 'projects',
    header: () => h('div', { class: 'text-left' }, 'Project'),
    cell: ({ row }) => {
      return row.original.projects
        ? h(
            RouterLink,
            { to: `/projects/${row.original.projects.slug}`, class: 'text-left font-medium' },
            () => row.original.projects?.name,
          )
        : h('div', { class: 'text-left' }, '-')
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
