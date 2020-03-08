<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image | emptyImage"
        alt="Card image cap"
        width="286px"
        height="180px"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge badge-secondary">{{
          restaurant.Category ? restaurant.Category.name : '未分類'
        }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          v-if="restaurant.isFavorited"
          :disabled="isProcessing"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
        >
          移除最愛
        </button>
        <button
          v-else
          type="button"
          :disabled="isProcessing"
          class="btn btn-primary btn-border favorite mr-2"
          @click.stop.prevent="addFavorite(restaurant.id)"
        >
          加到最愛
        </button>
        <button
          v-if="restaurant.isLiked"
          type="button"
          :disabled="isProcessing"
          class="btn btn-danger like mr-2"
          @click.stop.prevent="deleteLike(restaurant.id)"
        >
          Unlike
        </button>
        <button
          v-else
          type="button"
          :disabled="isProcessing"
          class="btn btn-primary like mr-2"
          @click.stop.prevent="addLike(restaurant.id)"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'RestaurantCard',
  mixins: [emptyImageFilter],
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      restaurant: this.initialRestaurant,
      isProcessing: false
    }
  },
  methods: {
    async addFavorite (restaurantId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.addFavorite({ restaurantId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: true
        }
        this.isProcessing = false
      } catch (error) {
        console.error(error.message)
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite (restaurantId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.deleteFavorite({ restaurantId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: false
        }
        this.isProcessing = false
      } catch (error) {
        console.error(error.message)
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳移除最愛，請稍後再試'
        })
      }
    },
    async addLike (restaurantId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.addLike({ restaurantId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: true
        }
        this.isProcessing = false
      } catch (error) {
        console.error(error.message)
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法對餐廳按讚，請稍後再試'
        })
      }
    },
    async deleteLike (restaurantId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.deleteLike({ restaurantId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        }
        this.isProcessing = false
      } catch (error) {
        console.error(error.message)
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法對取消讚，請稍後再試'
        })
      }
    }
  }
}
</script>

<style scoped>
.badge.badge-secondary {
  padding: 0;
  margin: 8px 0;
  color: #bd2333;
  background-color: transparent;
}

.btn,
.btn-border.btn:hover {
  margin: 7px 14px 7px 0;
}

.card {
  margin-bottom: 2rem !important;
}

.card-img-top {
  background-color: #efefef;
}

.card-body {
  padding: 17.5px;
}

.card-footer {
  padding: 9px 17.5px;
  border-color: rgb(232, 232, 232);
  background: white;
}
</style>
