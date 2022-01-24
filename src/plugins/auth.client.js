export default ({ $supabase, store }) => {
  const session = $supabase.auth.session()
  store.commit('session', session)

  $supabase.auth.onAuthStateChange((_event, session) => {
    store.commit('session', session)
  })
}
