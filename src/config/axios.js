import Axios from 'axios';

import { API_BASE_URL } from './keys';

export const initializeAxios = () => {
  Axios.defaults.baseURL = API_BASE_URL
}