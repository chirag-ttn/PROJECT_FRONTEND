const initialState = {
    firstname: '',
    lastname: '',
    designation: 'co-founder',
    gender: 'male',
    dob: '',
    city: '',
    state: 'haryana',
    zip: ''
}

export default (state=initialState,action)=>{
    switch(action.type){
        case "ON_CHANGE":
            return {...state,[action.payload.name]:action.payload.value}
        case "RESET_FORM":
            return {state,...initialState}
        default:
            return state
    }
}