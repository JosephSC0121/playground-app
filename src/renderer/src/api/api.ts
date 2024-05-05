import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:80'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})

export default api
