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
      comments: [],
      isLoading: true,
      hasError: false
    }
  },
  mounted() {
    this.fetchFeeds()
  },
  methods: {
    async fetchFeeds() {
      try {
        const { data, status } = await restaurantsAPI.getFeeds()
        if (status !== 'success') {
          // TODO: error handling
        }
        this.restaurants = [...data.restaurants]
        this.comments = [...data.comments]
        this.isLoading = false
      } catch (error) {
        // TODO: error notification
        this.hasError = true
        console.log('error', error)
      }
    }
  }
}
</script>
