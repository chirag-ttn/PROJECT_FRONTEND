import axios from 'axios'
require('dot-env')
const url = 'http://localhost:4444'
const instance = axios.create({
    baseURL:url
})

instance.interceptors.request.use(config => {
    console.log('Request sent===>',config);
    config.headers.Authorization = localStorage.getItem('token');
    return config;
  }, error => {
    return Promise.reject(error);
  });

  export default instance;