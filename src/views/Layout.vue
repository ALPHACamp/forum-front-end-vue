<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <a class="navbar-brand" href="/">餐廳評論網</a>
      <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto"></ul>
        <div>
          <!-- is user is admin -->
          <a href="/admin" style="color: white;margin-right: 10px;">Admin 後台</a>
          <!-- is user is login -->
          <span style="color: white;margin-right: 10px;">Hi, {{user.email}}</span>
          <a :href="`/users/${user.id}`" style="color: white;margin-right: 10px;">Profile</a>
          <a href="/logout">
            <button class="btn btn-outline-success my-2 my-sm-0">LogOut</button>
          </a>
        </div>
      </div>
    </nav>
    <br>

    <main role="main">
      <div class="album py-5 bg-light">
        <div class="container">
          <!--
            TODO:
          {{#if success_messages}}
            <div class="alert alert-success" role="alert" style="margin: 30px 0 ;">
              {{success_messages}}
            </div>
          {{/if}}
          {{#if error_messages}}
            <div class="alert alert-danger" role="alert" style="margin: 30px 0 ;">
              {{error_messages}}
            </div>
          {{/if}}
          -->
          <router-view/>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      user: {
        id: 1,
        email: 'root@example.com'
      }
    }
  }
}
</script>
