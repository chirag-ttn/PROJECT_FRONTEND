import axios from 'axios'
import { removeToken } from '../redux/actions/auth';

const {REACT_APP_DEV_URL,REACT_APP_PROD_URL,NODE_ENV} = process.env
const url = NODE_ENV==='development'?REACT_APP_DEV_URL:REACT_APP_PROD_URL
const instance = axios.create({
    baseURL:url
})

instance.interceptors.request.use(config => {
    console.log('Request sent===>',config);
    config.headers.Authorization = localStorage.getItem('token');
    return config;
  }, error => {
    console.log(error)  
    return Promise.reject(error);
  });
  instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response)
    return response;
  }, function (error) {
    console.log('error',error.response)
    const {data,status} = error.response;
    if(data==='INVALID TOKEN' && status===400)
    {
      removeToken()
    } 
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
  export default instance;