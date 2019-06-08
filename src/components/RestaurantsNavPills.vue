<template>
  <ul class="nav nav-pills mb-4">
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
  name: "RestaurantsNavPills",
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
.nav-pills {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 1.2rem !important;
}

.nav-pills .nav-link {
  margin-right: 7px;
  margin-bottom: 7px;
  padding: 5px 10px 3px;
  color: #4d4d4d !important;
  border: 1px solid #a1a1a1;
  transition: none !important;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  border-width: 2px !important;
  border-color: #af8d5a !important;
  background-color: transparent !important;
}
</style>