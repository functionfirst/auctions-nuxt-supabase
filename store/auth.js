import axios from 'axios'

const state = () => ({
  session: null
})

const actions = {
  async signout ({ commit }) {
    await axios.get('/api/auth/signout')
    commit('session', null)
  },

  async register ({ commit }, auth) {
    const {
      data: {
        session
      } = {}
    } = await axios.get('/api/auth/signup', auth)
    commit('session', session)
  },

  async getSessionDetails ({ commit }) {
    const { data: { session } = {} } = await axios.get('/api/auth/session')
    commit('session', session)
  },

  async signin ({ commit }, auth) {
    const {
      data: {
        session
      } = {}
    } = await axios.post('/api/auth/signin', auth)

    commit('session', session)
  }
}

const mutations = {
  session (state, payload) {
    state.session = payload
  }
}

export {
  actions,
  state,
  mutations
}
