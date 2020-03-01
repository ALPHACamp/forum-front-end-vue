import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  // 用來修改 state 的方法
  mutations: {
    setCurrentUser (state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 透過 API 取得的 currentUser
        ...currentUser
      }

      state.isAuthenticated = true
    }
  },
  // 透過 API 請求資料...
  actions: {
  },
  modules: {
  }
})
