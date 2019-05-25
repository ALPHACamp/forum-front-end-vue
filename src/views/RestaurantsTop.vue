<template>
  <div>
    <NavTabs/>
    <h1 class="mt-5">人氣餐廳</h1>
    <hr>

    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link :to="{name: 'restaurants-show', params: {id: restaurant.id }}">
            <img class="card-img" :src="restaurant.image">
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{restaurant.name}}</h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoritedUsers.length}}</span>
            <p class="card-text">{{restaurant.description}}</p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{name: 'restaurants-show', params: {id: restaurant.id }}"
            >Show</router-link>

            <button
              v-if="restaurant.isFavorited"
              @click.stop.prevent="removeFavorite(restaurant.id)"
              type="button"
              class="btn btn-danger mr-2"
            >移除最愛</button>
            <button
              v-else
              @click.stop.prevent="addFavorite(restaurant.id)"
              type="button"
              class="btn btn-primary"
            >加到最愛</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '@/components/NavTabs.vue'
import restaurantsAPI from '@/api/restaurants'
import userAPI from '@/api/users'
import { Toast } from '@/utils/helpers'
export default {
  name: 'RestaurantsTop',
  components: {
    NavTabs
  },
  data() {
    return {
      restaurants: []
    }
  },
  mounted() {
    this.fetchTopRestaurants()
  },
  methods: {
    async fetchTopRestaurants() {
      try {
        const { data, statusText } = await restaurantsAPI.getTopRestaurants()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.restaurants = data.restaurants
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取得熱門餐廳，請稍後再試'
        })
      }
    },
    async addFavorite(restaurantId) {
      try {
        const { data, statusText } = await userAPI.addFavorite({ restaurantId })

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        this.restaurants = this.restaurants.map(restaurant => {
          if (restaurant.id !== restaurantId) {
            return restaurant
          }

          return {
            ...restaurant,
            isFavorited: true
          }
        })
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法將餐廳加入最愛，請稍後再試'
        })
      }
    },
    async removeFavorite(restaurantId) {
      try {
        const { data, statusText } = await userAPI.removeFavorite({
          restaurantId
        })

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        this.restaurants = this.restaurants.map(restaurant => {
          if (restaurant.id !== restaurantId) {
            return restaurant
          }

          return {
            ...restaurant,
            isFavorited: false
          }
        })
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法將餐廳從最愛移除，請稍後再試'
        })
      }
    }
  }
}
</script>
