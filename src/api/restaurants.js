import { apiHelper } from '@/api/helper'

export default {
  get({ page, categoryId }) {
    const searchParams = new URLSearchParams()
    searchParams.set('page', page)
    searchParams.set('categoryId', categoryId)
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  }
}
