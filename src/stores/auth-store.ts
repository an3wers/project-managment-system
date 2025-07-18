import { supabase } from '@/lib/supabas-client'
import { profileQuery, type Profile } from '@/utils/supabase/queryes'
import type { Session, User } from '@supabase/supabase-js'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth-store', () => {
  const user = ref<User | null>(null)
  const profile = ref<Profile | null>(null)

  async function setUser(session: Session | null = null) {
    if (!session) {
      user.value = null
      profile.value = null
      return
    }
    user.value = session.user
    await setProfile()
  }

  async function setProfile() {
    if (!user.value) {
      profile.value = null
      return
    }

    if (!profile.value || profile.value.id !== user.value.id) {
      const { data, error } = await profileQuery(user.value.id)

      if (error) {
        console.error(error)
        profile.value = null
        return
      }
      profile.value = data
    }
  }

  async function getSession() {
    const { data } = await supabase.auth.getSession()

    if (data.session?.user) {
      await setUser(data.session)
    }
  }

  return { user, profile, setUser, getSession }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
