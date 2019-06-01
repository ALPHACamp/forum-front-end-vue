<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        name="name"
        placeholder="Enter name"
        v-model="restaurant.name"
        required
      >
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        v-model="restaurant.categoryId"
        id="categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option
          v-for="category in categories"
          :value="category.id"
          :key="category.id"
        >{{ category.name }}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        type="text"
        class="form-control"
        id="tel"
        name="tel"
        placeholder="Enter telephone number"
        v-model="restaurant.tel"
      >
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        type="text"
        class="form-control"
        id="address"
        placeholder="Enter address"
        v-model="restaurant.address"
        name="address"
      >
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        type="time"
        class="form-control"
        id="opening-hours"
        v-model="restaurant.openingHours"
        name="opening_hours"
      >
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        class="form-control"
        id="description"
        v-model="restaurant.description"
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
        type="file"
        id="image"
        name="image"
        @change="handleFileChange"
        accept="image/*"
        class="form-control-file"
      >
    </div>

    <button
      type="submit"
      class="btn btn-primary"
      :disabled="isProcessing"
    >{{ isProcessing ? "資料更新中..." : "Submit" }}</button>
  </form>
</template>

<script>
import adminAPI from '@/api/admin'
import { Toast } from '@/utils/helpers'

export default {
  name: 'AdminRestaurantForm',
  props: {
    initialRestaurant: {
      type: Object,
      default: () => ({
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
    initialIsProcessing: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      restaurant: {
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: '',
        file: ''
      },
      categories: []
    }
  },
  computed: {
    isProcessing() {
      return this.initialIsProcessing
    }
  },
  mounted() {
    this.restaurant = {
      ...this.restaurant,
      ...this.initialRestaurant
    }

    this.fetchCategories()
  },
  methods: {
    handleSubmit(e) {
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

      const formData = new FormData(e.target)
      this.$emit('after-submit', formData)
    },
    handleFileChange(e) {
      const files = e.target.files
      if (!files.length) return
      this.createPreviewImage(files[0])
    },
    createPreviewImage(file) {
      this.restaurant.file = file
      const imageURL = window.URL.createObjectURL(file)
      this.restaurant.image = imageURL
    },
    async fetchCategories() {
      try {
        const {
          data: { categories },
          statusText
        } = await adminAPI.categories.get()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        this.categories = categories
        this.isLoading = false
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取得餐廳類別，請稍後再試'
        })
      }
    }
  }
}
</script>
