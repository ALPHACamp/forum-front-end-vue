<template>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <!--
      <a class="nav-link {{#ifCond '' categoryId}}active{{/ifCond}}" href="?categoryId=">全部</a>
      -->
    </li>

    <li v-for="category in categories" :key="category.id" class="nav-item">
      <a class="nav-link" :href="`?categoryId=${category.id}`">{{category.name}}</a>
    </li>
  </ul>
</template>

<script>
import categoriesAPI from '@/api/categories'

export default {
  name: 'NavPills',
  data() {
    return {
      categories: []
    }
  },
  mounted() {
    this.fetchCategories()
  },
  methods: {
    async fetchCategories() {
      try {
        const { data } = await categoriesAPI.get()
        this.categories = data.categories
      } catch (err) {
        // FIXME: show error notification
      }
    }
  }
}
</script>
