import { apiHelper } from '@/api/helper'

export default {
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`)
  },
  removeFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`)
  },
  removeLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`)
  }
}
