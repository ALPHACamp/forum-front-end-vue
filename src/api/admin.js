import { apiHelper } from '@/utils/helpers'

export default {
  restaurants: {
    get() {
      return apiHelper.get('/admin/restaurants')
    },
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    new({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    },
    remove({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
    }
  },
  categories: {
    get() {
      return apiHelper.get('/admin/categories')
    }
  }
}
