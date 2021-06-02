import CreateProfile from '../CreateProfile/CreateProfile'
import {useDispatch} from 'react-redux'    
import {getProfile} from '../../redux/actions/Profile'
export default () =>{
    const dispatch = useDispatch()
    
    return(
        <CreateProfile />
    )
}