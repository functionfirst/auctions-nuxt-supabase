import { Middleware } from '@nuxt/types'

const requireAuth: Middleware = ({ $supabase, redirect, route }) => {
  if (!$supabase.auth.session()) {
    return redirect(`/login?redirect=${route.path}`)
  }
}

export default requireAuth
