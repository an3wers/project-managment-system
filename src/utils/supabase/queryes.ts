import { supabase } from '@/lib/supabas-client'
import type { QueryData } from '@supabase/supabase-js'

export const tasksWithProjectsQuery = supabase
  .from('tasks')
  .select(`*, projects (project_id, name, slug)`)

export type TasksWithProjects = QueryData<typeof tasksWithProjectsQuery>

export const projectsQuery = supabase.from('projects').select('*')

export type Projects = QueryData<typeof projectsQuery>

export const projectQuery = (slug: string) =>
  supabase
    .from('projects')
    .select(`*, tasks (task_id, name, status, due_date)`)
    .eq('slug', slug)
    .single()

export type Project = QueryData<ReturnType<typeof projectQuery>>

export const taskWithProjectQuery = (id: number) =>
  supabase.from('tasks').select(`*, projects (project_id, name, slug)`).eq('task_id', id).single()

export type TaskWithProject = QueryData<ReturnType<typeof taskWithProjectQuery>>
