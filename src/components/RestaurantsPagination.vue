<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 前一頁 previousPage -->
      <li
        v-show="previousPage"
        class="page-item"
      >
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
        >
          {{ page }}
        </router-link>
      </li>

      <!-- 後一頁 nextPage -->
      <li
        v-show="nextPage"
        class="page-item"
      >
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
    previousPage () {
      return this.currentPage === 1 ? null : this.currentPage - 1
    },
    nextPage () {
      return this.currentPage + 1 > this.totalPage ? null : this.currentPage + 1
    }
  }
}
</script>

<style scoped>

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.page-link {
  height: 37px;
  padding: 7px 20px;
  color: #bd2333;
}

.page-item.active .page-link,
.page-item.active span {
  color: white;
  background-color: #bd2333;
  border-color: #bd2333;
  z-index: 1;
}

.page-item span {
  color: #bd2333;
}

a.page-link:hover,
a.page-link:hover span {
  color: white;
  background-color: #bd2333;
  border-color: #bd2333;
}
</style>
