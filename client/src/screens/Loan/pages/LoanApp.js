import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from '../Loan.module.css';

const LoanApp = (props) => {
    const [reject, setReject] = useState(false);
    const { state } = props.location;
    let [data, setData] = useState({
        loading: false,
        error: false,
        done: false,
        concent: false,
        reject: false,
        amount: "",
        duration: "",
        repay_date: "",
        interest_rate: 0.3
    });
    useEffect(() => {
        setData({
            ...data,
            amount: state.amount,
            duration: state.duration,
            repay_date: state.repaymentDay,
        });
    }, [data, state.amount, state.duration, state.repaymentDay]);

    const handleRejection = (e) => {
        e.preventDefault();
        setReject(true);
    };
    return (
        <div style={{
            marginTop: "9rem"
        }} className='container'>
            <div className='text-center'>
                <div className='section-title'>
                    <h2>Loan Application</h2>
                    {
                        reject
                            ? <div>
                                <h4>Personal Information Concent Rejected</h4>
                                <h4>Learn more about the <a className={classes.highlight} href='https://www.michalsons.com/focus-areas/privacy-and-data-protection/protection-of-personal-information-act-popia' >Protection of Personal Information Act</a>.</h4>
                                <a href='/' className='btn-custom' >Home</a>
                                <br />
                            </div>
                            : <div>
                                <h4>Please note that we are requiring some personal information for the application.</h4>
                                <h4>As a result we need your concent to collect such information.</h4>
                                <h4>We appreciate you trusting us with your personal information.</h4>
                                <p>Please fill in the following form with your information.</p>
                                <h3>Loan Duration: {state.duration} days</h3>
                                <h3>Repayment Date: {state.repaymentDay}</h3>
                                <h3>Amount Due: R{state.amount_due}</h3>
                                <Link to={{
                                    pathname: '/loan-registration',
                                    state: {
                                        amount_due: state.amount_due,
                                        duration: state.duration,
                                        amount: state.amount,
                                        interest: state.interest,
                                        rate: state.rate,
                                        repaymentDay: state.repaymentDay
                                    }
                                }} className='btn-custom' >Yes, I Accept</Link>
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