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
          <a href="#">{{ restaurant.name }}</a>
          <small>&nbsp;{{
            restaurant.Category ? restaurant.Category.name : '未分類'
          }}</small>
        </h4>
        <p>
          {{ restaurant.description }}
        </p>
        {{ restaurant.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  filters: {
    fromNow (datetime) {
      if (!datetime) {
        return '-'
      }

      // 使用 moment 回傳 fromNow 的時間
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

<style scoped>
small {
  font-size: 10px;
}
</style>
