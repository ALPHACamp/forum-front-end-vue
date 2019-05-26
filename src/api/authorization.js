import { apiHelper } from '@/utils/helpers'

export default {
  signIn({ email, password }) {
    return apiHelper.post('/signin', {
      email,
      password
    })
  },
  signUp({ name, email, password }) {
    return apiHelper.post('/signin', {
      name,
      email,
      password
    })
  }
}
