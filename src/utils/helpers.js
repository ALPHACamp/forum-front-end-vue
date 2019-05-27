import axios from 'axios'
import Swal from 'sweetalert2'
import store from '@/store'

export const endPoint = 'http://localhost:3000/api'

const axiosInstance = axios.create({
  baseURL: `${endPoint}`
})

axiosInstance.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers['Authorization'] = `Bearer ${store.state.token}`
    }
    return config
  },
  err => Promise.reject(err)
)

export const apiHelper = axiosInstance

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})
