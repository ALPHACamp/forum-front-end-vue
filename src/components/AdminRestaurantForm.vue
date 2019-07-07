<template>
  <form
    v-show="!isLoading"
    @submit.stop.prevent="handleSubmit"
  >
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        v-model="restaurant.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      >
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        id="categoryId"
        v-model="restaurant.categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option
          value
          selected
          disabled
        >
          --請選擇--
        </option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        v-model="restaurant.tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      >
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        v-model="restaurant.address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      >
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        v-model="restaurant.openingHours"
        type="time"
        class="form-control"
        name="opening_hours"
      >
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="restaurant.description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
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
      {{ isProcessing ? "處理中..." : "送出" }}
    </button>
  </form>
</template>

<script>
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  props: {
    initialRestaurant: {
      type: Object,
      default: () => ({
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: '',
        file: ''
      })
    },
    isProcessing: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      categories: [],
      isLoading: true
    }
  },
  watch: {
    initialRestaurant (restaurants) {
      this.restaurant = {
        ...this.restaurant,
        ...this.initialRestaurant
      }
    }
  },
  created () {
    this.fetchCategories()
    this.restaurant = {
      ...this.restaurant,
      ...this.initialRestaurant
    }
  },
  methods: {
    async fetchCategories () {
      try {
        const { data, statusText } = await adminAPI.categories.get()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.categories = data.categories
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          type: 'error',
          title: '無法取得餐廳類別，請稍後再試'
        })
      }
    },
    handleFileChange (e) {
      const files = e.target.files
      if (!files.length) return // 如果沒有檔案則離開此函式

      // 否則產生預覽圖...
      const imageURL = window.URL.createObjectURL(files[0])
      this.restaurant.image = imageURL
    },
    handleSubmit (e) {
      if (!this.restaurant.name) {
        Toast.fire({
          type: 'warning',
          title: '請填寫餐廳名稱'
        })
        return
      } else if (!this.restaurant.categoryId) {
        Toast.fire({
          type: 'warning',
          title: '請選擇餐廳類別'
        })
        return
      }

      const form = e.target
      const formData = new FormData(form)
      this.$emit('after-submit', formData)
    }
  }
}
</script>
