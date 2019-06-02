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
    },
    new({ name }) {
      return apiHelper.post('/admin/categories', { name })
    },
    update({ categoryId, name }) {
      return apiHelper.put(`/admin/categories/${categoryId}`, { name })
    },
    remove({ categoryId }) {
      return apiHelper.delete(`/admin/categories/${categoryId}`)
    }
  },
  users: {
    get() {
      return apiHelper.get('/admin/users')
    },
    update({ userId, isAdmin }) {
      return apiHelper.put(`/admin/users/${userId}`, { isAdmin })
    }
  }
}
