<template>
  <div class="container py-5">
    <form
      class="w-100"
      @submit.prevent.stop="handleSubmit"
    >
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign In
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        >
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        :disabled="isProcessing"
        type="submit"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">
            Sign Up
          </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from './../apis/authorization'
import { Toast } from './../utils/helpers'

export default {
  data () {
    return {
      email: '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit (e) {
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: 'warning',
            title: '請填入 email 和 password'
          })
          return
        }

        this.isProcessing = true

        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password
        })

        const { data } = response

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // 將伺服器回傳的 token 保存在 localStorage 中
        localStorage.setItem('token', data.token)

        // 透過 setCurrentUser 把使用者資料存到 Vuex 的 state 中
        this.$store.commit('setCurrentUser', data.user)

        // 成功登入後進行轉址
        this.$router.push('/restaurants')
      } catch (error) {
        this.isProcessing = false
        this.password = ''

        // 顯示錯誤提示
        Toast.fire({
          icon: 'warning',
          title: '輸入的帳號密碼有誤'
        })

        console.error(error.message)
      }
    }
  }
}
</script>
