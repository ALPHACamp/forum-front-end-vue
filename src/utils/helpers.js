import axios from 'axios'
import Swal from 'sweetalert2'

export const endPoint = 'http://localhost:3000/api'
export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTU4MjMxMDMxfQ.1peMBJHXODZ35MQmy1Nb5DxVM-6TC5xbCDmSun9nVxU'

export const apiHelper = axios.create({
  baseURL: `${endPoint}`,
  headers: { Authorization: `Bearer ${token}` }
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})
