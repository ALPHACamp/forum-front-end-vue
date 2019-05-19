<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <NavTabs/>
    <NavPills/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavTabs from '@/components/NavTabs.vue'
import NavPills from '@/components/NavPills.vue'

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    NavPills
  }
}
</script>
