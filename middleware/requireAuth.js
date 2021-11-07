const requireAuth = ({ $supabase, redirect, route }) => {
  if (process.client) {
    const session = $supabase.auth.session()

    if (!session) {
      return redirect(`/login?redirect=${route.path}`)
    }
  }
}

export default requireAuth
