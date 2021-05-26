import './App.css';
import Login from './pages/Login/Login'
import Feeds from './pages/Feeds/Feeds'
import CreateProfile from './pages/CreateProfile/CreateProfile'
import { Redirect, Switch, Route } from 'react-router-dom'
import {getUsers} from './redux/actions/users'
import { useSelector,useDispatch } from 'react-redux'
import {getProfile} from './redux/actions/Profile'
import axios from 'axios'
import { useEffect } from 'react';

axios.interceptors.request.use(config => {
  console.log('Request was sent');
  config.headers.Authorization = localStorage.getItem('token');
  console.log(config)
  return config;
}, error => {
  return Promise.reject(error);
});
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    getUsers(dispatch)
  },[getUsers])
  const isAuth = useSelector(state => state.authReducer.auth)
  // console.log(isAuth)
  const ProtectedRoutes = (<>
    <Switch>
      <Route path='/createProfile'>
        <CreateProfile />
      </Route>
      <Route path="/feeds">
        <Feeds />
      </Route>
      <Route exact path='/'>
        {isAuth ? <Redirect to='/createProfile' /> : <Login />}
      </Route>
    </Switch>
  </>)
  const unProtectedRoutes = (
    <>

      <Route path="*">
        <Login />
      </Route>
    </>
  )
  return (
    isAuth ? ProtectedRoutes : unProtectedRoutes
  );
}

export default App;
