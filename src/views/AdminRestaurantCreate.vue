<template>
  <div>
    <admin-restaurant-form :initial-is-processing="isProcessing" @after-submit="handleAfterSubmit"/>
  </div>
</template>

<script>
import AdminRestaurantForm from '@/components/AdminRestaurantForm'
import adminAPI from '@/api/admin'
import { Toast } from '@/utils/helpers'

export default {
  name: 'AdminRestaurantCreate',
  components: {
    AdminRestaurantForm
  },
  data() {
    return {
      isProcessing: false
    }
  },
  methods: {
    handleAfterSubmit(formData) {
      this.createRestaurant(formData)
    },
    async createRestaurant(formData) {
      try {
        this.isProcessing = true
        const { data, statusText } = await adminAPI.restaurants.new({
          formData
        })

        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }

        this.isProcessing = false
        this.$router.push({ name: 'admin-restaurants' })
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法建立餐廳，請稍後再試'
        })
        this.isProcessing = false
      }
    }
  }
}
</script>
