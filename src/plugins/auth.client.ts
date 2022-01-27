import { IAuthService } from '@/src/services'
import { IStore } from '@/src/store'

export interface IAuthContext {
  store: IStore,
  $services: IAuthService
}

export default (context: IAuthContext) => {
  const { store, $services } = context
  const session = $services.session()

  // @todo store session in vuex
  store.commit('session', session)

  // @todo access service and store in vuex

  // $supabase.auth.onAuthStateChange((_event, session) => {
  //   store.commit('session', session)
  // })
}
