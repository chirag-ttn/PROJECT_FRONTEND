export const setFormError = (errors)=>{
    console.log(errors.alert)
    return{
        type:"SET_FORM_ERROR",
        errors
    }
}