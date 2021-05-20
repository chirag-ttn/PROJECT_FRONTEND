import './App.css';
import Login from './pages/Login/Login'
import Feeds from './pages/Feeds/Feeds'
import CreateProfile from './pages/CreateProfile/CreateProfile'
import { Redirect, Switch, Route } from 'react-router-dom'

import { useSelector } from 'react-redux'

import axios from 'axios'

axios.interceptors.request.use(config => {
  // console.log('Request was sent');
  config.headers.Authorization = localStorage.getItem('token');
  // console.log(config)
  return config;
}, error => {
  // handle the error
  return Promise.reject(error);
});


function App() {


  const isAuth = useSelector(state => state.authReducer.auth)
  // console.log(isAuth)
  const ProtectedRoutes = (<>
    <Switch>
      <Route path="/feeds">
        <Feeds />
      </Route>
      <Route path='/createProfile'>
        <CreateProfile />
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
