import './App.css';
import Login from './pages/Login/Login'
import Feeds from './pages/Feeds/Feeds'
import CreateProfile from './pages/CreateProfile/CreateProfile'
import UpdateProfile from './pages/updateProfile/updateProfile'
import UserProfile from './pages/UserProfile/UserProfile'
import { Redirect, Switch, Route, useParams } from 'react-router-dom'
import { getUsers } from './redux/actions/users'
import { useSelector, useDispatch } from 'react-redux'
import { getProfile } from './redux/actions/Profile'
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
  
  
  const isAuth = useSelector(state => state.authReducer)
  const profile = isAuth.profile_id

  // console.log(isAuth)
  console.log(profile==='')
  const ProtectedRoutes = (<>
    <Switch>
      
      <Route path='/createProfile'>
        <CreateProfile />:
      </Route>
      <Route path="/feeds">
        <Feeds />
      </Route>
      <Route path='/userProfile/:id'>
        <UserProfile />
      </Route>
      <Route path='/updateProfile'>
        <UpdateProfile />
      </Route>
      <Route exact path='/'>
        {isAuth.auth ?
          profile===''?
          <Redirect to='/createProfile' /> :
          <Redirect to='/feeds' />:
          <Login />
        }
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
    isAuth.auth ? ProtectedRoutes : unProtectedRoutes
  );
}

export default App;
