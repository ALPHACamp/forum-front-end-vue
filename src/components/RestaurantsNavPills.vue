<template>
  <ul class="nav nav-pills mb-4">
    <li class="nav-item">
      <router-link
        class="nav-link"
        :to="{
          name: 'restaurants'
        }"
      >
        全部
      </router-link>
    </li>

    <li
      v-for="category in categories"
      :key="category.id"
      class="nav-item"
    >
      <router-link
        class="nav-link"
        :to="{
          name: 'restaurants',
          query: {
            categoryId: category.id
          }
        }"
      >
        {{ category.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.nav-pills {
  display: flex;
  align-items: center;
  margin-bottom: 1rem !important;
}

.nav-pills .nav-link {
  margin-right: 7px;
  margin-bottom: 7px;
  padding: 5px 10px 3px;
  color: #4d4d4d;
  border: 1px solid #a1a1a1;
  transition: none;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  border-width: 2px;
  border-color: #bd2333;
  background-color: transparent;
}
</style>
