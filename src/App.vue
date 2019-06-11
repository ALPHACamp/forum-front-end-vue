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
* {
  font-size: 15px;
  font-weight: normal !important;
  font-family: '微軟正黑體';
  line-height: 1.5;
  color: #4d4d4d;
  outline: none;
}

body{
  overflow: scroll!important;
}

.page-link:focus,
.form-control:focus,
.btn,
.navbar-dark .navbar-toggler {
  outline: none !important;
  box-shadow: none !important;
}

.form-control:focus {
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
}

a {
  color: #bd2333 !important;
  transition: all 0.3s ease-in-out !important;
  transition-property: all !important;
  transition-duration: 0.3s !important;
  transition-timing-function: ease-in-out !important;
  transition-delay: 0s !important;
}

.btn,
.btn-border.btn:hover {
  min-width: 84.47px !important;
  padding: 7px 14px !important;
  font-size: 14px !important;
  color: #fff !important;
  background-color: #bd2333 !important;
  border: 2px solid #bd2333!important;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition-property: color, background-color, border-color, box-shadow;
  transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;
  transition-delay: 0s, 0s, 0s, 0s;
}

.btn-border,
.btn:hover {
  background: transparent !important;
  color: #bd2333 !important;
}

.btn-outline-success {
  border-color: #fff !important;
  border-width: 1px !important;
}

h1,
.card-text {
  font-family: 'noto_serif', serif;
}

main.bg-light {
  margin-top: 65px !important;
  background-color: #ffffff !important;
}

.navbar-dark .navbar-brand {
  color: #fff !important;
  font-size: 19px;
  padding: 0;
}

nav button.btn:hover {
  color: #fff !important;
}

nav.bg-dark {
  padding: 14px 16px;
  background-color: #bd2333 !important;
}

.nav-tabs {
  border-bottom: 1px solid #bd2333 !important;
}

.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover,
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  border-color: #bd2333 !important;
  background-color: #bd2333 !important;
  color: #fff !important;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.page-link {
  height: 37px;
  padding: 7px 20px !important;
}

.page-item.active .page-link,
.page-item.active span {
  color: #fff !important;
  background-color: #bd2333 !important;
  border-color: #bd2333 !important;
  z-index: 1;
}

.page-item span {
  color: #bd2333 !important;
}

a.page-link:hover,
a.page-link:hover span {
  color: #fff !important;
}

a.page-link:hover {
  background-color: #bd2333 !important;
  border-color: #bd2333 !important;
}

.badge.badge-secondary {
  color: inherit;
  background-color: #e8e8e8;
  padding: 6px;
}

.card {
  border: none !important;
  box-shadow: -1px 4px 10px rgba(0, 0, 0, 0.06);
}

.card-text {
  font-size: 17px;
  margin: 0 0 14px;
  line-height: 1.3;
}

.card-text.title-wrap {
  margin: 0;
}

.card-text a {
  font-family: inherit;
  font-size: 24px;
  line-height: 1.3;
  color: #4d4d4d !important;
}

.card-text a:hover {
  color: #bd2333 !important;
}

.card-text.text-truncate {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
}

.card-footer {
  padding: 9px 17.5px !important;
  border-color: rgb(232, 232, 232) !important;
}

.card-footer {
  background: #fff !important;
}

.blockquote-footer {
  font-size: 12.5px !important;
}

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
