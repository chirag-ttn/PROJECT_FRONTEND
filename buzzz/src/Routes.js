import Login from './pages/Login/Login'
import Feeds from './pages/Feeds/Feeds'
import CreateProfile from './pages/CreateProfile/CreateProfile'
import UpdateProfile from './pages/updateProfile/updateProfile'
import UserProfile from './pages/UserProfile/UserProfile'
import { Redirect, Switch, Route, useParams } from 'react-router-dom'

function Routes(props) {
    
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
        {props.isAuth.auth ?
          !props.profile?
          <CreateProfile />:
          <Feeds />:
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
    props.isAuth.auth ? ProtectedRoutes : unProtectedRoutes
  );
}

export default Routes;
