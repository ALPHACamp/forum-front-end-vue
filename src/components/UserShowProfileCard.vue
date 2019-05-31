<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.image | emptyImage" width="300px" height="300px">
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
          <template v-if="isCurrentUser">
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
</template>

<script>
import usersAPI from '@/api/users'
import { emptyImageFilter } from '@/utils/mixin'
import { Toast } from '@/utils/helpers'

export default {
  name: 'UserShowProfileCard',
  mixins: [emptyImageFilter],
  props: {
    user: {
      type: Object,
      required: true
    },
    isCurrentUser: {
      type: Boolean,
      required: true
    },
    isFollowedInitial: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    isFollowed() {
      return this.isFollowedInitial
    }
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data, statusText } = await usersAPI.addFollowing({
          userId
        })

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        this.$emit('after-update-followed', {
          isFollowed: true
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

        this.$emit('after-update-followed', {
          isFollowed: false
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
