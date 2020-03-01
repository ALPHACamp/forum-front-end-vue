<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="image"
          :src="image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        >

        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        :disabled="isProcessing"
      >
        {{ isProcessing ? "資料更新中..." : "Submit" }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// STEP 1: import usersAPI and Toast
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  data () {
    return {
      id: 0,
      image: '',
      name: '',
      email: '',
      // STEP 6: 新增並使用 isProcessing 屬性
      isProcessing: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    currentUser (user) {
      this.setUser()
    }
  },
  created () {
    const { id } = this.$route.params
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: 'not-found' })
      return
    }

    this.setUser()
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: 'not-found' })
      return
    }

    this.setUser()
    next()
  },
  methods: {
    setUser () {
      this.id = this.currentUser.id
      this.image = this.currentUser.image
      this.name = this.currentUser.name
      this.email = this.currentUser.email
    },
    handleFileChange (e) {
      const files = e.target.files
      if (!files.length) return

      const imageURL = window.URL.createObjectURL(files[0])
      this.image = imageURL
    },
    // STEP 2: 改成 async...await 語法
    async handleSubmit (e) {
      // STEP 5: 避免漏填
      if (!this.name) {
        Toast.fire({
          icon: 'warning',
          title: '您尚未填寫姓名'
        })
        return
      }

      const form = e.target
      const formData = new FormData(form)

      try {
        this.isProcessing = true

        // STEP 3: 呼叫 API 更新使用者資料
        const { data, statusText } = await usersAPI.update({
          userId: this.id,
          formData
        })

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        // STEP 4: 更新完成後轉址到使用者詳細頁
        this.$router.push({ name: 'user', params: { id: this.id } })
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新使用者資料，請稍後再試'
        })
      }
    }
  }
}
</script>
