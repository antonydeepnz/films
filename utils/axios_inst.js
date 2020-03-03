import axios from 'axios'

import BASE_URL from './api_config'

const axiosOMDB = axios.create({
  baseURL: REQUEST_URL,
  timeout: 1000,
  
})
// headers: {'X-Custom-Header': 'foobar'}

export default axiosOMDB