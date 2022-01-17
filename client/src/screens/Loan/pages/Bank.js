import React, { useContext, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import Input from "../../../shared/components/UIElements/Input/Input";
import ProgressBar from "../../../shared/components/UIElements/ProgressBar/ProgressBar";
import SelectBox from "../../../shared/components/UIElements/SelectBox/SelectBox";
import LoadingSpinner from "../../../shared/components/UIElements/Spinner/LoadingSpinner";

import { baseURL } from "../../../URI";
import { AuthContext } from "../../../shared/context/auth-context";

const URL = baseURL;

const Bank = () => {
    const auth = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState({
        bank_name: "",
        other_bank: "",
        acc_type: "",
        other_acc_type: "",
        branch_code: "",
        acc_holder: "",
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
            .post(`${URL}bank/create/${auth.userId}`,
                {
                    "bank_name": "ABSA",
                    "acc_num": "987654321012",
                    "acc_type": "Savings",
                    "branch_num": "234567",
                    "acc_holder": "Thabo Mponya"
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
            <a href={`/loan-bank/${auth.userId}`} className='btn-custom' >Try again </a>
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
            <NavLink to={`/loan-bank/${auth.userId}`} className={'btn-custom'}>Continue</NavLink>
        </div>
    );
    const bankDiv = (
        <div className="body-padding" >
            <h2>Bank Details</h2>
            <ProgressBar width='90%' step='6' />
            <SelectBox value={data.bank_name} name='bank_name' placeholder='Bank Name' onChange={handleInputChange} questions={[
                "Standard Bank",
                "FirstRand",
                "Absa",
                "Nedband",
                "Investec",
                "Capitec",
                "Discovery bank",
                "TymeBank",
                "Other"
            ]} />
            {
                data.bank_name === "Other"
                    ? <Input value={data.other_bank} name='other_bank' placeholder='Your Bank Name' onChange={handleInputChange} />
                    : ''
            }
            <Input value={data.acc_num} name='acc_num' type='Number' placeholder='Account Number' onChange={handleInputChange} />
            <SelectBox value={data.acc_type} name='acc_type' placeholder='Account Type' onChange={handleInputChange} questions={[
                "Cheque",
                "Savings",
                "Other"
            ]} />
            {
                data.acc_type === "Other"
                    ? <Input value={data.other_acc_type} name='other_acc_type' placeholder='Your Account Type' onChange={handleInputChange} />
                    : ''
            }
            <Input value={data.branch_code} name='branch_code' placeholder='Branch Code' onChange={handleInputChange} />
            <Input value={data.acc_holder} name='acc_holder' placeholder='Account holder' onChange={handleInputChange} />
            <div className='btns'>
                <NavLink to={'/'} className='btn-custom-neg'>Cancel</NavLink>
                <button onClick={handleSubmit} className='btn-custom'>Next</button>
            </div>
        </div>
    )
    return (
        <div className='container'>
            {!loading && !done && !error && bankDiv}
            {loading && loadingDiv}
            {done && doneDiv}
            {error && errorDiv}
        </div>
    )
}

export default Bank;