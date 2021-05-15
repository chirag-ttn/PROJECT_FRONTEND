import './App.css';
import Login from './pages/Login/Login'
import Feeds from './pages/Feeds/Feeds'
import {reactLocalStorage} from 'reactjs-localstorage';
import { BrowserRouter as Router, Redirect, Link, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'

function App() {
  const [loggedIn, setloggedIn] = useState(false)
  useEffect(()=>{
    const val = Cookies.get('token');
    val?setloggedIn(true):setloggedIn(false)
  })

  return (
    <Switch>
      <Route exact path="/">
        {loggedIn ? <Redirect to="/feeds" /> : <Login />}
      </Route>
      <Route path="/feeds">
        <Feeds />
      </Route>
    </Switch>
  );
}

export default App;
