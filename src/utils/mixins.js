import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow (datetime) {
      if (!datetime) return '-'
      return moment(datetime).fromNow()
    }
  }
}

export const emptyImageFilter = {
  filters: {
    emptyImage (src) {
      return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    }
  }
}
/*
  vue3也依然有支援mixins的寫法，但mixins的使用方法在過去也有被提到有一些隱性問題(容易有衝突或可用性有限)
  而vue3所推出的新應用composition api(組合式api)，提供對於打造可被重複使用的功能組件，可作為替代mixins的新方法
  官方參考資料:https://v3.cn.vuejs.org/guide/mixins.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%80%89%E9%A1%B9%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5
  組合式api來取代mixins的文章:https://css-tricks.com/how-the-vue-composition-api-replaces-vue-mixins/
 */
