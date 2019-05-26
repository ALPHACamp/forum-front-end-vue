<template>
  <div class="grow-height-parent" style="min-height: 100%;">
    <Navbar></Navbar>
    <main role="main" class="mt-5 bg-light grow-height-child grow-height-parent">
      <div class="container py-5 grow-height-child">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Layout',
  components: {
    Navbar
  }
}
</script>
