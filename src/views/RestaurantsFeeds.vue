<template>
  <div>
    <NavTabs/>
    <h1 class="mt-5">最新動態</h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <NewestRestaurants :restaurants="restaurants"></NewestRestaurants>
      </div>
      <div class="col-md-6">
        <NewestComments :comments="comments"></NewestComments>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '@/components/NavTabs.vue'
import NewestRestaurants from '@/components/NewestRestaurants.vue'
import NewestComments from '@/components/NewestComments.vue'
import restaurantsAPI from '@/api/restaurants'
import { Toast } from '@/utils/helpers'

export default {
  name: 'RestaurantsFeeds',
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data() {
    return {
      restaurants: [],
      comments: []
    }
  },
  mounted() {
    this.fetchFeeds()
  },
  methods: {
    async fetchFeeds() {
      try {
        const { data, statusText } = await restaurantsAPI.getFeeds()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        this.restaurants = data.restaurants
        this.comments = data.comments
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法取得最新動態，請稍後再試'
        })
      }
    }
  }
}
</script>
