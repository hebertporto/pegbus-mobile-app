import axios from 'axios'

import { API_BASE_URL, WINNIPEG_TRANSIT_API } from './keys'

export const initializeAxios = () => {
  axios.defaults.baseURL = API_BASE_URL
  axios.defaults.params = {}
  axios.defaults.params['api-key'] = WINNIPEG_TRANSIT_API
}
