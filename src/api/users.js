import { apiHelper } from '@/utils/helpers'
import store from '@/store'

export default {
  get({ userId = '', token = store.state.token } = {}) {
    return apiHelper.get(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },
  update({ userId, form }) {
    return apiHelper.put(`/users/${userId}`,form)
  },
  getTopUsers() {
    return apiHelper.get('/users/top')
  },
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
  },
  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`)
  },
  removeFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  }
}
