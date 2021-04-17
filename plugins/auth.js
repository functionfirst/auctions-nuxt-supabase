export default ({ $supabase, store }) => {
  const session = $supabase.auth.session()
  const user = session ? session.user : null
  store.commit('user', user)

  $supabase.auth.onAuthStateChange((event, session) => {
    const user = session ? session.user : null
    store.commit('user', user)
  })
}
