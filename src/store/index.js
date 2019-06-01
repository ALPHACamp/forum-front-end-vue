import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from '@/api/users'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    token: null,
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  mutations: {
    authorized(state, payload) {
      console.log('authorized')
      const { token, currentUser, isAuthenticated } = payload

      state.token = token
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }

      state.isAuthenticated = isAuthenticated
      localStorage.setItem('token', token)
    },
    revokeAuthorized(state) {
      console.log('revokeAuthorized')
      state.token = undefined
      state.currentUser = {}
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
          const { data } = await usersAPI.get({ token })
          const { id, name, isAdmin, email, image } = data.profile

          commit('authorized', {
            token,
            currentUser: { id, name, email, isAdmin, image },
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
