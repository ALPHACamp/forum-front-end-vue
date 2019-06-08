<template>
  <router-view/>
</template>

<script>
import store from '@/store'
export default {
  store
}
</script>

<style lang="scss">
// sweet alert
.swal2-popup.swal2-toast {
  box-shadow: none !important;
  border: 1px solid #dadada;
}

// sticky footer
html,
body {
  height: 100%;
}

.grow-height-parent {
  display: flex;
  flex-direction: column;

  > .grow-height-child {
    flex: 1;
  }
}
</style>
