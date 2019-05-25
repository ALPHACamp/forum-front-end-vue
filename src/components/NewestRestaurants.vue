<template>
  <div class="card">
    <div class="card-header">最新餐廳</div>
    <div class="card-body">
      <div v-for="restaurant in restaurants" :key="restaurant.id">
        <h4>
          <router-link
            :to="{ name: 'restaurants-show', params: {id: restaurant.id}}"
          >{{ restaurant.name }}</router-link>
          <small>&nbsp;{{ restaurant.Category.name }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>
        {{ restaurant.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import restaurantAPI from '@/api/restaurants'

export default {
  name: 'NewestRestaurants',
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  },
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return '-'
      }
      return moment(datetime).fromNow()
    }
  }
}
</script>
