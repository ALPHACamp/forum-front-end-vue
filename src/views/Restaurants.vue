<template>
  <div>
    <NavTabs/>
    <RestaurantsNavPills :categories="categories"/>

    <div class="row">
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      ></RestaurantCard>
    </div>

    <RestaurantsPagination
      v-if="totalPage > 1"
      :categoryId="categoryId"
      :currentPage="currentPage"
      :totalPage="totalPage"
    ></RestaurantsPagination>
  </div>
</template>

<script>
// @ is an alias to /src
import NavTabs from '@/components/NavTabs.vue'
import RestaurantsNavPills from '@/components/RestaurantsNavPills.vue'
import RestaurantCard from '@/components/RestaurantCard.vue'
import RestaurantsPagination from '@/components/RestaurantsPagination.vue'
import restaurantsAPI from '@/api/restaurants'

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantsNavPills,
    RestaurantCard,
    RestaurantsPagination
  },
  data() {
    return {
      categories: [],
      categoryId: '',
      currentPage: 1,
      restaurants: [],
      totalPage: 0,
      isLoading: true,
      hasError: false
    }
  },
  mounted() {
    this.fetchRestaurants()
  },
  methods: {
    async fetchRestaurants({ page = 1, categoryId = '' } = {}) {
      try {
        const { data } = await restaurantsAPI.get({ page, categoryId })
        this.categories = data.categories
        this.categoryId = data.categoryId
        this.currentPage = data.page
        this.restaurants = data.restaurants
        this.totalPage = data.totalPage.length
      } catch (error) {
        this.hasError = true
        console.log('something error', error)
      }
      this.isLoading = false
    }
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { page, categoryId } = to.query
    this.fetchRestaurants({ page, categoryId })
    next()
  }
}
</script>
