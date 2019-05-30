<template>
  <div class="card">
    <div class="card-header">最新評論</div>
    <div class="card-body">
      <div v-for="comment in comments" :key="comment.id">
        <h4>
          <router-link
            :to="{ name: 'restaurant-show', params: {id: comment.Restaurant.id}}"
          >{{ comment.Restaurant.name }}</router-link>
        </h4>
        <p>{{ comment.text }}</p>by
        <router-link
          :to="{ name: 'user-show', params: {id: comment.User.id }}"
        >{{ comment.User.name }}</router-link>
        at
        {{ comment.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import restaurantAPI from '@/api/restaurants'
import { fromNowFilter } from '@/utils/mixin'

export default {
  name: 'NewestComments',
  mixins: [fromNowFilter],
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>
