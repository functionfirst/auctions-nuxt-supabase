import { MutationTree } from 'vuex'

export const state = () => ({
  user: null // as User
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  user (state, payload) {
    state.user = payload
  }
}
