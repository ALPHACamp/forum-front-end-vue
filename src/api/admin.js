import { apiHelper } from '@/utils/helpers'

export default {
  restaurants: {
    get() {
      return apiHelper.get('/admin/restaurants')
    },
    new({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    delete({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
    }
  },
  categories: {
    get() {
      return apiHelper.get('/admin/categories')
    }
  }
}
