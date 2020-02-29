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
        <router-link :to="{ name: 'user', params: { id: user.id } }">
          <img
            :src="user.image | emptyImage"
            width="140px"
            height="140px"
          >
        </router-link>
        <h2>{{ user.name }}</h2>
        <span
          class="badge badge-secondary"
        >追蹤人數：{{ user.followerCount }}</span>
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
import { emptyImageFilter } from './../utils/mixins'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'UsersTop',
  components: {
    NavTabs
  },
  mixins: [emptyImageFilter],
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
        const { data } = await usersAPI.getTopUsers()

        this.users = data.users.map(user => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed
        }))
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得美食達人，請稍後再試'
        })
      }
    },
    addFollowing (userId) {
      this.users = this.users.map(user => {
        if (user.id !== userId) {
          return user
        } else {
          return {
            ...user,
            followerCount: user.followerCount + 1,
            isFollowed: true
          }
        }
      })
    },
    deleteFollowing (userId) {
      this.users = this.users.map(user => {
        if (user.id !== userId) {
          return user
        } else {
          return {
            ...user,
            followerCount: user.followerCount - 1,
            isFollowed: false
          }
        }
      })
    }
  }
}
</script>
