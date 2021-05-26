import {combineReducers} from 'redux'
import authReducer from './auth'
import formReducer from './ProfileForm'
import errorReducer from './error'
import postReducer from './Posts'
import userReducer from './users'
import profileReducer from './profile'
const rootReducer =  combineReducers({
    authReducer,
    formReducer,
    errorReducer,
    postReducer,
    userReducer,
    profileReducer
})

export default rootReducer