<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm'
export default {
  name: 'AdminRestaurantNew',
  components: {
    AdminRestaurantForm
  }
}
</script>
