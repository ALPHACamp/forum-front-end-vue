import { apiHelper } from './../utils/helpers'

export default {
  create ({ restaurantId, text }) {
    return apiHelper.post('/comments', { restaurantId, text })
  },
  delete ({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`)
  }
}
