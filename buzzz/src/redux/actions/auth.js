import Cookie from 'js-cookie'
import { Redirect, useHistory } from 'react-router';
import axios from '../../Api/localhost'

export const setToken = () => {
    let auth = false;
    if (localStorage.getItem('token') === '' || localStorage.getItem('token') === null) {
        if(Cookie.get('token')!==undefined)
        {
            auth = true
            localStorage.setItem('token',Cookie.get('token'))
            Cookie.remove('token')
        }

    }
    else{
        auth=true
    }
    return {
        type: 'SET_TOKEN',
        token: localStorage.getItem('token') === '' ? null : localStorage.getItem('token'),
        auth:auth
    }
}
export const removeToken = (history)=>{
    localStorage.removeItem('token')
    
    return{
        type:'REMOVE_TOKEN',
        token:null,
        auth:false
    }
}
export const getUser = (dispatch)=>{
    return async ()=>{
        const response = await axios.get('/users/getUser')
        dispatch({type:'GET_USER',payload:response.data})
    }
}
