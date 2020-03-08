<template>
  <div id="restaurant-forum">
    <Navbar />
    <main class="mt-5 bg-white">
      <router-view />
    </main>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
  main {
    margin-top: 65px !important;
  }
</style>
