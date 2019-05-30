<template>
  <div>
    <h3 class="my-4">所有評論：</h3>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          @click.stop.prevent="removeComment(comment.id)"
          type="button"
          class="btn btn-danger float-right"
        >Delete</button>
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
import { mapState } from 'vuex'
import { Toast } from '@/utils/helpers'
import { fromNowFilter } from '@/utils/mixin'
import commentsAPI from '@/api/comments'

export default {
  name: 'RestaurantComments',
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async removeComment(commentId) {
      try {
        const { data, statusText } = await commentsAPI.remove({
          commentId
        })
        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        this.$emit('after-remove-comment', {
          commentId
        })
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法移除評論，請稍後再試'
        })
      }
    }
  }
}
</script>
