import { useEffect, useState } from 'react'



let ContactForm = props => {
    const initialState = {
        firstname: '',
        lastname: '',
        designation: 'co-founder',
        website: '',
        gender: 'male',
        dob: '',
        city: '',
        state: 'haryana',
        zip: ''
    }
    const [formState, setformState] = useState(initialState)
    const [error, setError] = useState({
        firstname: '',
        lastname: '',
        website: '',
        city: '',
        zip: '',
        alert:''
    })

    const submitForm = (e) => {
        e.preventDefault()
        if (handleValidation()) {
            props.onSubmit(formState)
            alert("Form submitted");
            setformState(initialState)
        } else {
            console.log(error)
            alert(error.alert)
        }
    }
    const handleChange = (e) => {
        console.log(e.target.value)
        const form = { ...formState }
        const { name, value } = e.target
        form[name] = value
        setformState(form)
    }
    const handleValidation = () => {
        console.log('inside')
        let fields = formState;
        let errors = {};
        let formIsValid = true;

        //firstname lastname city 
        if (!fields.firstname || !fields.lastname || !fields.city || !fields.zip || !fields.website|| !fields.designation|| !fields.gender || !fields.state) {
            formIsValid = false;
            errors.alert = "Please fill all the values";
            setError(errors)
        }
        if (typeof fields.firstname !== "undefined") {
            if (!fields.firstname.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors.firstname = "Only letters";
            }
            setError(errors)
        }
        if (typeof fields.lastname !== "undefined") {
            if (!fields.lastname.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors.lastname = "Only letters";
            }
            setError(errors)
        }
        if (typeof fields.city !== "undefined") {
            if (!fields.city.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors.city = "Only letters";
            }
            setError(errors)
        }
        if (typeof fields.zip !== "undefined") {
            if (!fields.zip.match(/^[0-9]+$/)) {
                formIsValid = false;
                errors.zip = "Only Numbers";
            }
            setError(errors)
        }
        if (typeof fields.website !== "undefined") {
            if (!fields.website.match(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/)) {
                formIsValid = false;
                errors.website = "Please enter a valid url";
            }
            setError(errors)
        }
        return formIsValid
        //website 
    }
    return (
        <form name="profile_form" onSubmit={submitForm}>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="firstname">First Name</label>
                    <input
                        type='text'
                        name="firstname"
                        value={formState.firstname}
                        onChange={handleChange}
                        class="form-control col-sm-12"
                        id="firstname"
                        placeholder="First Name"
                    />
                    <span style={{ color: "red" }}>{error.firstname}</span>

                </div>
                <div class="form-group col-md-4">
                    <label for="lastname">Last Name</label>
                    <input
                        type="text"
                        value={formState.lastname}
                        name="lastname"
                        class="form-control col-sm-12"
                        id="lastname"
                        onChange={handleChange}
                        placeholder="Last Name" />
                </div>
                <span style={{ color: "red" }}>{error.lastname}</span>

            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="inputState">Designation</label>
                    <select id="inputState" value={formState.designation} onChange={handleChange} name="designation" className="form-control">
                        <option selected>Co-Founder</option>
                        <option>SDE-1</option>
                        <option>SDE-2</option>
                        <option>CTO</option>
                    </select>
                </div>
                <div class="form-group col-md-4">
                    <label for="website">My Website</label>
                    <input
                        name="website"
                        type="text"
                        class="form-control"
                        value={formState.website}
                        onChange={handleChange}
                        id="website"
                        placeholder="https://reactjs.org" />
                    <span style={{ color: "red" }}>{error.website}</span>

                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">

                    <label class="col-md-12" for="gender">Gender</label>
                    <select id="gender" value={formState.gender} onChange={handleChange} name='gender' className="form-control">
                        <option selected>Male</option>
                        <option>Female</option>
                    </select>

                </div>
                <div class="form-group col-md-4">
                    <label for="Birthday">DOB</label>
                    <input
                        name="dob"
                        type="date"
                        value={formState.dob}
                        onChange={handleChange}
                        class="form-control"
                        id="Birthday" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="inputCity">City</label>
                    <input
                        name="city"
                        type="text"
                        class="form-control"
                        id="inputCity"
                        onChange={handleChange}
                        value={formState.city}
                    />
                    <span style={{ color: "red" }}>{error.city}</span>

                </div>
                <div class="form-group col-md-2">
                    <label for="inputState">State</label>
                    <select value={formState.state} onChange={handleChange} id="inputState" name='state' className="form-control">
                        <option selected>delhi</option>
                        <option>Up</option>
                        <option>haryana</option>
                    </select>
                </div>
                <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input
                        name="zip"
                        type="number"
                        value={formState.zip}
                        onChange={handleChange}
                        class="form-control"
                        id="inputZip" />
                    <span style={{ color: "red" }}>{error.zip}</span>

                </div>
            </div>
            <div className="form col-md-8 d-flex justify-content-around">
                <button type="submit" class="btn btn-primary form-group col-md-3">Save</button>
                <button type="button"onClick={()=>{
                    setformState(initialState)
                }} class="btn btn-outline-primary form-group col-md-3">Reset All</button>
            </div>
        </form>
    )

}

export default ContactForm;