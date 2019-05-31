import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return '-'
      }
      return moment(datetime).fromNow()
    }
  }
}

export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      if (!src) {
        return 'http://via.placeholder.com/300x300?text=No+Image'
      }
      return src
    }
  }
}
