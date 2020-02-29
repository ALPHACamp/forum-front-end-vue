import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  categories: {
    get () {
      return apiHelper.get('/admin/categories', {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
    }
  }
}
