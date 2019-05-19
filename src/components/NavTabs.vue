<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" href="#">首頁</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/restaurants/feeds">最新動態</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/restaurants/top">TOP10 人氣餐廳</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/users/top">美食達人</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavTabs',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
