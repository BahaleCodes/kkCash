import React, { useContext, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import Input from "../../../shared/components/UIElements/Input/Input";
import ProgressBar from "../../../shared/components/UIElements/ProgressBar/ProgressBar";
import SelectBox from "../../../shared/components/UIElements/SelectBox/SelectBox";
import LoadingSpinner from "../../../shared/components/UIElements/Spinner/LoadingSpinner";

import { baseURL } from "../../../URI";
import { AuthContext } from "../../../shared/context/auth-context";
import Card from "../../../shared/components/UIElements/Card/Card";

const URL = baseURL;

const Apply = (props) => {
    const auth = useContext(AuthContext);
    const { state } = props.location;
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState({

        errorMessage: ""
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await axios
            .post(`${URL}address/create/${auth.userId}`,
                {
                    "amount": 900,
                    "duration": "20 days",
                    "repay_date": "21 January 2022",
                    "interest_rate": 0.12
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${auth.token}`
                    }
                }
            )
            .then(response => {
                setLoading(false);
                setDone(true);
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
            <a href={`/loan-apply/${auth.userId}`} className='btn-custom' >Try again </a>
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
            <h1>Your loan application was successfully saved.</h1>
            <h1>Please keep an eye open for any updates from our side regarding the loan.</h1>
            <h1>If the loan is approved and your information is successfully authenticated, the money will be sent into your account.</h1>
            <NavLink to={`/${auth.userId}/profile`} className={'btn-custom'}>Continue</NavLink>
        </div>
    );
    const applyDiv = (
        <div className='body-padding'>
            <h2>Application Complete</h2>
            <ProgressBar width='100%' step="7" />
            <h2>We appreciate you patience, you information has been successfully saved and store into our database</h2>
            <h2>Please confirm for us one last time the amount and the duration of your loan.</h2>
            <Card >
                <h3>Bitches</h3>
            </Card>
            <button onClick={handleSubmit} className='btn-custom'>Submit</button>
        </div>
    )

    return (
        <div className="container">
            {!loading && !done && !error && applyDiv}
            {loading && loadingDiv}
            {done && doneDiv}
            {error && errorDiv}
        </div>
    )
}

export default Apply;