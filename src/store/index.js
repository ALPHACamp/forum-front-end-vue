import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    token: null,
    user: {
      id: -1,
      name: '',
      email: '',
      isAdmin: false
    }
  },
  mutations: {
    authorized(state, payload) {
      const { token, user } = payload
      state.token = token
      state.user = user
      localStorage.setItem('token', token)
    },
    revokeAuthorized(state) {
      state.token = undefined
      state.user = {}
      localStorage.removeItem('token')
    }
  }
})
export default store
