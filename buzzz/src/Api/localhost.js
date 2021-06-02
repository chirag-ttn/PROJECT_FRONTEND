import axios from 'axios'
const {REACT_APP_DEV_URL,REACT_APP_PROD_URL,NODE_ENV} = process.env
//////console.log(NODE_ENV,REACT_APP_DEV_URL,REACT_APP_PROD_URL)
const url = NODE_ENV==='development'?REACT_APP_DEV_URL:REACT_APP_PROD_URL
//console.log(url)
const instance = axios.create({
    baseURL:url
})

instance.interceptors.request.use(config => {
    //console.log('Request sent===>',config);
    config.headers.Authorization = localStorage.getItem('token');
    return config;
  }, error => {
    return Promise.reject(error);
  });

  export default instance;