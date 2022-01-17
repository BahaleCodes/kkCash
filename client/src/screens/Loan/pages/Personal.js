import React, { useContext, useState } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";

import Input from "../../../shared/components/UIElements/Input/Input";
import ProgressBar from "../../../shared/components/UIElements/ProgressBar/ProgressBar";
import SelectBox from "../../../shared/components/UIElements/SelectBox/SelectBox";
import LoadingSpinner from "../../../shared/components/UIElements/Spinner/LoadingSpinner";

import { baseURL } from "../../../URI";
import { AuthContext } from "../../../shared/context/auth-context";

const URL = baseURL;

const Personal = () => {
    const auth = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        homeLanguage: "",
        maritalStatus: "",
        email: "",
        password: "",
        phoneNumber: "",
        homeStatus: "",
        dependents: "",
        errorMessage: ""
    });
    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await axios
            .post(`${URL}signup`,
                {
                    "first_name": "Teddy",
                    "last_name": "Bear",
                    "email": "teddy98144@gmail.com",
                    "phone_number": "0667685186",
                    "idNum": "9099998928112",
                    "home_language": "Sesotho",
                    "marital_status": "Married",
                    "home_status": "Owner",
                    "dependents": 2,
                    "password": "asdfghaSa@1"
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            .then(response => {
                setLoading(false);
                setDone(true);
                console.log(response.data.userId);
                auth.login(response.data.userId, response.data.token);
                response.json();
            })
            .catch(error => {
                setLoading(false);
                if (error.response) {
                    const str = error.response.data.error;
                    const errMes = str.split(':').pop();
                    setError(true);
                    setData({
                        ...data,
                        errorMessage: errMes
                    });
                }
                else {
                    
                }

            })
    }

    const errorDiv = (
        <div className='body-padding text-center' style={{ margin: "10rem" }}>
            <h1>Error</h1>
            <h2>{data.errorMessage}</h2>
            <a href='/loan-registration' className='btn-custom' >Try again </a>
            <a href='/auth' className="btn-custom" >Log in</a>
        </div>
    );
    const loadingDiv = (
        <div className='body-padding text-center' style={{ margin: "10rem" }}>
            <LoadingSpinner />
        </div>
    );
    const doneDiv = (
        <div className='body-padding text-center' style={{ margin: "10rem" }}>
            <h1>Your information was successfully saved, please continue on to the next section</h1>
            <NavLink to={`/loan-address/${auth.userId}`} className={'btn-custom'}>Continue</NavLink>
        </div>
    );

    const registrationDiv = (
        <div className="body-padding">
            <div className='body-padding'>
                <h2>Personal Information</h2>
                <ProgressBar width='10%' step={"1"} />
                <Input
                    value={data.firstName}
                    name="firstName"
                    placeholder="First Name"
                    type="Text"
                    onChange={handleInputChange} />
                <br />
                <Input value={data.lastName} name='lastName' placeholder='Surname' type='Text' onChange={handleInputChange} />
                <br />
                <Input maxLength={"13"} minLength={"3"} value={data.idNum} name='idNum' placeholder='ID Number' type="Number" onChange={handleInputChange} />
                <br />
                <SelectBox value={data.homeLanguage} name='homeLanguage' placeholder='Home Language' onChange={handleInputChange} questions={[
                    "English",
                    "Afrikaans",
                    "Northern Sotho",
                    "Sesotho",
                    "isiZulu",
                    "isiXhosa",
                    "isiNdebele",
                    "Setswana",
                    "Sepedi",
                    "siSwathi",
                    "Tshivenda",
                    "Xitsonga",
                    "Other"
                ]} />
                <br />
                <SelectBox value={data.maritalStatus} name='maritalStatus' placeholder='Marital Status' onChange={handleInputChange} questions={[
                    "Married",
                    "Single",
                    "Divorced",
                    "Living Together",
                    "Separated",
                    "Widowed",
                    "Other"
                ]} />
                <br />
                <Input value={data.email} name='email' placeholder='Email Address' type="email" onChange={handleInputChange} />
                <br />
                <Input value={data.password} name='password' placeholder='Password' type='password' onChange={handleInputChange} />
                <br />
                <Input value={data.phoneNumber} name='phoneNumber' placeholder='Mobile Number' type='Number' onChange={handleInputChange} />
                <br />
                <SelectBox value={data.homeStatus} name='homeStatus' placeholder='Home Status' onChange={handleInputChange} questions={[
                    "Owner Occupier",
                    "Living with Parents/Family",
                    "Tenant Furnished",
                    "Tenant Unfurnished",
                    "Council Tenant",
                    "Tenant",
                    "Joint Owner",
                    "Other"
                ]} />
                <br />
                <SelectBox value={data.dependents} name='dependents' placeholder='Number of Dependents' onChange={handleInputChange} questions={[
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10"
                ]} />
                <br />
                <h3>Please read this important <a href='/privacy'>legal information</a></h3>
                <div>
                    <div className='btns'>
                        <a href='/' className='btn-custom-neg'>Back</a>
                        <button onClick={handleSubmit} className='btn-custom' >Next</button>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
    return (
        <div className="container">
            {!loading && !done && !error && registrationDiv}
            {loading && loadingDiv}
            {done && doneDiv}
            {error && errorDiv}
        </div>
    )
}

export default Personal;