<template>
  <div class="card">
    <div class="card-header">
      <strong>{{favoritedRestaurants.length}}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="favoritedRestaurant in favoritedRestaurants"
        :key="favoritedRestaurant.id"
        :to="{name: 'restaurant-show', params: { id: favoritedRestaurant.id }}"
      >
        <img :src="favoritedRestaurant.image | emptyImage" width="60" height="60" class="mr-1">
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '@/utils/mixin'

export default {
  name: 'UserShowFavoritedRestaurantsCard',
  mixins: [emptyImageFilter],
  props: {
    favoritedRestaurants: {
      type: Array,
      default: () => []
    }
  }
}
</script>
