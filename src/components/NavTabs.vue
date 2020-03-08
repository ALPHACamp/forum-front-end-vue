<template>
  <ul class="nav nav-tabs mb-4">
    <li
      v-for="tab in tabs"
      :key="tab.id"
      class="nav-item"
    >
      <router-link
        :to="tab.path"
        class="nav-link"
      >
        {{ tab.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import uuid from 'uuid/v4'

export default {
  data () {
    return {
      tabs: [
        {
          id: uuid(),
          title: '首頁',
          path: '/restaurants'
        },
        {
          id: uuid(),
          title: '最新動態',
          path: '/restaurants/feeds'
        },
        {
          id: uuid(),
          title: 'TOP 10 人氣餐廳',
          path: '/restaurants/top'
        },
        {
          id: uuid(),
          title: '美食達人',
          path: '/users/top'
        }
      ]
    }
  }
}
</script>

<style scoped>
.nav-tabs {
  border-bottom: 1px solid #bd2333;
}

.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover,
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  border-color: #bd2333;
  background-color: #bd2333;
  color: white;
}
</style>
