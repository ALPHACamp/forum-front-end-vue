<template>
  <form>
    <div class="form-group">
      <label for="text">留下評論：</label>
      <textarea class="form-control" v-model="text" rows="3"></textarea>
    </div>
    <input type="hidden" name="restaurantId" :value="restaurantId">
    <button type="button" class="btn btn-primary" @click="submit">Submit</button>
  </form>
</template>

<script>
import commentsAPI from '@/api/comments'
import { Toast } from '@/utils/helpers'

export default {
  name: 'CreateComment',
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    submit(e) {
      e.preventDefault()
      e.stopPropagation()
      if (!this.text) {
        Toast.fire({
          type: 'warning',
          title: '您尚未填寫任何評論'
        })
        return
      }

      this.createComment()
    },
    async createComment() {
      try {
        const { data, statusText } = await commentsAPI.create({
          restaurantId: this.restaurantId,
          text: this.text
        })

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        // TODO: 通知 restaurants show 中的 comments 要更新

      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法新增評論，請稍後再試'
        })
      }
    }
  }
}
</script>
