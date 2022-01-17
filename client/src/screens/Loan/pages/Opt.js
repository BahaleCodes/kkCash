import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import Input from "../../../shared/components/UIElements/Input/Input";
import ProgressBar from "../../../shared/components/UIElements/ProgressBar/ProgressBar";
import SelectBox from "../../../shared/components/UIElements/SelectBox/SelectBox";
import Spinner from "../../../shared/components/UIElements/Spinner/LoadingSpinner";

import { baseURL } from "../../../URI";
import { useAuth } from "../../../shared/hooks/auth-hook";

const URL = baseURL;

const Opt = (props) => {
    const { state } = props.location;
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState({
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
        setLoading(true);
        await axios
            .post(`${URL}signup`,
                {
                    "first_name": "Teddy",
                    "last_name": "Bear",
                    "email": "teddy98144@gmail.com",
                    "phone_number": "0987685186",
                    "idNum": "9099998920112",
                    "home_language": "Sesotho",
                    "marital_status": "Married",
                    "home_status": "Owner",
                    "dependents": 2,
                    "password": "asdfghaSa@1"
                })
            .then(response => {
                setDone(true);
                response.json();
            })
            .catch(error => {
                setLoading(false);
                const str = error.response.data.error;
                const errMes = str.split(':').pop();
                setError(true);
                setData({
                    ...data,
                    errorMessage: errMes
                });
            })
    }
    const errorDiv = (
        <div className='body-padding text-center' style={{ margin: "10rem" }}>
            <h1>Error</h1>
            <h2>{data.errorMessage}</h2>
            <a href='/loan-personal' className='btn-custom' >Try again </a>
        </div>
    );
    const loadingDiv = (
        <div className='body-padding text-center' style={{ margin: "10rem" }}>
            <Spinner />
        </div>
    );
    const doneDiv = (
        <div className='body-padding text-center' style={{ margin: "10rem" }}>
            <h2>DONE</h2>
        </div>
    );
    const optDiv = (
        <div className='body-padding'>
            <h2>OPT</h2>
            <ProgressBar width='20%' step={"2"} />
            
            <div className='btns'>
                <button onClick={data.personalBack} className='btn-custom-neg'>Back</button>
                <button onClick={handleSubmit} className='btn-custom' >Next</button>
            </div>
        </div>
    );
    return (
        <div className='container'>
            {!loading && !done && !error && optDiv}
            {loading && loadingDiv}
            {done && doneDiv}
            {error && errorDiv}
        </div>

    )
}

export default Opt;