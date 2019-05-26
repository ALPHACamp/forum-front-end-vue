<template>
  <form class="w-100">
    <div class="text-center mb-4">
      <h1 class="h3 mb-3 font-weight-normal">Signin</h1>
    </div>

    <div class="form-label-group mb-2">
      <label for="email">email</label>
      <input
        id="email"
        type="text"
        v-model="email"
        class="form-control"
        placeholder="email"
        required
        autofocus
      >
    </div>

    <div class="form-label-group mb-3">
      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        v-model="password"
        class="form-control"
        placeholder="Password"
        required
      >
    </div>

    <button @click="submit" class="btn btn-lg btn-primary btn-block mb-3" type="button">Submit</button>

    <div class="text-center mb-3">
      <p>
        <router-link to="/signup">Signup</router-link>
      </p>
    </div>

    <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
  </form>
</template>

<script>
import authorizationAPI from '@/api/authorization'
import { Toast } from '@/utils/helpers'

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submit(e) {
      e.preventDefault()
      e.stopPropagation()
      if (!this.email || !this.password) {
        Toast.fire({
          type: 'warning',
          title: '請填入 email 和 password'
        })
        return
      }

      this.signIn({
        email: this.email,
        password: this.password
      })
    },
    async signIn({ email, password }) {
      try {
        const { data, statusText } = await authorizationAPI.signIn({
          email,
          password
        })

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        this.$store.commit('authorized', {
          token: data.token,
          user: data.user
        })
      } catch (error) {
        Toast.fire({
          type: 'warning',
          title: '帳號密碼錯誤'
        })
      }
    }
  }
}
</script>
