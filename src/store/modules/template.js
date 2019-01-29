const state = {
  template: ''
}

const mutations = {
  setTemplate (state, value) {
    state.template = value
  }
}

const actions = {
  setTemplate ({ commit }, value) {
    commit('setTemplate', value)
  }
}
const getters = {
  template: state => state.template
}
export default {
  state,
  mutations,
  actions,
  getters
}
