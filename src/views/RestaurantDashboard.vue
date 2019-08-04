<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />

    <template v-else>
      <div>
        <h1>{{ restaurant.name }}</h1>
        <p>[{{ restaurant.categoryName }}]</p>
      </div>

      <hr>

      <ul>
        <li>有 {{ restaurant.commentsLength }} 筆評論</li>
        <li>有 {{ restaurant.favoritedUsersLength }} 人收藏這家餐廳</li>
      </ul>

      <a
        href="#"
        @click="$router.back()"
      >回上一頁</a>
    </template>
  </div>
</template>

<script>
import restaurantsAPI from './../apis/restaurants'
import Spinner from './../components/Spinner'
import { Toast } from './../utils/helpers'

export default {
  components: {
    Spinner
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        favoritedUsersLength: 0,
        likedUsersLength: 0
      },
      isLoading: true
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  beforeRouteUpdate (to, from, next) {
    const { id: restaurantId } = to.params
    this.fetchRestaurant(restaurantId)
    next()
  },
  methods: {
    async fetchRestaurant (restaurantId) {
      try {
        this.isLoading = true
        const {
          data: { restaurant },
          statusText
        } = await restaurantsAPI.getRestaurant({
          restaurantId
        })

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.restaurant = {
          ...this.restaurant,
          id: restaurant.id,
          name: restaurant.name,
          categoryName: restaurant.Category.name,
          commentsLength: restaurant.Comments.length,
          favoritedUsersLength: restaurant.FavoritedUsers.length,
          likedUsersLength: restaurant.LikedUsers.length
        }
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          type: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>
