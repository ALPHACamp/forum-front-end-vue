<template>
  <div class="container py-5">
    <!-- 後台導覽頁籤 AdminNav -->
    <AdminNav />

    <a
      href="#"
      class="btn btn-primary mb-4"
    >
      New Restaurant
    </a>

    <!-- 後台餐廳列表 AdminRestaurantsTable -->
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav'

export default {
  name: 'AdminRestaurants',
  components: {
    AdminNav
  }
}
</script>
