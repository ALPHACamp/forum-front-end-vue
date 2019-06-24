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
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import uuid from 'uuid/v4'

export default {
  name: 'CreateComment',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    handleSubmit () {
      // 透過 API 向伺服器新增 Comment 成功後...
      this.$emit('after-create-comment', {
        commentId: uuid(), // 尚未串接 API 暫時使用隨機的 id
        restaurantId: this.restaurantId,
        text: this.text
      })

      this.text = '' // 將表單內的資料清空
    }
  }
}
</script>
