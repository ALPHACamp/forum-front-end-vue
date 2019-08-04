import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow (datetime) {
      return datetime ? moment(datetime).fromNow() : '-'
    }
  }
}

export const emptyImageFilter = {
  filters: {
    emptyImage (src) {
      return src || 'https://via.placeholder.com/320x240/DFDFDF?text=No+Image'
    }
  }
}
