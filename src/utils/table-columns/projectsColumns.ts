import type { ColumnDef } from '@tanstack/vue-table'
import type { Projects } from '../supabase/queryes'
import { h } from 'vue'
import { RouterLink } from 'vue-router'

export const columns: ColumnDef<Projects[number]>[] = [
  {
    accessorKey: 'project_id',
    header: () => h('div', { class: 'text-left' }, 'ID'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, row.getValue('project_id'))
    },
  },
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => {
      return h(
        RouterLink,
        { to: `/projects/${row.original.slug}`, class: 'text-left font-medium' },
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
    accessorKey: 'created_at',
    header: () => h('div', { class: 'text-left' }, 'Created'),
    cell: ({ row }) => {
      const date = row.getValue('created_at')
      return h(
        'div',
        { class: 'text-left' },
        date ? new Date(String(date)).toLocaleDateString() : '-',
      )
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
