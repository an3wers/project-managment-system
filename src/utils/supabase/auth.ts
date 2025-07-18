import { supabase } from '@/lib/supabas-client'
import { useAuthStore } from '@/stores/auth-store'

const authStore = useAuthStore()

export interface RegisterForm {
  username: string
  firstName: string
  lastName: string
  email: string
  password: string
}

export async function register(formData: RegisterForm) {
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  })

  if (error) {
    console.error(error)
    return false
  }

  if (data.user) {
    const { error } = await supabase.from('profiles').insert({
      id: data.user.id,
      username: formData.username,
      full_name: formData.firstName.concat(' ', formData.lastName),
    })

    if (error) {
      console.error(error)
      return false
    }

    await authStore.setUser(data.session)
    return true
  }

  return false
}

export interface LoginForm {
  email: string
  password: string
}

export async function login(formData: LoginForm) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  })

  if (error) {
    console.error(error)
    return false
  }

  await authStore.setUser(data.session)

  return true
}

export async function logout() {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error(error)
    return false
  }

  await authStore.setUser(null)
  return true
}
