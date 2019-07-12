<template>
  <div class="container py-5">
    <!-- UserProfileCard -->
    <UserProfileCard
      :user="user"
      :is-current-user="currentUser.id === user.id"
      :initial-is-followed="isFollowed"
    />

    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard -->
        <UserFollowingsCard :followings="followings" />

        <!-- UserFollowersCard -->
        <UserFollowersCard :followers="followers" />
      </div>
      <div class="col-md-8">
        <!-- UserCommentsCard -->
        <UserCommentsCard :comments="comments" />

        <!-- UserFavoritedRestaurantsCard -->
        <UserFavoritedRestaurantsCard :favorited-restaurants="favoritedRestaurants" />
      </div>
    </div>
  </div>
</template>

<script>
// STEP 1: 匯入 usersAPI 和 Toast
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import UserProfileCard from './../components/UserProfileCard'
import UserFollowingsCard from './../components/UserFollowingsCard'
import UserFollowersCard from './../components/UserFollowersCard'
import UserCommentsCard from './../components/UserCommentsCard'
import UserFavoritedRestaurantsCard from './../components/UserFavoritedRestaurantsCard'

// STEP 8: 移除 dummyData

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },
  data () {
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
      currentUser: dummyUser.currentUser
    }
  },
  created () {
    // STEP 7 從路由取得使用者 id，並呼叫方法
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  // STEP 9: 在 beforeRouteUpdate 時要再重新取得使用者資料
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchUser(id)
    next()
  },
  methods: {
    // STEP 2：改成 async...await 語法
    async fetchUser (userId) {
      try {
        // STEP 3: 呼叫 usersAPI
        const { data, statusText } = await usersAPI.get({
          userId
        })

        const { profile, isFollowed } = data

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        // STEP 4: 將取得的資料帶入 Vue
        this.user = {
          ...this.user,
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
        // STEP 5: 處理 comment.Restaurant 可能有空值的情況
        this.comments = profile.Comments.filter(comment => comment.Restaurant)
      } catch (error) {
        // STEP 6: 錯誤處理
        Toast.fire({
          type: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    }
  }
}
</script>
