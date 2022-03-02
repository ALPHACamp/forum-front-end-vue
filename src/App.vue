<template>
   <!-- 
   vue 3.0 所新增的新特性 SFC(Single File Component)單一元件檔
   其寫法就如同目前 vue pen 標準 (包含: template(Html),script(JS),style(CSS)
   參考:https://v3.cn.vuejs.org/guide/single-file-component.html
   另外若了解單一元建檔後，也可以嘗試用vue3的新特性 組件式 api (composition api) 來打造能共享跟重複使用的組件
   參考:https://v3.cn.vuejs.org/guide/composition-api-introduction.html#%E5%B8%A6-ref-%E7%9A%84%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8F%98%E9%87%8F
  -->
  <!-- 
  而template寫法上取消了元件內需要一個根元素當容器需包住內容的規則(支援多個根元件)。 
  例如目前架構可改成:
   <template>
     <Navbar />
      <main class="mt-5 bg-white">
        <router-view />
      </main>
   </template> 
   -->
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