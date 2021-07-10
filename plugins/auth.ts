import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import { AuthChangeEvent, Session } from '@supabase/supabase-js'

export default defineNuxtPlugin((context) => {
  const { $supabase, store } = context
  const session = $supabase.auth.session()
  const user = session ? session.user : null
  store.commit('user', user)

  $supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session | null) => {
    const user = session ? session.user : null
    store.commit('user', user)
  })
})
