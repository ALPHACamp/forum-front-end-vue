<template>
  <div>
    <h3 class="my-4">所有評論：</h3>

    <div v-for="comment in initialComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <!-- TODO: -->
        <!-- {{#if ../user.isAdmin}}
      <form action="/comments/{{this.id}}?_method=DELETE" method="POST" style="float: right;">
        <button type="submit" class="btn btn-danger">Delete</button>
      </form>
        {{/if}}-->
        <h4>
          <router-link
            :to="{ name: 'users-show', params: { id: comment.User.id } }"
          >{{ comment.User.name }}</router-link>
        </h4>
        <p>{{comment.text}}</p>
        <footer class="blockquote-footer">{{comment.createdAt | fromNow }}</footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
import usersAPI from '@/api/users'
import { Toast } from '@/utils/helpers'
import { fromNowFilter } from '@/utils/mixin'

export default {
  name: 'RestaurantComments',
  mixins: [fromNowFilter],
  props: {
    initialComments: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      comments: this.initialComments
    }
  }
}
</script>
