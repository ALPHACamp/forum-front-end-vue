<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <router-link
          class="page-link"
          aria-label="Previous"
          :to="{name: 'restaurants', query: { categoryId, page: previousPage }}"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>

      <li
        v-for="page in totalPage"
        :key="page"
        :class="['page-item', { active: currentPage === page }]"
      >
        <router-link
          class="page-link"
          :to="{name: 'restaurants', query: { categoryId, page }}"
        >{{ page }}</router-link>
      </li>

      <li class="page-item">
        <router-link
          class="page-link"
          :to="{name: 'restaurants', query: { categoryId, page: nextPage }}"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'RestaurantsNavPills',
  props: {
    categoryId: {
      type: [String, Number],
      default: ''
    },
    currentPage: {
      type: Number,
      default: 1
    },
    totalPage: {
      type: Number,
      default: 0
    }
  },
  computed: {
    nextPage() {
      return this.currentPage + 1 > this.totalPage
        ? this.currentPage
        : this.currentPage + 1
    },
    previousPage() {
      return this.currentPage - 1 <= 0 ? this.currentPage : this.currentPage - 1
    }
  }
}
</script>
