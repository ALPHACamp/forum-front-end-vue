<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div class="card-body">
      <div
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <h4>
          <!-- TODO: change into router-link -->
          <a href="#">{{ restaurant.name }}</a>
          &nbsp;
          <small>{{ restaurant.Category.name }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>
        {{ restaurant.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
// 先將 moment 載入進來
import moment from 'moment'

export default {
  name: 'NewestRestaurants',
  filters: {
    fromNow (datetime) {
      if (!datetime) {
        return '-'
      }
      // 使用 moment 提供的 fromNow 方法
      return moment(datetime).fromNow()
    }
  },
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  }
}
</script>
