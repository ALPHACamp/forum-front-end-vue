<template>
  <div>
    <admin-nav/>

    <router-link :to="{name: 'admin-restaurant-create'}" class="btn btn-primary mb-4">New Restaurant</router-link>
    <admin-restaurants-table/>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'
import AdminRestaurantsTable from '@/components/AdminRestaurantsTable'

export default {
  name: 'AdminRestaurants',
  components: {
    AdminNav,
    AdminRestaurantsTable
  }
}
</script>
