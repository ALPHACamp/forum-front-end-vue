<template>
  <div>
    <NavTabs/>
    <RestaurantsNavPills :categories="categories"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavTabs from '@/components/NavTabs.vue'
import RestaurantsNavPills from '@/components/RestaurantsNavPills.vue'
import restaurantsAPI from '@/api/restaurants'

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantsNavPills
  },
  data() {
    return {
      categories: [],
      categoryId: 0,
      currentPage: 1,
      restaurants: [],
      totalPage: 0,
      isLoading: true,
      hasError: false
    }
  },
  mounted() {
    this.fetchRestaurants({ page: 2 })
  },
  methods: {
    async fetchRestaurants({ page = 1, categoryId = 0 } = {}) {
      try {
        const { data } = await restaurantsAPI.get({ page, categoryId })

        this.categories = data.categories
        this.categoryId = data.categoryId
        this.currentPage = data.page
        this.restaurants = data.restaurants
        this.totalPage = data.totalPage.length
      } catch (error) {
        this.hasError = true
      }
      this.isLoading = false
    }
  }
}
</script>
