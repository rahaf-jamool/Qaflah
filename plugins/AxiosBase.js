import axios from 'axios';
import config from '../store/config';

export default axios.create({
    baseURL: config.BaseUrl,
    headers: {
      // Authorization: 'Bearer ' + (localStorage.getItem('UserToken')?localStorage.getItem('UserToken'):localStorage.getItem('Token'))
      Authorization: 'Bearer ' + config.ApiToken
    }
  })
