const state = () => ({
  user: null
})

const mutations = {
  user (state, payload) {
    state.user = payload
  }
}

export {
  state,
  mutations
}
