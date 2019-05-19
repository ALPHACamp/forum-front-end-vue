import { apiHelper } from '@/api/helper'

export default {
  get() {
    return apiHelper.get('/categories')
  }
}
