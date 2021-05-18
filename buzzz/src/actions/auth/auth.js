import Cookie from 'js-cookie'
export const setToken = () => {
    let auth = false
    if (localStorage.getItem('token') === '' || localStorage.getItem('token') === null) {
        if(Cookie.get('token')!==undefined)
        {
            auth = true
            localStorage.setItem('token',Cookie.get('token'))
            Cookie.remove('token')
        }
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