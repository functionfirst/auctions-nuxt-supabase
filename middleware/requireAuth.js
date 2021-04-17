export default ({ $supabase, redirect, route }) => {
  if (!$supabase.auth.session()) {
    return redirect(`/login?redirect=${route.path}`)
  }
}
