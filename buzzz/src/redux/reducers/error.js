const initialState = {
    firstname: '',
    lastname: '',
    website: '',
    city: '',
    zip: '',
    alert: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_FORM_ERROR":
            return {
                ...state,
                firstname: action.errors.firstname,
                lastname: action.errors.lastname,
                website: action.errors.website,
                city: action.errors.city,
                zip: action.errors.zip,
                alert: action.errors.alert
            }
        default:
            return state;
    }
}

