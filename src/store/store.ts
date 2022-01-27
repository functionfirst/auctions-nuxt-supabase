import { IState } from './store.types'
import { IAuthData, IProfileData } from '@/src/entities'

export const state = () => ({
  session: null,
  profile: null
})

export const mutations = {
  session (state: IState, payload: IAuthData): void {
    state.session = payload
  },

  profile (state: IState, payload: IProfileData) {
    state.profile = payload
  },

  logout (state: IState) {
    state.profile = null
    state.session = null
  }
}
