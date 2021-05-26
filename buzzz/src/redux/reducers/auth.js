const initialState = {
    _id:'',
    token:'',
    auth:false,
    email:'',
    f_name:'',
    l_name:'',
    profile_pic:'',
    profile_id:''
}
export default (state = initialState,action)=>{
    switch(action.type)
    {
        case 'SET_TOKEN':
            return{...state,token:action.token,auth:action.auth}
        case 'REMOVE_TOKEN':
            return{...state,token:action.token,auth:action.auth}
        case 'GET_USER':
            const {payload} = action
            return {...state,
            _id:payload._id,
            f_name:payload.f_name,
            l_name:payload.l_name,
            email:payload.email,
            profile_pic:payload.profile_pic,
            profile_id:payload.profile_id
        };
        default:
            return state
    }
}

