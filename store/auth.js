import axios from 'axios'

const state = () => ({
  user: null,
  session: null
})

const actions = {
  async logout ({ commit }) {
    await axios.get('/api/auth/signout')
    commit('user', null)
    commit('session, null')
  },

  async login ({ commit }, auth) {
    const {
      data: {
        user,
        session
      } = {}
    } = await axios.post('/api/auth/signin', auth)

    commit('user', user)
    commit('session', session)
  }
}

const mutations = {
  user (state, payload) {
    state.user = payload
  },

  session (state, payload) {
    state.session = payload
  }
}

export {
  actions,
  state,
  mutations
}
