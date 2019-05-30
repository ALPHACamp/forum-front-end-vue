<template>
  <div>
    <NavTabs/>
    <h1 class="mt-5">美食達人</h1>
    <hr>
    <div class="row text-center">
      <div v-for="user in users" :key="user.id" class="col-3">
        <router-link :to="{name: 'user-show', params: {id: user.id}}">
          <img :src="user.image | emptyImage" width="140px" height="140px">
        </router-link>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            @click.stop.prevent="removeFollowing(user.id)"
            type="button"
            class="btn btn-danger"
          >取消追蹤</button>
          <button
            v-else
            @click.stop.prevent="addFollowing(user.id)"
            type="button"
            class="btn btn-primary"
          >追蹤</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '@/components/NavTabs.vue'
import usersAPI from '@/api/users'
import { Toast } from '@/utils/helpers'

export default {
  name: 'UsersTop',
  components: {
    NavTabs
  },
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.fetchTopUsers()
  },
  methods: {
    async fetchTopUsers() {
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
    async addFollowing(userId) {
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
    async removeFollowing(userId) {
      try {
        const { data, statusText } = await usersAPI.removeFollowing({
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
  },
  filters: {
    emptyImage(src) {
      if (!src) {
        return 'http://via.placeholder.com/300x300?text=No+Image'
      }
      return src
    }
  }
}
</script>
