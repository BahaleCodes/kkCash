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

import { useAuth } from "../../shared/hooks/auth-hook";

// const baseURL = 'https://kk-cash-back.herokuapp.com/api/';
const baseURL = 'http://localhost:8000/api/';

const Loan = (props) => {
    const { token, userId } = useAuth();
    const { state } = props.location;
    const [data, setData] = useState({
        loading: false,
        error: false,
        done: false,
        concent: false,
        reject: false,
        inputError: false,
        applied: false,
        errorMessage: "",

        loanAmount: null,
        loanDue: null,
        loanDuration: null,

        street_name: null,
        suburb: null,
        city: null,
        province: null,
        postalcode: null,

        emp_status: null,
        gross_income: null,
        net_income: null,
        income_frequency: null,
        salary_day: null,
        other_salary_day: null,

        work_number: null,

        university: null,
        other_university: null,
        academic_year: null,
        other_academic_year: null,
        course_duration: null,
        other_course_duration: null,

        division: null,
        service_time: null,
        other_service_time: null,

        emp_type: null,
        emplr_name: null,
        emp_industry: null,
        other_emp_industry: null,
        emp_position: null,
        other_emp_position: null,
        time_with_employer: null,
        other_time_with_employer: null,
        emp_duration: null,

        monthly_rates: null,
        groceries: null,
        commuting_costs: null,
        loan_repayments: null,
        child_maintenance: null,
        desp_income: null,

        bank_name: null,
        other_bank: null,
        acc_num: null,
        acc_type: null,
        other_acc_type: null,
        branch_code: null,
        acc_holder: null,

        personalData: false,
        optData: false,
        addressData: true,
        bankData: false,
        employmentData: false,
        financesData: false,
        formDone: false,
    });

    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };
    const handleConcent = (e) => {
        // e.preventDefault();
        fetch(`${baseURL}address/by/user/${userId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then((res) => {
                if (res[0]) {
                    setData({
                        ...data,
                        street_name: res[0].street,
                        suburb: res[0].suburb,
                        city: res[0].city,
                        province: res[0].province,
                        postalcode: res[0].postal_code,
                        addressId: res[0]._id,
                        addressData: true,
                        concent: true,
                        reject: false
                    });
                }
                setData({
                    ...data,
                    concent: true,
                    reject: false
                })
            })
    };
    const handleRejection = (e) => {
        e.preventDefault();
        setData({
            ...data,
            concent: false,
            reject: true
        });
        console.log(data);
    };
    const addressNext = async (e) => {
        e.preventDefault();
        setData({
            ...data,
            loading: true
        });
        await axios
            .post(`${baseURL}address/create/${userId}`,
                {
                    "street": data.street_name,
                    "suburb": data.suburb,
                    "city": data.city,
                    "province": data.province,
                    "postal_code": data.postalcode
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }
            )
            .then(() => {
                fetch(`${baseURL}employment/by/user/${userId}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    })
                    .then(response => response.json())
                    .then((res) => {
                        if (res[0]) {
                            setData({
                                ...data,
                                emp_status: res[0].emp_status,
                                gross_income: res[0].gross_income,
                                net_income: res[0].net_income,
                                income_frequency: res[0].income_frequency,
                                salary_day: res[0].salary_day,
                                work_number: res[0].work_number,
                                university: res[0].university,
                                academic_year: res[0].academic_year,
                                course_duration: res[0].course_duration,
                                division: res[0].division,
                                service_time: res[0].service_time,
                                emp_type: res[0].emp_type,
                                emplr_name: res[0].employer_name,
                                emp_industry: res[0].emp_industry,
                                emp_position: res[0].emp_position,
                                time_with_employer: res[0].time_with_employer,
                                emp_duration: res[0].emp_duration,
                                empId: res[0]._id,
                                addressData: false,
                                employmentData: true
                            });
                        }
                        setData({
                            ...data,
                            addressData: false,
                            employmentData: true
                        })
                    })
                //         setData({
                //             ...data,
                //             loading: false,
                //             addressData: false,
                //             employmentData: true
                //         });
            })
            .catch(error => {
                setData({
                    ...data,
                    error: true,
                    errorMessage: error
                });
            });
        // setData({
        //     ...data,
        //     addressData: false,
        //     employmentData: true
        // });
    };
    const employmentNext = async (e) => {
        e.preventDefault();
        setData({
            ...data,
            loading: true
        });
        await axios
            .post(`${baseURL}employment/create/${userId}`,
                {
                    "emp_status": data.emp_status,
                    "gross_income": data.gross_income,
                    "net_income": data.net_income,
                    "income_frequency": data.income_frequency,
                    "salary_day": `${data.salary_day} - ${data.other_salary_day}`,
                    "work_number": data.work_number,
                    "university": `${data.university} - ${data.other_university}`,
                    "academic_year": `${data.academic_year} - ${data.other_academic_year}`,
                    "course_duration": `${data.course_duration} - ${data.other_course_duration}`,
                    "division": data.division,
                    "service_time": `${data.service_time} - ${data.other_service_time}`,
                    "emp_type": data.emp_type,
                    "employer_name": data.employer_name,
                    "emp_industry": `${data.emp_industry} - ${data.other_emp_industry}`,
                    "emp_position": `${data.emp_position} - ${data.other_emp_position}`,
                    "time_with_employer": `${data.time_with_employer} - ${data.other_time_with_employer}`,
                    "emp_duration": data.emp_duration
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }
            )
            .then(() => {
                fetch(`${baseURL}finances/by/user/${userId}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    })
                    .then(response => response.json())
                    .then((res) => {
                        if (res[0]) {
                            setData({
                                ...data,
                                monthly_rates: res[0].monthly_rates,
                                groceries: res[0].groceries,
                                commuting_costs: res[0].commuting_costs,
                                loan_repayments: res[0].loan_repayments,
                                child_maintenance: res[0].child_maintenance,
                                desp_income: res[0].desp_income,
                                finId: res[0]._id,
                                employmentData: false,
                                financesData: true
                            });
                        }
                        setData({
                            ...data,
                            employmentData: false,
                            financesData: true
                        })
                    })
                //         setData({
                //             ...data,
                //             loading: false,
                //             employmentData: false,
                //             financesData: true
                //         });
            })
            .catch(error => {
                setData({
                    ...data,
                    error: true,
                    errorMessage: error
                });
            });
        // setData({
        //     ...data,
        //     employmentData: false,
        //     financesData: true
        // });
    };
    const financesNext = async (e) => {
        e.preventDefault();
        setData({
            ...data,
            loading: true
        });
        await axios
            .post(`${baseURL}finances/create/${userId}`,
                {
                    "monthly_rates": data.monthly_rates,
                    "groceries": data.groceries,
                    "commuting_costs": data.commuting_costs,
                    "loan_repayments": data.loan_repayments,
                    "child_maintenance": data.child_maintenance,
                    "desp_income": parseInt(data.net_income) - (
                        parseInt(data.monthly_rates)
                        + parseInt(data.groceries)
                        + parseInt(data.commuting_costs)
                        + parseInt(data.loan_repayments)
                        + parseInt(data.child_maintenance)
                    ),
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }
            )
            .then(() => {
                fetch(`${baseURL}bank/by/user/${userId}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    })
                    .then(response => response.json())
                    .then((res) => {
                        if (res[0]) {
                            setData({
                                ...data,
                                bank_name: res[0].bank_name,
                                acc_num: res[0].acc_num,
                                acc_type: res[0].acc_type,
                                branch_code: res[0].branch_num,
                                acc_holder: res[0].acc_holder,
                                bankId: res[0]._id,
                                financesData: false,
                                bankData: true
                            });
                        }
                        setData({
                            ...data,
                            financesData: false,
                            bankData: true
                        })
                    })
                //         setData({
                //             ...data,
                //             financesData: false,
                //             bankData: true
                //         });
            })
            .catch(error => {
                setData({
                    ...data,
                    error: true,
                    errorMessage: error
                });
            });
        // setData({
        //     ...data,
        //     financesData: false,
        //     bankData: true
        // });
    };
    const bankNext = async (e) => {
        e.preventDefault();
        setData({
            ...data,
            loading: true
        });
        await axios
            .post(`${baseURL}bank/create/${userId}`,
                {
                    "bank_name": data.bank_name,
                    "acc_num": data.acc_num,
                    "acc_type": data.acc_type,
                    "branch_num": data.branch_code,
                    "acc_holder": data.acc_holder
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
                    formData: true
                });
            })
            .catch(error => {
                setData({
                    ...data,
                    error: true,
                    errorMessage: error
                });
            });
        // setData({
        //     ...data,
        //     bankData: false,
        //     formDone: true
        // });
    };

    // const personalBack = (e) => {
    //     e.preventDefault();
    //     setData({
    //         ...data,
    //         personalData: true,
    //         optData: false
    //     });
    // };
    const optBack = (e) => {
        e.preventDefault();
        setData({
            ...data,
            optData: true,
            addressData: false
        });
    };
    const addressBack = (e) => {
        e.preventDefault();
        setData({
            ...data,
            addressData: true,
            employmentData: false
        });
        console.log(data);
    };
    const employmentBack = (e) => {
        e.preventDefault();
        setData({
            ...data,
            employmentData: true,
            financesData: false
        });
    };
    const financesBack = (e) => {
        e.preventDefault();
        setData({
            ...data,
            financesData: true,
            bankData: false
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post(`${baseURL}loan/create/${userId}`,
                {
                    "amount": data.amount,
                    "duration": data.duration,
                    "repay_date": data.repay_date,
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
            {/* <h3>If this error persists then it is possibly caused by an application that was inturupted.</h3> */}
            {/* <a href={`/${userId}/profile`} >Please proceed to </a> */}
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
                        data.concent
                            ? <div>
                                <h4>We appreciate you trusting us with your personal information.</h4>
                                <p>Please fill in the following form with your information.</p>
                                <h3>Loan Duration: {state.duration} days</h3>
                                <h3>Repayment Date: {state.repaymentDay}</h3>
                                {/* <h3>Loaned Amount: R{data.loanAmount}</h3> */}
                                <h3>Amount Due: R{state.amount_due}</h3>
                                {/* <h3>Interest Rate: {parseFloat(rate) * 100}%</h3> */}
                                {/* <hr  /> */}

                                <form className='form-section' validate="true" onSubmit={handleSubmit}>
                                    {
                                        !token &&
                                        <React.Fragment>
                                            <Auth />
                                        </React.Fragment>
                                    }
                                    {/* {!data.loading && !data.error && !data.done && !data.reject && !data.optData && !data.bankData && !data.addressData && !data.employmentData && !data.financesData && !data.formDone && data.personalData &&
                                        <Personal
                                            firstName={data.firstName}
                                            lastName={data.lastName}
                                            idNum={data.idNum}
                                            homeLanguage={data.homeLanguage}
                                            maritalStatus={data.maritalStatus}
                                            email={data.email}
                                            password={data.password}
                                            handleInputChange={handleInputChange}
                                            personalNext={personalNext}
                                        />
                                    } */}
                                    {/* {!data.loading && !data.error && !data.done && !data.reject && !data.bankData && !data.employmentData && !data.addressData && !data.financesData && !data.formDone && data.personalData && !token &&
                                        <Opt
                                            phoneNumber={data.phoneNumber}
                                            homeStatus={data.homeStatus}
                                            dependents={data.dependents}
                                            handleInputChange={handleInputChange}
                                            personalBack={personalBack}
                                            optNext={optNext}
                                        />
                                        <React.Fragment>
                                            <Auth />
                                        </React.Fragment>
                                    } */}
                                    {!data.loading && !data.error && !data.done && !data.reject && !data.optData && !data.employmentData && !data.addressData && !data.financesData && !data.formDone && data.bankData &&
                                        <Bank
                                            bank_name={props.bank_name}
                                            other_bank={props.other_bank}
                                            acc_num={props.acc_num}
                                            branch_code={props.branch_code}
                                            acc_type={props.acc_type}
                                            other_acc_type={props.other_acc_type}
                                            acc_holder={props.acc_holder}
                                            handleInputChange={handleInputChange}
                                            financesBack={financesBack}
                                            bankNext={bankNext}
                                        />
                                    }
                                    {!data.loading && !data.error && !data.done && !data.reject && !data.optData && !data.bankData && !data.employmentData && !data.financesData && !data.formDone && data.addressData &&
                                        <Address
                                            street_name={data.street_name}
                                            suburb={data.suburb}
                                            city={data.city}
                                            province={data.province}
                                            postalcode={data.postalcode}
                                            optBack={optBack}
                                            addressNext={addressNext}
                                            handleInputChange={handleInputChange}
                                        />
                                    }
                                    {!data.loading && !data.error && !data.done && !data.reject && !data.optData && !data.bankData && !data.addressData && !data.financesData && !data.formDone && data.employmentData &&
                                        <Employment
                                            emp_status={data.emp_status}
                                            gross_income={data.gross_income}
                                            net_income={data.net_income}
                                            income_frequency={data.income_frequency}
                                            salary_day={data.salary_day}
                                            other_salary_day={data.other_salary_day}
                                            university={data.university}
                                            other_university={data.other_university}
                                            academic_year={data.academic_year}
                                            other_academic_year={data.other_academic_year}
                                            course_duration={data.course_duration}
                                            other_course_duration={data.other_course_duration}
                                            division={data.division}
                                            service_time={data.service_time}
                                            other_service_time={data.other_service_time}
                                            emp_type={data.emp_type}
                                            emplr_name={data.emplr_name}
                                            emp_industry={data.emp_industry}
                                            other_emp_industry={data.other_emp_industry}
                                            emp_position={data.emp_position}
                                            other_emp_position={data.other_emp_position}
                                            time_with_employer={props.time_with_employer}
                                            other_time_with_employer={data.other_time_with_employer}
                                            emp_duration={data.emp_duration}
                                            work_number={data.work_number}
                                            handleInputChange={handleInputChange}
                                            addressBack={addressBack}
                                            employmentNext={employmentNext}
                                        />
                                    }
                                    {!data.loading && !data.error && !data.done && !data.reject && !data.optData && !data.bankData && !data.addressData && !data.employmentData && !data.formDone && data.financesData &&
                                        <Finances
                                            gross_income={data.gross_income}
                                            net_income={data.net_income}
                                            monthly_rates={data.monthly_rates}
                                            groceries={data.groceries}
                                            commuting_costs={data.commuting_costs}
                                            loan_repayments={data.loan_repayments}
                                            child_maintenance={data.child_maintenance}
                                            desp_income={data.desp_income}
                                            employmentBack={employmentBack}
                                            financesNext={financesNext}
                                            handleInputChange={handleInputChange}
                                        />
                                    }
                                    {!data.applied && !data.loading && !data.error && !data.done && !data.reject && !data.optData && !data.bankData && !data.addressData && !data.employmentData && !data.financesData && data.formDone && formComplete}
                                    {!data.loading && !data.error && !data.done && data.reject && rejectDiv}
                                    {data.loading && <Spinner />}
                                    {data.error && inputErrorForm}
                                    {data.applied &&
                                        <React.Fragment>
                                            <h2>All done</h2>
                                            <h3>Go to Profile</h3>
                                            <Link to={`/${userId}/profile`} className='btn-custom'>Profile</Link>
                                        </React.Fragment>
                                    }
                                </form>
                            </div>
                            : data.reject
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

export default Loan;