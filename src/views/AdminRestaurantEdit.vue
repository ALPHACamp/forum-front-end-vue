<template>
  <div v-if="!isLoading">
    <admin-restaurant-form
      :initial-restaurant="restaurant"
      :initial-is-processing="isProcessing"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from '@/components/AdminRestaurantForm'
import adminAPI from '@/api/admin'
import { Toast } from '@/utils/helpers'

export default {
  name: 'AdminRestaurantEdit',
  components: {
    AdminRestaurantForm
  },
  data() {
    return {
      currentRestaurantId: 0,
      restaurant: {
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      isLoading: true,
      isProcessing: false
    }
  },
  mounted() {
    const { id: restaurantId } = this.$route.params
    this.currentRestaurantId = restaurantId
    this.fetchRestaurant()
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id: restaurantId } = to.params
    this.currentRestaurantId = restaurantId
    this.fetchRestaurant()
    next()
  },
  methods: {
    handleAfterSubmit(formData) {
      this.updateRestaurant(formData)
    },
    async fetchRestaurant() {
      try {
        const {
          data: { restaurant },
          statusText
        } = await adminAPI.restaurants.getDetail({
          restaurantId: this.currentRestaurantId
        })

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.restaurant = {
          ...this.restaurant,
          name: restaurant.name,
          categoryId: restaurant.CategoryId,
          tel: restaurant.tel,
          address: restaurant.address,
          description: restaurant.description,
          image: restaurant.image,
          openingHours: restaurant.opening_hours
        }
        this.isLoading = false
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    async updateRestaurant(formData) {
      try {
        this.isProcessing = true
        const { data, statusText } = await adminAPI.restaurants.update({
          restaurantId: this.currentRestaurantId,
          formData
        })

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        this.isProcessing = false
        this.$router.push({ name: 'admin-restaurants' })
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          type: 'error',
          title: '無法建立餐廳，請稍後再試'
        })
      }
    }
  }
}
</script>
