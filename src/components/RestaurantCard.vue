<template>
  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      >
      <div class="card-body">
        <p class="card-text">
          <router-link
            :to="{ path: 'restaurants', params: { id: restaurant.id }}"
          >{{ restaurant.name }}</router-link>
        </p>
        <span class="badge badge-secondary">{{restaurant.Category.name}}</span>
        <p class="card-text">{{restaurant.description}}</p>
        <p class="card-text">{{restaurant.description}}</p>

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
          class="btn btn-primary mr-2"
        >加到最愛</button>

        <button
          v-if="restaurant.isLiked"
          @click.stop.prevent="removeLike(restaurant.id)"
          type="button"
          class="btn btn-danger mr-2"
        >Unlike</button>
        <button
          v-else
          @click.stop.prevent="addLike(restaurant.id)"
          type="button"
          class="btn btn-primary mr-2"
        >Like</button>
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from '@/api/users'
export default {
  name: 'RestaurantCard',
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant
    }
  },
  methods: {
    async addFavorite(restaurantId) {
      try {
        const data = await userAPI.addFavorite({ restaurantId })
        if (status !== 'success') {
          // TODO: error handling
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true
        }
      } catch (error) {
        // TODO: error notification
        console.log('error', error)
      }
    },
    async removeFavorite(restaurantId) {
      try {
        const { status, message } = await userAPI.removeFavorite({
          restaurantId
        })
        if (status !== 'success') {
          // TODO: error handling
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false
        }
      } catch (error) {
        // TODO: error notification
        console.log('error', error)
      }
    },
    async addLike(restaurantId) {
      try {
        const data = await userAPI.addLike({ restaurantId })
        if (status !== 'success') {
          // TODO: error handling
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: true
        }
      } catch (error) {
        // TODO: error notification
        console.log('error', error)
      }
    },
    async removeLike(restaurantId) {
      try {
        const { status, message } = await userAPI.removeLike({
          restaurantId
        })
        if (status !== 'success') {
          // TODO: error handling
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        }
      } catch (error) {
        // TODO: error notification
        console.log('error', error)
      }
    }
  }
}
</script>
