<template>
  <div v-show="!isLoading">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Category</th>
          <th scope="col">Name</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="restaurant in restaurants" :key="restaurant.id">
          <th scope="row">{{restaurant.id}}</th>
          <td>{{restaurant.Category && restaurant.Category.name}}</td>
          <td>{{restaurant.name}}</td>
          <td>
            <router-link
              :to="{name: 'admin-restaurant-show', params: {id: restaurant.id}}"
              class="btn btn-link"
            >Show</router-link>

            <router-link
              :to="{name: 'admin-restaurant-edit', params: {id: restaurant.id}}"
              class="btn btn-link"
            >Edit</router-link>

            <button
              type="button"
              class="btn btn-link"
              @click.stop.prevent="handleDelete(restaurant.id)"
            >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import adminAPI from '@/api/admin'
import { Toast } from '@/utils/helpers'

export default {
  name: 'AdminRestaurantsTable',
  data() {
    return {
      restaurants: [],
      isLoading: true
    }
  },
  mounted() {
    this.fetchRestaurants()
  },
  methods: {
    handleDelete(restaurantId) {
      this.removeRestaurant({ restaurantId })
    },
    async fetchRestaurants() {
      try {
        const {
          data: { restaurants },
          statusText
        } = await adminAPI.restaurants.get()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.restaurants = restaurants
        this.isLoading = false
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取得餐廳，請稍後再試'
        })
      }
    },
    async removeRestaurant({ restaurantId }) {
      try {
        const { data, statusText } = await adminAPI.restaurants.remove({
          restaurantId
        })

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        this.restaurants = this.restaurants.filter(
          restaurant => restaurant.id !== restaurantId
        )

        Toast.fire({
          type: 'success',
          title: '刪除餐廳成功'
        })
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取得刪除餐廳，請稍後再試'
        })
      }
    }
  }
}
</script>
