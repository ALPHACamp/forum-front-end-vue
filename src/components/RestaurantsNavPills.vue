<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'restaurants'}">全部</router-link>
    </li>

    <li v-for="category in categories" :key="category.id" class="nav-item">
      <router-link
        class="nav-link"
        :to="{name: 'restaurants', query: { categoryId: category.id }}"
      >{{ category.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RestaurantsNavPills',
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>
