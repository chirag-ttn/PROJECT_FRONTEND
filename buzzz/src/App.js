import './App.css';
import Routes from './Routes'
import { useSelector } from 'react-redux'
import axios from 'axios'


function App() {
    
  const isAuth = useSelector(state => state.authReducer)
  const profile = isAuth.profile_id

  
  return (
    <Routes isAuth={isAuth} profile={profile}/> 
  );
}

export default App;
