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
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
// STEP 1: 匯入 mapState 方法
import { mapState } from 'vuex'

export default {
  data () {
    return {
      id: 0,
      image: '',
      name: '',
      email: ''
    }
  },
  // STEP 2: 將 currentUser 的資料從 Vuex 中取出
  computed: {
    ...mapState(['currentUser'])
  },
  // STEP 4: 透過 watch 監控 currentUser 有無變化
  watch: {
    currentUser (user) {
      this.setUser()
    }
  },
  created () {
    // STEP 5: 若使用者嘗試直接從路由進入其他使用者的 edit 頁
    const { id } = this.$route.params
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: 'not-found' })
      return
    }

    this.setUser()
  },
  // STEP 6: 路由改變時重新抓取資料
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
    // STEP 3: 將 currentUser 的資料帶入該組件的 Vue 資料內
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
    handleSubmit (e) {
      const form = e.target
      const formData = new FormData(form)
      // TODO: 將資料透過 API 傳送到後端伺服器...
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>
