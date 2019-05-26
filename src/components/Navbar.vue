<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <a class="navbar-brand" href="/">餐廳評論網</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse collapse" id="navbarSupportedContent">
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link v-if="user.isAdmin" to="/admin" class="text-white mr-3">管理員後台</router-link>

        <!-- is user is login -->
        <template v-if="token">
          <router-link
            :to="{name: 'users-show', params: {id: user.id}}"
            class="text-white mr-3"
          >{{user.name || '個人資料' }}</router-link>
          <button
            @click="logout"
            type="button"
            class="btn btn-sm btn-outline-success my-2 my-sm-0"
          >登出</button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapState(['user', 'token'])
  },
  methods: {
    logout() {
      this.$store.commit('revokeAuthorized')
    }
  }
}
</script>
