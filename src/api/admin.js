import { apiHelper } from '@/utils/helpers'

export default {
  getRestaurants() {
    return apiHelper.get(`/admin/restaurants`)
  },
  deleteRestaurant({ restaurantId }) {
    return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
  }
}
