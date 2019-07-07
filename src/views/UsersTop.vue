<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div
        v-for="user in users"
        :key="user.id"
        class="col-3"
      >
        <router-link :to="{name: 'user', params: {id: user.id}}">
          <img
            :src="user.image | emptyImage"
            width="140px"
            height="140px"
          >
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click.stop.prevent="deleteFollowing(user.id)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFollowing(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  components: {
    NavTabs
  },
  filters: {
    emptyImage (src) {
      if (!src) {
        return 'http://via.placeholder.com/300x300?text=No+Image'
      }
      return src
    }
  },
  data () {
    return {
      users: []
    }
  },
  created () {
    this.fetchTopUsers()
  },
  methods: {
    async fetchTopUsers () {
      try {
        const { data, statusText } = await usersAPI.getTopUsers()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.users = data.users
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取得美食達人，請稍後再試'
        })
      }
    },
    async addFollowing (userId) {
      try {
        const { data, statusText } = await usersAPI.addFollowing({
          userId
        })

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          }

          return {
            ...user,
            isFollowed: true
          }
        })
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法加入追蹤，請稍後再試'
        })
      }
    },
    async deleteFollowing (userId) {
      try {
        const { data, statusText } = await usersAPI.deleteFollowing({
          userId
        })

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          }

          return {
            ...user,
            isFollowed: false
          }
        })
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
      }
    }
  }
}
</script>
