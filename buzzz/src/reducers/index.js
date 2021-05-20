import {combineReducers} from 'redux'
import authReducer from './auth'
import formReducer from './ProfileForm'
import errorReducer from './error'
const rootReducer =  combineReducers({
    authReducer,
    formReducer,
    errorReducer
})

export default rootReducer