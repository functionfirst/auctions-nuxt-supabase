import axios from 'axios'

const state = () => ({
  session: null
})

const actions = {
  async updateUser (_, { token, payload }) {
    await axios.post('/api/user')
    // const { error, data } = await auth.api.updateUser(token, payload)
  },

  async resetPassword ({ commit }, email) {
    await axios.post('/api/auth/resetpassword', email)
    commit('session', null)
  },

  async signout ({ commit }) {
    await axios.get('/api/auth/signout')
    commit('session', null)
  },

  async signup (_, auth) {
    await axios.post('/api/auth/signup', auth)
  },

  async getSessionDetails ({ commit }) {
    const { data } = await axios.get('/api/auth/session')
    commit('session', data)
  },

  async signin ({ commit }, auth) {
    const { data } = await axios.post('/api/auth/signin', auth)
    commit('session', data)
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
