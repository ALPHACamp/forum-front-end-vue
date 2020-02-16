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
          <a href="#">
            {{ comment.Restaurant.name }}
          </a>
        </h4>
        <p>{{ comment.text }}</p>
        by
        <a href="#">
          {{ comment.User.name }}
        </a>
        at {{ comment.createdAt | fromNow }}
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
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>
