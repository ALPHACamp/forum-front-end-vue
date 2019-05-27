import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from '@/api/users'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    token: null,
    user: {
      id: -1,
      name: '',
      email: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  mutations: {
    authorized(state, payload) {
      console.log('authorized')
      const { token, user, isAuthenticated } = payload
      state.token = token
      state.user = user
      state.isAuthenticated = isAuthenticated
      localStorage.setItem('token', token)
    },
    revokeAuthorized(state) {
      console.log('revokeAuthorized')
      state.token = undefined
      state.user = {}
      state.isAuthenticated = undefined
      localStorage.removeItem('token')
    }
  },
  actions: {
    async getUserDetail({ commit, state }, token) {
      try {
        // no token in localStorage
        if (!token) {
          return false
        }

        // When app initialize first time,
        // use token from localStorage to verify auth with server
        if (!state.token) {
          const { data } = await usersAPI.getUser({ token })
          const { id, name, isAdmin, email } = data.profile

          commit('authorized', {
            token,
            user: { id, name, email, isAdmin },
            isAuthenticated: true
          })
        }

        return true
      } catch (error) {
        commit('revokeAuthorized')
        return false
      }
    },
    async verify({ state, dispatch }) {
      const token = localStorage.getItem('token')
      const isAuthenticated = await dispatch('getUserDetail', token)
      if (!isAuthenticated) return false

      return state.isAuthenticated
    }
  }
})
export default store
