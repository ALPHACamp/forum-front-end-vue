import Vue from 'vue'
import App from './App.vue'
import router from './router' //vue-touter 在3.0中的介紹會在該檔做項細說明
import store from './store' // vuex 在3.0中的介紹會在該檔做項細說明
import './assets/application.css'

/*
3.x版本取消了productionTip的global config，此設定改成在env為dev+ full build才會顯示
關於全局api 3.0版有沿用2.0版的配置，有些則被移除
詳見: https://v3.cn.vuejs.org/guide/migration/global-api.html#%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9A%84%E5%85%A8%E5%B1%80-api-createapp
*/
Vue.config.productionTip = false
/*
在2.x中主要是透過new Vue來建立根實例，而在3.x中改為使用到新的全域api"createApp"來創建，
需要載入的根元件放在createApp內，若有需要載入plugin可以使用"use"。
而應用實例要掛載到dom上，過往就要使用到2.x的$mount，到了3.x版中改為.mount所取代。
下列3.0實例寫法:

import {createApp} from 'vue'
createApp(App).use(router).use(store).mount('#app')
*/
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

