<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="text">留下評論：</label>
      <textarea
        v-model="text"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="text-right">
      <button
        type="submit"
        class="btn btn-primary mr-0"
        :disabled="isProcessing"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import commentsAPI from './../apis/comments'
import { Toast } from './../utils/helpers'

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      text: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit () {
      try {
        if (!this.text) {
          Toast.fire({
            type: 'warning',
            title: '您尚未填寫任何評論'
          })
          return
        }

        this.isProcessing = true

        const { data, statusText } = await commentsAPI.create({
          restaurantId: this.restaurantId,
          text: this.text
        })

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        this.$emit('after-create-comment', {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text
        })

        this.isProcessing = false
        this.text = ''
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          type: 'error',
          title: '無法新增評論，請稍後再試'
        })
      }
    }
  }
}
</script>
