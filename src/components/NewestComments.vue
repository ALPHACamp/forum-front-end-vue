<template>
  <div class="card">
    <div class="card-header">最新評論</div>
    <div class="card-body">
      <div v-for="comment in comments" :key="comment.id">
        <h4>
          <router-link
            :to="{ name: 'restaurants-show', params: {id: comment.Restaurant.id}}"
          >{{ comment.Restaurant.name }}</router-link>
        </h4>
        <p>{{ comment.text }}</p>by
        <router-link
          :to="{ name: 'users-show', params: {id: comment.User.id }}"
        >{{ comment.User.name }}</router-link>
        at
        {{ comment.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import restaurantAPI from '@/api/restaurants'

export default {
  name: 'NewestComments',
  props: {
    comments: {
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
