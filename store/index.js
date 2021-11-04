export const state = () => ({
  session: null,
  profile: null
})

export const mutations = {
  session (state, payload) {
    state.session = payload
  },

  profile (state, payload) {
    state.profile = payload
  },

  logout (state) {
    state.profile = null
    state.session = null
  }
}
