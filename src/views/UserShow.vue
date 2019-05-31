<template>
  <div v-show="!isLoading">
    <user-show-profile-card
      :user="user"
      :isCurrentUser="currentUser.id === user.id"
      :isFollowedInitial="isFollowed"
      @after-update-followed="afterUpdateFollowed"
    />

    <div class="row">
      <div class="col-md-4">
        <user-show-followings-card :followings="followings"/>
        <user-show-followers-card :followers="followers"/>
      </div>
      <div class="col-md-8">
        <user-show-comments-card :comments="comments"/>
        <user-show-favorited-restaurants-card :favorited-restaurants="favoritedRestaurants"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import usersAPI from '@/api/users'
import { Toast } from '@/utils/helpers'
import UserShowProfileCard from '@/components/UserShowProfileCard'
import UserShowFollowingsCard from '@/components/UserShowFollowingsCard'
import UserShowFollowersCard from '@/components/UserShowFollowersCard'
import UserShowCommentsCard from '@/components/UserShowCommentsCard'
import UserShowFavoritedRestaurantsCard from '@/components/UserShowFavoritedRestaurantsCard'

export default {
  name: 'UserShow',
  components: {
    UserShowProfileCard,
    UserShowFollowingsCard,
    UserShowFollowersCard,
    UserShowCommentsCard,
    UserShowFavoritedRestaurantsCard
  },
  data() {
    return {
      user: {
        id: 0,
        image: '',
        name: '',
        email: '',
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0
      },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: [],
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
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id: userId } = to.params
    this.fetchUser(userId)
    next()
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
          followingsLength: profile.Followings.length,
          followersLength: profile.Followers.length,
          commentsLength: profile.Comments.length,
          favoritedRestaurantsLength: profile.FavoritedRestaurants.length
        }
        this.isFollowed = isFollowed

        this.followings = profile.Followings
        this.followers = profile.Followers
        this.favoritedRestaurants = profile.FavoritedRestaurants
        this.comments = profile.Comments

        this.isLoading = false
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          type: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    },
    afterUpdateFollowed(payload) {
      const { isFollowed } = payload
      this.isFollowed = isFollowed
    }
  }
}
</script>
