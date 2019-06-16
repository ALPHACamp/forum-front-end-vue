<template>
  <div class="container py-5">
    <!-- ... -->
    <div class="text-center mb-3">
      <p>
        <router-link to="/signup">
          SignUp
        </router-link>
      </p>
    </div>
    <!-- ... -->
  </div>
</template>

<script>
export default {

  methods: {
    handleSubmit (e) {
      const form = new FormData(e.target)
      this.sendAJAXRequest(form)
    },
    sendAJAXRequest (form) {
      const url = 'http://localhost:3000'
      fetch(url, {
        method: 'POST',
        body: form
      })
    }
  }
}
</script>
