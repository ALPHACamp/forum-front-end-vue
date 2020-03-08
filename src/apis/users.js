import { apiHelper } from './../utils/helpers'

export default {
  getCurrentUser () {
    return apiHelper.get('/get_current_user')
  },
  get ({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  update ({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  },
  addFavorite ({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`)
  },
  deleteFavorite ({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike ({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`)
  },
  deleteLike ({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  addFollowing ({ userId }) {
    return apiHelper.post(`/following/${userId}`)
  },
  deleteFollowing ({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  },
  getTopUsers () {
    return apiHelper.get('/users/top')
  }
}
