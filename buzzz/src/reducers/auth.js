const initialState = {
    token:'',
    auth:false,
    email:'',
    f_name:'',
    l_name:'',
    profile_pic:''
}
const authReducer = (state = initialState,action)=>{
    switch(action.type)
    {
        case 'SET_TOKEN':
            
            return{...state,token:action.token,auth:action.auth}
        case 'REMOVE_TOKEN':
            return{...state,token:action.token,auth:action.auth}
        default:
            return state
    }
}

export default authReducer;