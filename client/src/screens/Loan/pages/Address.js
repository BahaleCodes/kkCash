import React, { useContext, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import Input from "../../../shared/components/UIElements/Input/Input";
import ProgressBar from "../../../shared/components/UIElements/ProgressBar/ProgressBar";
import SelectBox from "../../../shared/components/UIElements/SelectBox/SelectBox";
import Spinner from "../../../shared/components/UIElements/Spinner/LoadingSpinner";

import { baseURL } from "../../../URI";
import { AuthContext } from "../../../shared/context/auth-context";

const URL = baseURL;

const Address = () => {
    const auth = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState({
        street_name: "",
        suburb: "",
        city: "",
        province: "",
        postal_code: "",
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
            .post(`${URL}address/create/${auth.userId}`,
                {
                    "street": "123 Mollo Blvd",
                    "suburb": "Bahaleng",
                    "city": "Kompton",
                    "province": "Gauteng",
                    "postal_code": "0187"
                    // "street": data.street_name,
                    // "suburb": data.suburb,
                    // "city": data.city,
                    // "province": data.province,
                    // "postal_code": data.postal_code
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
            <a href={`/loan-address/${auth.userId}`} className='btn-custom' >Try again </a>
            <a href='/auth' className="btn-custom" >Log in</a>
        </div>
    );
    const loadingDiv = (
        <div className='body-padding text-center' style={{ margin: "10rem" }}>
            <Spinner />
        </div>
    );
    const doneDiv = (
        <div className='body-padding text-center' style={{ margin: "10rem" }}>
            <h1>Your information was successfully saved, please continue on to the next section</h1>
            <NavLink to={`/loan-employment/${auth.userId}`} className={'btn-custom'}>Continue</NavLink>
        </div>
    );
    const addressDiv = (
        <div className="body-padding">
            <h2>Current Address</h2>
            <ProgressBar width='25%' step={"3"} />
            <Input value={data.street_name} name='street_name' placeholder='Street Name' type='Text' onChange={handleInputChange} />
            <Input value={data.suburb} name='suburb' placeholder='Suburb' type='Text' onChange={handleInputChange} />
            <Input value={data.city} name='city' placeholder='City' type='Text' onChange={handleInputChange} />
            <SelectBox value={data.province} name='province' placeholder='Province' onChange={handleInputChange} questions={[
                "Eastern Cape",
                "Free State",
                "Gauteng",
                "KwaZulu-Natal",
                "Limpopo",
                "Mpumalanga",
                "Northern Cape",
                "North West",
                "Western Cape"
            ]} />
            <Input value={data.postal_code} name='postal_code' placeholder='Postal Code' type='Number' onChange={handleInputChange} />
            <div className='btns'>
                <a href='/' className='btn-custom-neg'>Cancel</a>
                <button onClick={handleSubmit} className='btn-custom'>Next</button>
            </div>
        </div>
    )
    return (
        <div className='container'>
            {!loading && !done && !error && addressDiv}
            {loading && loadingDiv}
            {done && doneDiv}
            {error && errorDiv}
        </div>
    )
}

export default Address;