<template>
  <div v-show="!isLoading">
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="user.image" width="300px" height="300px">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{user.name}}</h5>
            <p class="card-text">{{user.email}}</p>
            <ul class="list-unstyled">
              <li>
                <strong>{{user.commentsLength}}</strong> 已評論餐廳
              </li>
              <li>
                <strong>{{user.favoritedRestaurantsLength}}</strong> 收藏的餐廳
              </li>
              <li>
                <strong>{{user.followingsLength}}</strong> followings (追蹤者)
              </li>
              <li>
                <strong>{{user.followersLength}}</strong> followers (追隨者)
              </li>
            </ul>
            <template v-if="currentUser.id === user.id">
              <router-link
                :to="{name: 'user-edit', params: { id: user.id }}"
                class="btn btn-primary"
              >Edit</router-link>
            </template>
            <template v-else>
              <button
                v-if="isFollowed"
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
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '@/api/users'
import { Toast } from '@/utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'UserShow',
  data() {
    return {
      user: {
        id: 0,
        image: '',
        name: '',
        email: '',
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
        followingsLength: 0,
        followersLength: 0
      },
      isFollowed: false,
      isLoading: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  mounted() {
    const { id: userId } = this.$route.params
    this.fetchUser(userId)
  },
  methods: {
    async fetchUser(userId) {
      try {
        const {
          data: { profile, isFollowed },
          statusText
        } = await usersAPI.getUser({
          userId
        })

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.user = {
          id: profile.id,
          image: profile.image,
          name: profile.name,
          email: profile.email,
          commentsLength: profile.Comments.length,
          favoritedRestaurantsLength: profile.FavoritedRestaurants.length,
          followingsLength: profile.Followings.length,
          followersLength: profile.Followers.length
        }
        this.isFollowed = isFollowed
        this.isLoading = false
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          type: 'error',
          title: '無法取得使用者資料，請稍後再試'
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

        this.isFollowed = true
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

        this.isFollowed = false
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
