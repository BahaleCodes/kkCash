import React, { useEffect, useState, useRef } from "react";
import Input from "../../Components/UI/Input/Input";
import ProgressBar from "../../Components/UI/ProgressBar/ProgressBar";
import SelectBox from "../../Components/UI/SelectBox/SelectBox";

import classes from './Loan.module.css';

const Loan = (props) => {
    const { state } = props.location;
    const [data, setData] = useState({
        loading: false,
        error: false,
        done: false,
        concent: false,
        reject: false,
        inputError: false,
        errorMessage: "",

        loanAmount: null,
        loanDue: null,
        loanDuration: null,

        firstName: null,
        lastName: null,
        idNum: null,
        homeLanguage: null,
        maritalStatus: null,
        email: null,
        password: null,

        street_name: null,
        suburb: null,
        city: null,
        province: null,
        postalcode: null,

        phoneNumber: null,
        opt: null,
        homeStatus: null,
        dependents: null,

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

        personalData: true,
        addressData: false,
        bankData: false,
        employmentData: false,
        optData: false,
        financesData: false,
        formDone: false,
    });
    const confirmHandler = event => {
        event.preventDefault();
    }

    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };
    useEffect(() => {
        setData({
            ...data,
            loanAmount: state.amount,
            loanDuration: state.duration,
            loanDue: state.amount_due
        });
    }, []);
    const handleConcent = (e) => {
        e.preventDefault();
        setData({
            ...data,
            concent: true,
            reject: false
        });
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

    const personalNext = (e) => {
        e.preventDefault();
        let validFName = data.firstName === null
            ? false
            : true
        if (validFName) {
            setData({
                ...data,
                personalData: false,
                addressData: true
            });
        }
        else {
            setData({
                ...data,
                inputError: true,
                errorMessage: "First Name is Required"
            })
        }
    };
    const addressNext = () => {
        setData({
            ...data,
            addressData: false,
            optData: true
        });
    };
    const optNext = () => {
        setData({
            ...data,
            optData: false,
            employmentData: true
        });
    };
    const employmentNext = () => {
        setData({
            ...data,
            employmentData: false,
            financesData: true
        });
    };
    const financesNext = () => {
        setData({
            ...data,
            financesData: false,
            bankData: true
        });
    };
    const bankNext = () => {
        setData({
            ...data,
            bankData: false,
            formDone: true
        });
    };

    const personalBack = () => {
        setData({
            ...data,
            personalData: true,
            addressData: false
        });
    };
    const addressBack = () => {
        setData({
            ...data,
            addressData: true,
            optData: false
        });
        console.log(data);
    };
    const optBack = () => {
        setData({
            ...data,
            optData: true,
            employmentData: false
        });
    };
    const employmentBack = () => {
        setData({
            ...data,
            employmentData: true,
            financesData: false
        });
    };
    const financesBack = () => {
        setData({
            ...data,
            financesData: true,
            bankData: false
        });
    };
    const bankBack = () => {
        setData({
            ...data,
            bankData: true,
            formDone: false
        });
    };

    const form = (
        <div className='body-padding'>
            <h2>Personal Information</h2>
            <ProgressBar width='10%' step={"1"} />
            <form className='form-section' name='LoanApplication' onSubmit={personalNext} validate="true" >
                <Input value={data.firstName} name="firstName" placeholder="First Name" type="Text" onChange={handleInputChange} />
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
                <div>
                    {
                        data.inputError 
                            ? <div>
                                <h4 style={{ color: "red" }} >{data.errorMessage}</h4>
                            </div>
                            : <div className='btns'>
                                <a href='/' className='btn-custom-neg'>Back</a>
                                {/* {
                                    data.email === null && data.password === null && data.maritalStatus === null && data.homeLanguage === null && data.idNum === null && data.lastName === null && data.firstName === null
                                        ? 'Next'
                                        : <button className='btn-custom' >Next</button>
                                } */}
                                <button className='btn-custom' >Next</button>
                            </div>
                    }
                </div>
            </form>
            <br />
        </div>
    );
    const addressForm = (
        <div className='body-padding'>
            <h2>Current Address</h2>
            <ProgressBar width='20%' step={"2"} />
            <form className='form-section' name='bankForm' onSubmit={addressNext} >
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
                <Input value={data.postalcode} name='postalcode' placeholder='Postal Code' type='Number' onChange={handleInputChange} />
                <div className='btns'>
                    <button onClick={personalBack} className='btn-custom-neg'>Back</button>
                    <button className='btn-custom' >Next</button>
                </div>
            </form>
        </div>
    );
    const optFrom = (
        <div className='body-padding'>
            <h2>OPT</h2>
            <ProgressBar width='25%' step={"3"} />
            <form className='form-section' name='OPTForm' onSubmit={optNext} >
                <Input value={data.phoneNumber} name='phoneNumber' placeholder='Mobile Number' type='Number' onChange={handleInputChange} />
                <br />
                <SelectBox value={data.homeStatus} name='homeStatus' placeholder='Home Status' onChange={handleInputChange} questions={[
                    "Owener Occupier",
                    "Living with Parents/Family",
                    "Tenant Furnished",
                    "Tenant Unfurnished",
                    "Concil Tenant",
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
                <div className='btns'>
                    <button onClick={addressBack} className='btn-custom-neg'>Back</button>
                    <button className='btn-custom' >Next</button>
                </div>
            </form>
        </div>
    );
    const empForm = (
        <div className='body-padding'>
            <h2>Employment Information</h2>
            <ProgressBar width='30%' step={"4"} />
            <form className='form-section' name='bankForm'>
                <SelectBox value={data.emp_status} name='emp_status' placeholder='Employee Status' onChange={handleInputChange} questions={[
                    "Employed",
                    "Self Employed",
                    "Student",
                    "HomeMaker",
                    "Retired",
                    "Unemployed",
                    "On Benefits",
                    "Armed Forces"
                ]} />
                <Input value={data.gross_income} name='gross_income' placeholder='Gross Monthly Income (Before Tax)' onChange={handleInputChange} />
                <Input value={data.net_income} name='net_income' placeholder='Net Monthly Income (After Tax)' onChange={handleInputChange} />

                <SelectBox value={data.income_frequency} name='income_frequency' placeholder='Income Frequency' onChange={handleInputChange} questions={[
                    "Monthly",
                    "Twice monthly",
                    "Weekly",
                    "Bi weekly",
                    "Last day of the month",
                    "Last friday of the month",
                    "Twice monthly 15th and 30th"
                ]} />
                <SelectBox value={data.salary_day} name='salary_day' placeholder='Salary Day' onChange={handleInputChange} questions={[
                    "Last Working Day of the Month",
                    "15th of every month",
                    "25th of every month",
                    "Other",
                ]} />
                {
                    data.salary_day === "Other"
                        ? <input value={data.other_salary_day} name='other_salary_day' placeholder="Your Salary Day" onChange={handleInputChange} />
                        : ''
                }
                {
                    data.emp_status === "Self Employed"
                        ? <Input value={data.work_number} name='work_number' placeholder='Work contact number' onChange={handleInputChange} />
                        : ''
                }
                {
                    data.emp_status === "Student"
                        ? <div>
                            <SelectBox value={data.university} name='university' placeholder='University' onChange={handleInputChange} questions={[
                                "The University of Cape Town",
                                "Stellenbosch University",
                                "University of Pretoria",
                                "University of the Witwatersrand",
                                "University of Kwazulu Natal",
                                "University of the Western Cape",
                                "Rhodes University",
                                "The University of South Africa",
                                "University of Johannesburg",
                                "North West University",
                                "University of the Free State",
                                "Nelson Mandela Metropolitan University",
                                "Cape Peninsula University of Technology",
                                "Durban University of Technology",
                                "University of Zululand",
                                "Monash University",
                                "Vaal University of Technology",
                                "Central University of Technology",
                                "Walter Sisulu University",
                                "University of Limpopo",
                                "Tshwane University of Technology",
                                "University of Fort Hare",
                                "Other"
                            ]} />
                            {
                                data.university === "Other"
                                    ? <Input value={data.other_university} name='other_university' placeholder='Your University' onChange={handleInputChange} />
                                    : ''
                            }
                            <SelectBox value={data.academic_year} name='academic_year' placeholder='Academic Year' onChange={handleInputChange} questions={[
                                "Year 1",
                                "Year 2",
                                "Year 3",
                                "Year 4",
                                "Year 5",
                                "Year 6",
                                "Year 7",
                                "Other"
                            ]} />
                            {
                                data.academic_year === "Other"
                                    ? <Input value={data.other_academic_year} name='other_academic_year' placeholder='Your Academic Year' onChange={handleInputChange} />
                                    : ''
                            }
                            <SelectBox value={data.course_duration} name='course_duration' placeholder='Course Duration' onChange={handleInputChange} questions={[
                                "3 Years",
                                "4 Years",
                                "5 Years",
                                "6 Years",
                                "7 Years",
                                "Other"
                            ]} />
                            {
                                data.course_duration === "Other"
                                    ? <Input value={data.other_course_duration} name='other_course_duration' placeholder='Your Academic Year' onChange={handleInputChange} />
                                    : ''
                            }
                        </div>
                        : ''
                }
                {
                    data.emp_status === "Armed Forces"
                        ? <div>
                            <Input value={data.division} name='division' placeholder='Division' onChange={handleInputChange} />
                            <SelectBox value={data.service_time} name='service_time' placeholder='Time with Service' onChange={handleInputChange} questions={[
                                "1 Year",
                                "2 Years",
                                "3 Years",
                                "4 Years",
                                "5 Years",
                                "6 Years",
                                "7 Years",
                                "8 Years",
                                "9 Years",
                                "10 Years",
                                "11 Years",
                                "12 Years",
                                "13 Years",
                                "14 Years",
                                "15 Years",
                                "16 Years",
                                "17 Years",
                                "18 Years",
                                "19 Years",
                                "20 Years",
                                "21 Years",
                                "22 Years",
                                "23 Years",
                                "24 Years",
                                "25 Years",
                                "26 Years",
                                "27 Years",
                                "28 Years",
                                "29 Years",
                                "30 Years",
                                "Other"
                            ]} />
                            {
                                data.service_time === "Other"
                                    ? <Input value={data.other_service_time} name='other_service_time' placeholder='Your Service Time' onChange={handleInputChange} />
                                    : ''
                            }
                        </div>
                        : ''
                }
                {
                    data.emp_status === "Employed"
                        ? <div>
                            <SelectBox value={data.emp_type} name='emp_type' placeholder='Employement Type' onChange={handleInputChange} questions={[
                                "Full Time",
                                "Part Time",
                                "Temporary"
                            ]} />
                            <Input value={data.emplr_name} name='emplr_name' placeholder='Employer Name' onChange={handleInputChange} />
                            <SelectBox value={data.emp_industry} name='emp_industry' placeholder='Employer Industry' onChange={handleInputChange} questions={[
                                "Accountancy",
                                "Advertising and Media",
                                "Business Consultancy",
                                "Call Center Operations",
                                "Cleaning",
                                "Computer Services",
                                "Construction",
                                "Education",
                                "Electricity",
                                "Finance",
                                "Health",
                                "Hotel Restaurants",
                                "Insurance",
                                "Legal Services",
                                "Leisure, Cultural, Travel and Tourism",
                                "Manufacturing",
                                "Mining",
                                "Public Administration",
                                "Publishing",
                                "Property",
                                "Research Development",
                                "Retail",
                                "Telecommunications, Internet and IT",
                                "Transportation and Logistics"
                            ]} />
                            {
                                data.emp_industry === "Other"
                                    ? <input value={data.other_emp_industry} name='other_emp_industry' placeholder='Your Employer Industry' onChange={handleInputChange} />
                                    : ''
                            }
                            <SelectBox value={data.emp_position} name='emp_position' placeholder='Position' onChange={handleInputChange} questions={[
                                "Actor, Musician, Artist, Writer, Journalist",
                                "Administration",
                                "Bus Driver",
                                "Business Development",
                                "Business Owner",
                                "Consultancy",
                                "Doctor",
                                "Engineering",
                                "Firefighter",
                                "Management",
                                "Marketing",
                                "Cab Driver",
                                "Musician",
                                "Nurse",
                                "Sales",
                                "Mining",
                                "Senior management/Director",
                                "Services",
                                "Teacher",
                                "Truck Driver",
                                "Taxi Driver",
                                "Other"
                            ]} />
                            {
                                data.emp_position === "Other"
                                    ? <Input value={data.other_emp_position} name='other_emp_position' placeholder='Your Position' onChange={handleInputChange} />
                                    : ''
                            }
                            <SelectBox value={data.time_with_employer} name='time_with_employer' placeholder='Time with Employer' onChange={handleInputChange} questions={[
                                "1 Year",
                                "2 Years",
                                "3 Years",
                                "4 Years",
                                "5 Years",
                                "6 Years",
                                "7 Years",
                                "8 Years",
                                "9 Years",
                                "10 Years",
                                "11 Years",
                                "12 Years",
                                "13 Years",
                                "14 Years",
                                "15 Years",
                                "16 Years",
                                "17 Years",
                                "18 Years",
                                "19 Years",
                                "20 Years",
                                "21 Years",
                                "22 Years",
                                "23 Years",
                                "24 Years",
                                "25 Years",
                                "26 Years",
                                "27 Years",
                                "28 Years",
                                "29 Years",
                                "30 Years",
                                "Other"
                            ]} />
                            {
                                data.service_time === "Other"
                                    ? <Input value={data.other_time_with_employer} name='other_time_with_employer' placeholder='Your Time with Employer' onChange={handleInputChange} />
                                    : ''
                            }
                            {
                                data.emp_type === "Part Time" || data.emp_type === "Temporary"
                                    ? <Input value={data.emp_duration} name='emp_duration' placeholder='Employemnt Duration' onChange={handleInputChange} />
                                    : ''
                            }
                            <Input value={data.work_number} name='work_number' placeholder='Work contact number' onChange={handleInputChange} />

                        </div>
                        : ''
                }
                <div className='btns'>
                    <button onClick={optBack} className='btn-custom-neg'>Back</button>
                    <button onClick={employmentNext} className='btn-custom' >Next</button>
                </div>
            </form>
        </div>
    );
    const financesForm = (
        <div className='body-padding'>
            <h2>Monthly Finances</h2>
            <ProgressBar width='60%' step='5' />
            <form className='form-section' name='monthlyFinances'>
                <Input value={data.gross_income} disabled={"true"} name='gross_income' placeholder='Gross Monthly Income (After Tax)' disabled={true} onChange={handleInputChange} />
                <Input value={data.net_income} disabled={"true"} name='net_income' placeholder='Net Monthly Income (After Tax)' disabled={true} onChange={handleInputChange} />
                <Input value={data.monthly_rates} name='monthly_rates' placeholder="Monthly rent rates and taxes (exclude bond repayment)" onChange={handleInputChange} />
                <Input value={data.groceries} name='groceries' placeholder="Monthly groceries and household goods" onChange={handleInputChange} />
                <Input value={data.commuting_costs} name='commuting_costs' placeholder="Monthly commuting costs (exclude car repayment)" onChange={handleInputChange} />
                <Input value={data.loan_repayment} name='loan_repayments' placeholder="Monthly loan repayments" onChange={handleInputChange} />
                <Input value={data.child_maintenance} name='child_maintenance' placeholder="Monthly child maintanence" onChange={handleInputChange} />
                <Input value={data.desp_income} name='desp_income' placeholder="Calculated disposable income" value={900} disabled={true} onChange={handleInputChange} />
                <div className='btns'>
                    <button onClick={employmentBack} className='btn-custom-neg'>Back</button>
                    <button onClick={financesNext} className='btn-custom' >Next</button>
                </div>
            </form>
        </div>
    );
    const bankForm = (
        <div className='body-padding'>
            <h2>Bank Details</h2>
            <ProgressBar width='90%' step='6' />
            <form className='form-section' name='bankForm'>
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
                <Input value={data.acc_holder} name='acc_holder' placeholder='Account holder' onChange={handleInputChange} />
                <div className='btns'>
                    <button onClick={financesBack} className='btn-custom-neg'>Back</button>
                    <button onClick={bankNext} className='btn-custom' >Next</button>
                </div>
            </form>
        </div>
    );
    const formComplete = (
        <div className='body-padding'>
            <h2>Application Complete</h2>
            <ProgressBar width='100%' step="7" />
            <h3>Your loan application has been sent for review.</h3>
            <h4>Please keep your eyes open for further confirmation on the results of your loan application</h4>
            <h4>Once approved, you will be notified with an Email and shortly, your R{state.amount} will be paid into your bank account.</h4>
        </div>
    )
    const rejectDiv = (
        <div>Rejected</div>
    )
    const inputErrorForm = (
        <div className='body-padding'>
            <h2>We have ran into a error</h2>
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
                                {/* <h3>Repayment Date: {state.repaymentDay}</h3> */}
                                <h3>Loaned Amount: R{state.amount}</h3>
                                <h3>Amount Due: R{state.amount_due}</h3>
                                <h3>Interest Rate: {parseFloat(state.rate) * 100}%</h3>
                                <br />
                                {!data.loading && !data.error && !data.done && !data.reject && !data.optData && !data.bankData && !data.addressData && !data.employmentData && !data.financesData && !data.formDone && data.personalData && form}
                                {!data.loading && !data.error && !data.done && !data.reject && !data.bankData && !data.employmentData && !data.addressData && !data.financesData && !data.personalData && !data.formDone && data.optData && optFrom}
                                {!data.loading && !data.error && !data.done && !data.reject && !data.optData && !data.employmentData && !data.addressData && !data.financesData && !data.formDone && data.bankData && bankForm}
                                {!data.loading && !data.error && !data.done && !data.reject && !data.optData && !data.bankData && !data.employmentData && !data.financesData && !data.formDone && data.addressData && addressForm}
                                {!data.loading && !data.error && !data.done && !data.reject && !data.optData && !data.bankData && !data.addressData && !data.financesData && !data.formDone && data.employmentData && empForm}
                                {!data.loading && !data.error && !data.done && !data.reject && !data.optData && !data.bankData && !data.addressData && !data.employmentData && !data.formDone && data.financesData && financesForm}
                                {!data.loading && !data.error && !data.done && !data.reject && !data.optData && !data.bankData && !data.addressData && !data.employmentData && !data.financesData && data.formDone && formComplete}
                                {!data.loading && !data.error && !data.done && data.reject && rejectDiv}
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