const requireAuth = ({ $supabase, redirect, route }) => {
  const user = $supabase.auth.user()

  if (!user) {
    return redirect(`/login?redirect=${route.path}`)
  }
}

export default requireAuth
