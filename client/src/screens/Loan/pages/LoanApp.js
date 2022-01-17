import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

import classes from './Loan.module.css';
import ProgressBar from "../../shared/components/UIElements/ProgressBar/ProgressBar";
import Address from "./Components/Address";
import Employment from "./Components/Employment";
import Finances from "./Components/Finances";
import Bank from "./Components/Bank";

import Spinner from "../../shared/components/UIElements/Spinner/LoadingSpinner";
import Auth from "../Auth/Auth";
import { baseURL } from "../../URI";

import { useAuth } from "../../shared/hooks/auth-hook";

const URL = baseURL;

const LoanApp = (props) => {
    const { token, userId } = useAuth();
    const [viewAddress, setViewAddress] = useState(false);
    const [viewEmployment, setViewEmployment] = useState(false);
    const [viewFinances, setViewFinances] = useState(false);
    const [viewBank, setViewBank] = useState(false);
    const [loading, setLoading] = useState(false);
    const [consent, setConsent] = useState(false);
    const [reject, setReject] = useState(false);
    const { state } = props.location;
    let [data, setData] = useState({
        loading: false,
        error: false,
        done: false,
        concent: false,
        reject: false,
        inputError: false,
        applied: false,
        errorMessage: "",

        loanAmount: "",
        loanDue: "",
        loanDuration: "",

        street_name: "",
        suburb: "",
        city: "",
        province: "",
        postalcode: "",

        emp_status: "",
        gross_income: "",
        net_income: "",
        income_frequency: "",
        salary_day: "",
        other_salary_day: "",

        work_number: "",

        university: "",
        other_university: "",
        academic_year: "",
        other_academic_year: "",
        course_duration: "",
        other_course_duration: "",

        division: "",
        service_time: "",
        other_service_time: "",

        emp_type: "",
        emplr_name: "",
        emp_industry: "",
        other_emp_industry: "",
        emp_position: "",
        other_emp_position: "",
        time_with_employer: "",
        other_time_with_employer: "",
        emp_duration: "",

        monthly_rates: "",
        groceries: "",
        commuting_costs: "",
        loan_repayments: "",
        child_maintenance: "",
        desp_income: "",

        bank_name: "",
        other_bank: "",
        acc_num: "",
        acc_type: "",
        other_acc_type: "",
        branch_code: "",
        acc_holder: "",

        formDone: false,
    });
    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };
    const handleConcent = async (e) => {
        e.preventDefault();
        setConsent(true);
        console.log(data);
    };
    const handleRejection = (e) => {
        e.preventDefault();
        setReject(true);
        console.log(data);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post(`${URL}loan/create/${userId}`,
                {
                    "amount": state.amount,
                    "duration": state.duration,
                    "repay_date": state.repaymentDay,
                    "interest_rate": data.interest_rate
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }
            )
            .then(() => {
                setData({
                    ...data,
                    bankData: false,
                    formData: true,
                    applied: true
                });
            })
            .catch(error => {
            });
    };

    const formComplete = (
        <div className='body-padding'>
            <h2>Application Complete</h2>
            <ProgressBar width='100%' step="7" />
            <h3>Your loan application has been sent for review.</h3>
            <h4>Please keep your eyes open for further confirmation on the results of your loan application</h4>
            <h4>Once approved, you will be notified with an Email and shortly, your R{state.amount} will be paid into your bank account.</h4>
            <button className='btn-custom' type='submit'>
                Submit
            </button>
        </div>
    );
    const rejectDiv = (
        <div>Rejected</div>
    );
    const inputErrorForm = (
        <div className='body-padding'>
            <h2>We have ran into a error</h2>
            <h3>We sincerely apologize for the inconvenience, the error has been logged to oue development team.</h3>
            <h4>Please proceed to your profile page to continue the application there while our developers fix the error.</h4>
            <Link to={`/${userId}/profile`} className='btn-custom'>Profile</Link>
        </div>
    )
    return (
        <div style={{
            marginTop: "9rem"
        }} className='container'>
            <div className='text-center'>
                <div className='section-title'>
                    <h2>Loan Application</h2>
                    {
                        consent
                            ? <div>
                                <h4>We appreciate you trusting us with your personal information.</h4>
                                <p>Please fill in the following form with your information.</p>
                                <h3>Loan Duration: {state.duration} days</h3>
                                <h3>Repayment Date: {state.repaymentDay}</h3>
                                {/* <h3>Loaned Amount: R{data.loanAmount}</h3> */}
                                <h3>Amount Due: R{state.amount_due}</h3>
                                {/* <h3>Interest Rate: {parseFloat(rate) * 100}%</h3> */}
                                {/* <hr  /> */}
                            </div>
                            : reject
                                ? <div>
                                    <h4>Personal Information Concent Rejected</h4>
                                    <h4>Learn more about the <a className={classes.highlight} href='https://www.michalsons.com/focus-areas/privacy-and-data-protection/protection-of-personal-information-act-popia' >Protection of Personal Information Act</a>.</h4>

                                    <a href='/' className='btn-custom' >Home</a>
                                    <br />
                                </div>
                                : <div>
                                    <h4>Please note that we are requiring some personal information for the application.</h4>
                                    <h4>As a result we need your concent to collect such information.</h4>
                                    <button className='btn-custom' onClick={handleConcent} >Yes, I Accept</button>
                                    <br />
                                    <br />
                                    <button className='btn-custom-neg' onClick={handleRejection} >No, I Reject</button>
                                </div>
                    }
                    <br />
                </div>
            </div >
        </div>
    )
}

export default LoanApp;