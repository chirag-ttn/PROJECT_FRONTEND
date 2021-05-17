import './App.css';
import Login from './pages/Login/Login'
import Feeds from './pages/Feeds/Feeds'
import CreateProfile from './pages/CreateProfile/CreateProfile'
import { BrowserRouter as Router, Redirect, Link, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import axios from 'axios'

axios.interceptors.request.use(config => {
  console.log('Request was sent');
  config.headers.Authorization = localStorage.getItem('token');
  console.log(config)
  return config;
}, error => {
  // handle the error
  return Promise.reject(error);
});


function App() {
  const [loggedIn, setloggedIn] = useState(false)
  useEffect(()=>{
    const val = localStorage.getItem('token')
    console.log(val,loggedIn)
    val?setloggedIn(true):setloggedIn(false)
  })
  const ProtectedRoutes = (<>
    <Switch>
      <Route path="/feeds">
        <Feeds />
      </Route>
      <Route path='/createProfile'>
        <CreateProfile />
      </Route>
      <Route exact path='/'>
        {loggedIn?<Redirect to='/createProfile' />:<Login /> }
      </Route>
    </Switch>
  </>)
  const unProtectedRoutes = (
    <>
    <Route exact path="/">
       <Login />
      </Route>
    </>
  )
  return (
    loggedIn?ProtectedRoutes:unProtectedRoutes

  );
}

export default App;
