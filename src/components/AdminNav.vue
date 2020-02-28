<template>
  <div class="mb-3">
    <h1>餐廳後台</h1>
    <router-link to="/admin/restaurants">
      Restaurants
    </router-link>&nbsp;|
    <router-link to="/admin/categories">
      Categories
    </router-link>&nbsp;|
    <router-link to="/admin/users">
      Users
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AdminNav'
}
</script>
