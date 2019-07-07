<template>
  <div class="container py-5">
    <!-- 後台導覽頁籤 AdminNav -->
    <AdminNav />

    <router-link
      to="/admin/restaurants/new"
      class="btn btn-primary mb-4"
    >
      New Restaurant
    </router-link>

    <AdminRestaurantsTable />
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav'
import AdminRestaurantsTable from './../components/AdminRestaurantsTable'

export default {
  components: {
    AdminNav,
    AdminRestaurantsTable
  }
}
</script>
