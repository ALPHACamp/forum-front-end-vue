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
const dummyData = {
  profile: {
    id: 1,
    name: 'root',
    email: 'root@example.com',
    image: 'https://i.imgur.com/JtQJRMZ.png'
  }
}

export default {
  name: 'UserEdit',
  data () {
    return {
      id: 0,
      image: '',
      name: '',
      email: ''
    }
  },
  created () {
    const { id } = this.$route.params

    // TODO: 判斷若使用者試圖從路由去修改其他使用者的資料，則轉址

    this.fetchUser(id)
  },
  methods: {
    fetchUser (userId) {
      const { profile } = dummyData
      this.id = profile.id
      this.image = profile.image
      this.name = profile.name
      this.email = profile.email
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
