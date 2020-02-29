import { apiHelper } from './../utils/helpers'

export default {
  signIn ({ email, password }) {
    return apiHelper.post('/signin', {
      email,
      password
    })
  },
  signUp (data) {
    return apiHelper.post('/signup', {
      ...data
    })
  }
}
