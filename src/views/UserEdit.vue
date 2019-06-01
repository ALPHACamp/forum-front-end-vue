<template>
  <form v-show="!isLoading">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" class="form-control" placeholder="Enter Name">
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img v-if="image" :src="image" class="d-block img-thumbnail mb-3" width="200" height="200">
      <input
        type="file"
        id="image"
        @change="handleFileChange"
        accept="image/*"
        class="form-control-file"
      >
    </div>

    <button
      type="button"
      @click.stop.prevent="handleSubmit"
      class="btn btn-primary"
      :disabled="isProcessing"
    >{{ isProcessing ? "資料更新中..." : "Submit" }}</button>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import usersAPI from '@/api/users'
import { Toast } from '@/utils/helpers'

export default {
  name: 'UserEdit',
  data() {
    return {
      id: 0,
      image: '',
      name: '',
      email: '',
      file: '',
      isLoading: true,
      isProcessing: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  mounted() {
    const { id: userId } = this.$route.params

    // 若使用者嘗試直接從路由進入其他使用者的 edit 頁
    if (userId.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: 'not-found' })
      return
    }

    this.fetchUser(userId)
  },
  methods: {
    handleFileChange(e) {
      const files = e.target.files
      if (!files.length) return
      this.createPreviewImage(files[0])
    },
    createPreviewImage(file) {
      this.file = file
      const imageURL = window.URL.createObjectURL(file)
      this.image = imageURL
    },
    handleSubmit() {
      let form = new FormData()
      form.append('image', this.file)
      form.append('name', this.name)

      this.updateUser(form)
    },
    async fetchUser(userId) {
      try {
        const {
          data: { profile },
          statusText
        } = await usersAPI.get({
          userId
        })

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.id = profile.id
        this.image = profile.image
        this.name = profile.name
        this.email = profile.email
        this.isLoading = false
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    },
    async updateUser(form) {
      try {
        this.isProcessing = true
        const { data, statusText } = await usersAPI.update({
          userId: this.id,
          form
        })

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        this.isProcessing = false
        this.$router.push({ name: 'user-show', params: { id: this.id } })
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法更新使用者資料，請稍後再試'
        })
      }
    }
  }
}
</script>
