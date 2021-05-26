export const resetFormHandler = ()=>{
    return {type:'RESET_FORM'}
}

export const OnChangeHandler = (payload)=>{
    return{
        type:'ON_CHANGE',
        payload
    }
}