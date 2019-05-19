import axios from 'axios'

export const endPoint = 'http://localhost:3000/api'
export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTU4MjMxMDMxfQ.1peMBJHXODZ35MQmy1Nb5DxVM-6TC5xbCDmSun9nVxU'

export const apiHelper = axios.create({
  baseURL: `${endPoint}`,
  headers: { Authorization: `Bearer ${token}` }
})
