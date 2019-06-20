<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div class="card-body">
      <div
        v-for="comment in comments"
        :key="comment.id"
      >
        <h4>
          <!-- TODO: change into router-link -->
          <a href="#"> {{ comment.Restaurant.name }} </a>
        </h4>
        <p>{{ comment.text }}</p>by
        <!-- TODO: change into router-link -->
        <a href="#"> {{ comment.User.name }} </a>
        at
        {{ comment.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
// 先將 moment 載入進來
import moment from 'moment'

export default {
  name: 'NewestComments',
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
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>
