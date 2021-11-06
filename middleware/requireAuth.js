const requireAuth = ({ $supabase, redirect, route }) => {
  const session = $supabase.auth.session()

  if (!session) {
    return redirect(`/login?redirect=${route.path}`)
  }
}

export default requireAuth
