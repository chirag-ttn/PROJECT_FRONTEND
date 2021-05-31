import './App.css';
import Routes from './Routes'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

axios.interceptors.request.use(config => {
  console.log('Request was sent');
  config.headers.Authorization = localStorage.getItem('token');
  console.log(config)
  return config;
}, error => {
  return Promise.reject(error);
});
function App() {
    
  const isAuth = useSelector(state => state.authReducer)
  const profile = isAuth.profile_id

  
  return (
    <Routes isAuth={isAuth} profile={profile}/> 
  );
}

export default App;
