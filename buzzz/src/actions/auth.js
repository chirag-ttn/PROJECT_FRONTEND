import Cookie from 'js-cookie'
import axios from 'axios'
import Api from '../Api/localhost'

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
export const removeToken = ()=>{
    localStorage.removeItem('token')
    return{
        type:'REMOVE_TOKEN',
        token:null,
        auth:false
    }
}
export const getUser = (dispatch)=>{
    return async ()=>{
        const response = await axios.get('/api/secure/getUserData')
        dispatch({type:'GET_USER',payload:response.data})
    }
}
