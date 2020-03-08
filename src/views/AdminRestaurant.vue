<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <div
      v-else
      class="row"
    >
      <div class="col-md-12">
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">{{
          restaurant.categoryName
        }}</span>
      </div>
      <div class="col-md-4">
        <img
          class="img-responsive center-block"
          :src="restaurant.image | emptyImage"
          style="width: 250px;margin-bottom: 25px;"
        >
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>Opening Hour:</strong>
              {{ restaurant.openingHours }}
            </li>
            <li>
              <strong>Tel:</strong>
              {{ restaurant.tel }}
            </li>
            <li>
              <strong>Address:</strong>
              {{ restaurant.address }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <p>{{ restaurant.description }}</p>
      </div>
    </div>
    <hr>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'
import Spinner from './../components/Spinner'

export default {
  name: 'AdminRestaurant',
  components: {
    Spinner
  },
  mixins: [emptyImageFilter],
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: ''
      },
      isLoading: true
    }
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    async fetchRestaurant (restaurantId) {
      try {
        this.isLoading = true
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        const {
          id,
          name,
          Category,
          image,
          opening_hours: openingHours,
          tel,
          address,
          description
        } = data.restaurant

        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          categoryName: Category ? Category.name : '未分類',
          image,
          openingHours,
          tel,
          address,
          description
        }

        this.isLoading = false
      } catch (error) {
        console.error(error.message)
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>
