import React, { useEffect, useState, useRef } from "react";
import Input from "../../Components/UI/Input/Input";
import ProgressBar from "../../Components/UI/ProgressBar/ProgressBar";
import SelectBox from "../../Components/UI/SelectBox/SelectBox";

import classes from './Loan.module.css';

const isEmpty = (value) => value.trim() === '';
const isRSAID = (value) => value.trim().length === 13;

const Loan = (props) => {
    const { state } = props.location;
    const [data, setData] = useState({
        loading: false,
        error: false,
        done: false,
        concent: false,
        reject: false,

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
    const [formInputsValidity, setFormInputsValidity] = useState({
        firstName: true,
        lastName: true,
        idNum: true,
        homeLanguage: true,
        maritalStatus: true,
        email: true,
        password: true,

        street_name: true,
        suburb: true,
        city: true,
        province: true,
        postalcode: true,

        phoneNumber: true,
        opt: true,
        homeStatus: true,
        dependents: true,

        emp_status: true,
        gross_income: true,
        net_income: true,
        income_frequency: true,
        salary_day: true,
        other_salary_day: true,

        work_number: true,

        university: true,
        other_university: true,
        academic_year: true,
        other_academic_year: true,
        course_duration: true,
        other_course_duration: true,

        division: true,
        service_time: true,
        other_service_time: true,

        emp_type: true,
        emplr_name: true,
        emp_industry: true,
        other_emp_industry: true,
        emp_position: true,
        other_emp_position: true,
        time_with_employer: true,
        other_time_with_employer: true,
        emp_duration: true,

        monthly_rates: true,
        groceries: true,
        commuting_costs: true,
        loan_repayments: true,
        child_maintenance: true,
        desp_income: true,

        bank_name: true,
        other_bank: true,
        acc_num: true,
        acc_type: true,
        other_acc_type: true,
        branch_code: true,
        acc_holder: true,
    });

    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const idNumInputRef = useRef();
    const homeLanguageInputRef = useRef();
    const maritalStatusInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const street_nameInputRef = useRef();
    const suburbInputRef = useRef();
    const cityInputRef = useRef();
    const provinceInputRef = useRef();
    const postalcodeInputRef = useRef();

    const phoneNumberInputRef = useRef();
    const optInputRef = useRef();
    const homeStatusInputRef = useRef();
    const dependentsInputRef = useRef();

    const emp_statusInputRef = useRef();
    const gross_incomeInputRef = useRef();
    const net_incomeInputRef = useRef();
    const income_frequencyInputRef = useRef();
    const salary_dayInputRef = useRef();
    const other_salary_dayInputRef = useRef();

    const work_numberInputRef = useRef();

    const universityInputRef = useRef();
    const other_universityInputRef = useRef();
    const academic_yearInputRef = useRef();
    const other_academic_yearInputRef = useRef();
    const course_durationInputRef = useRef();
    const other_course_durationInputRef = useRef();

    const divisionInputRef = useRef();
    const service_timeInputRef = useRef();
    const other_service_timeInputRef = useRef();

    const emp_typeInputRef = useRef();
    const emplr_nameInputRef = useRef();
    const emp_industryInputRef = useRef();
    const other_emp_industryInputRef = useRef();
    const emp_positionInputRef = useRef();
    const other_emp_positionInputRef = useRef();
    const time_with_employerInputRef = useRef();
    const other_time_with_employerInputRef = useRef();
    const emp_durationInputRef = useRef();

    const monthly_ratesInputRef = useRef();
    const groceriesInputRef = useRef();
    const commuting_costsInputRef = useRef();
    const loan_repaymentsInputRef = useRef();
    const child_maintenanceInputRef = useRef();
    const desp_incomeInputRef = useRef();

    const bank_nameInputRef = useRef();
    const other_bankInputRef = useRef();
    const acc_numInputRef = useRef();
    const acc_typeInputRef = useRef();
    const other_acc_typeInputRef = useRef();
    const branch_codeInputRef = useRef();
    const acc_holderInputRef = useRef();

    const confirmHandler = event => {
        event.preventDefault();

        const entered_firstName = firstNameInputRef.current.value;
        const entered_lastName = lastNameInputRef.current.value;
        const entered_idNum = idNumInputRef.current.value;
        const entered_homeLanguage = homeLanguageInputRef.current.value;
        const entered_maritalStatus = maritalStatusInputRef.current.value;
        const entered_email = emailInputRef.current.value;
        const entered_password = passwordInputRef.current.value;

        const entered_street_name = street_nameInputRef.current.value;
        const entered_suburb = suburbInputRef.current.value;
        const entered_city = cityInputRef.current.value;
        const entered_province = provinceInputRef.current.value;
        const entered_postalcode = postalcodeInputRef.current.value;

        const entered_phoneNumber = phoneNumberInputRef.current.value;
        const entered_opt = optInputRef.current.value;
        const entered_homeStatus = homeStatusInputRef.current.value;
        const entered_dependents = dependentsInputRef.current.value;

        const entered_emp_status = emp_statusInputRef.current.value;
        const entered_gross_income = gross_incomeInputRef.current.value;
        const entered_net_income = net_incomeInputRef.current.value;
        const entered_income_frequency = income_frequencyInputRef.current.value;
        const entered_salary_day = salary_dayInputRef.current.value;
        const entered_other_salary_day = other_salary_dayInputRef.current.value;

        const entered_work_number = work_numberInputRef.current.value;

        const entered_university = universityInputRef.current.value;
        const entered_other_university = other_universityInputRef.current.value;
        const entered_academic_year = academic_yearInputRef.current.value;
        const entered_other_academic_year = other_academic_yearInputRef.current.value;
        const entered_course_duration = course_durationInputRef.current.value;
        const entered_other_course_duration = other_course_durationInputRef.current.value;

        const entered_division = divisionInputRef.current.value;
        const entered_service_time = service_timeInputRef.current.value;
        const entered_other_service_time = other_service_timeInputRef.current.value;

        const entered_emp_type = emp_typeInputRef.current.value;
        const entered_emplr_name = emplr_nameInputRef.current.value;
        const entered_emp_industry = emp_industryInputRef.current.value;
        const entered_other_emp_industry = other_emp_industryInputRef.current.value;
        const entered_emp_position = emp_positionInputRef.current.value;
        const entered_other_emp_position = other_emp_positionInputRef.current.value;
        const entered_time_with_employer = time_with_employerInputRef.current.value;
        const entered_other_time_with_employer = other_time_with_employerInputRef.current.value;
        const entered_emp_duration = emp_durationInputRef.current.value;

        const entered_monthly_rates = monthly_ratesInputRef.current.value;
        const entered_groceries = groceriesInputRef.current.value;
        const entered_commuting_costs = commuting_costsInputRef.current.value;
        const entered_loan_repayments = loan_repaymentsInputRef.current.value;
        const entered_child_maintenance = child_maintenanceInputRef.current.value;
        const entered_desp_income = desp_incomeInputRef.current.value;

        const entered_bank_name = bank_nameInputRef.current.value;
        const entered_other_bank = other_bankInputRef.current.value;
        const entered_acc_num = acc_numInputRef.current.value;
        const entered_acc_type = acc_typeInputRef.current.value;
        const entered_other_acc_type = other_acc_typeInputRef.current.value;
        const entered_branch_code = branch_codeInputRef.current.value;
        const entered_acc_holder = acc_holderInputRef.current.value;

        const entered_firstNameIsValid = !isEmpty(entered_firstName);
        const entered_lastNameIsValid = !isEmpty(entered_lastName);
        const entered_idNumIsValid = !isEmpty(entered_idNum) && isRSAID(entered_idNum);
        const entered_homeLanguageIsValid = !isEmpty(entered_homeLanguage);
        const entered_maritalStatusIsValid = !isEmpty(entered_maritalStatus);
        const entered_emailIsValid = !isEmpty(entered_email);
        const entered_passwordIsValid = !isEmpty(entered_password);

        const entered_street_nameIsValid = !isEmpty(entered_street_name);
        const entered_suburbIsValid = !isEmpty(entered_suburb);
        const entered_cityIsValid = !isEmpty(entered_city);
        const entered_provinceIsValid = !isEmpty(entered_province);
        const entered_postalcodeIsValid = !isEmpty(entered_postalcode);

        const entered_phoneNumberIsValid = !isEmpty(entered_phoneNumber);
        const entered_optIsValid = !isEmpty(entered_opt);
        const entered_homeStatusIsValid = !isEmpty(entered_homeStatus);
        const entered_dependentsIsValid = !isEmpty(entered_dependents);

        const entered_emp_statusIsValid = !isEmpty(entered_emp_status);
        const entered_gross_incomeIsValid = !isEmpty(entered_gross_income);
        const entered_net_incomeIsValid = !isEmpty(entered_net_income);
        const entered_income_frequencyIsValid = !isEmpty(entered_income_frequency);
        const entered_salary_dayIsValid = !isEmpty(entered_salary_day);
        const entered_other_salary_dayIsValid = !isEmpty(entered_other_salary_day);

        const entered_work_numberIsValid = !isEmpty(entered_work_number);

        const entered_universityIsValid = !isEmpty(entered_university);
        const entered_other_universityIsValid = !isEmpty(entered_other_university);
        const entered_academic_yearIsValid = !isEmpty(entered_academic_year);
        const entered_other_academic_yearIsValid = !isEmpty(entered_other_academic_year);
        const entered_course_durationIsValid = !isEmpty(entered_course_duration);
        const entered_other_course_durationIsValid = !isEmpty(entered_other_course_duration);

        const entered_divisionIsValid = !isEmpty(entered_division);
        const entered_service_timeIsValid = !isEmpty(entered_service_time);
        const entered_other_service_timeIsValid = !isEmpty(entered_other_service_time);

        const entered_emp_typeIsValid = !isEmpty(entered_emp_type);
        const entered_emplr_nameIsValid = !isEmpty(entered_emplr_name);
        const entered_emp_industryIsValid = !isEmpty(entered_emp_industry);
        const entered_other_emp_industryIsValid = !isEmpty(entered_other_emp_industry);
        const entered_emp_positionIsValid = !isEmpty(entered_emp_position);
        const entered_other_emp_positionIsValid = !isEmpty(entered_other_emp_position);
        const entered_time_with_employerIsValid = !isEmpty(entered_time_with_employer);
        const entered_other_time_with_employerIsValid = !isEmpty(entered_other_time_with_employer);
        const entered_emp_durationIsValid = !isEmpty(entered_emp_duration);

        const entered_monthly_ratesIsValid = !isEmpty(entered_monthly_rates);
        const entered_groceriesIsValid = !isEmpty(entered_groceries);
        const entered_commuting_costsIsValid = !isEmpty(entered_commuting_costs);
        const entered_loan_repaymentsIsValid = !isEmpty(entered_loan_repayments);
        const entered_child_maintenanceIsValid = !isEmpty(entered_child_maintenance);
        const entered_desp_incomeIsValid = !isEmpty(entered_desp_income);

        const entered_bank_nameIsValid = !isEmpty(entered_bank_name);
        const entered_other_bankIsValid = !isEmpty(entered_other_bank);
        const entered_acc_numIsValid = !isEmpty(entered_acc_num);
        const entered_acc_typeIsValid = !isEmpty(entered_acc_type);
        const entered_other_acc_typeIsValid = !isEmpty(entered_other_acc_type);
        const entered_branch_codeIsValid = !isEmpty(entered_branch_code);
        const entered_acc_holderIsValid = !isEmpty(entered_acc_holder);

        setFormInputsValidity({
            firstName: entered_firstNameIsValid,
            lastName: entered_lastNameIsValid,
            idNum: entered_idNumIsValid,
            homeLanguage: entered_homeLanguageIsValid,
            maritalStatus: entered_maritalStatusIsValid,
            email: entered_emailIsValid,
            password: entered_passwordIsValid,

            street_name: entered_street_nameIsValid,
            suburb: entered_suburbIsValid,
            city: entered_cityIsValid,
            province: entered_provinceIsValid,
            postalcode: entered_postalcodeIsValid,

            phoneNumber: entered_phoneNumberIsValid,
            opt: entered_optIsValid,
            homeStatus: entered_homeStatusIsValid,
            dependents: entered_dependentsIsValid,

            emp_status: entered_emp_statusIsValid,
            gross_income: entered_gross_incomeIsValid,
            net_income: entered_net_incomeIsValid,
            income_frequency: entered_income_frequencyIsValid,
            salary_day: entered_salary_dayIsValid,
            other_salary_day: entered_other_salary_dayIsValid,

            work_number: entered_work_numberIsValid,

            university: entered_universityIsValid,
            other_university: entered_other_universityIsValid,
            academic_year: entered_academic_yearIsValid,
            other_academic_year: entered_other_academic_yearIsValid,
            course_duration: entered_course_durationIsValid,
            other_course_duration: entered_other_course_durationIsValid,

            division: entered_divisionIsValid,
            service_time: entered_service_timeIsValid,
            other_service_time: entered_other_service_timeIsValid,

            emp_type: entered_emp_typeIsValid,
            emplr_name: entered_emplr_nameIsValid,
            emp_industry: entered_emp_industryIsValid,
            other_emp_industry: entered_other_emp_industryIsValid,
            emp_position: entered_emp_positionIsValid,
            other_emp_position: entered_other_emp_positionIsValid,
            time_with_employer: entered_time_with_employerIsValid,
            other_time_with_employer: entered_other_time_with_employerIsValid,
            emp_duration: entered_emp_durationIsValid,

            monthly_rates: entered_monthly_ratesIsValid,
            groceries: entered_groceriesIsValid,
            commuting_costs: entered_commuting_costsIsValid,
            loan_repayments: entered_loan_repaymentsIsValid,
            child_maintenance: entered_child_maintenanceIsValid,
            desp_income: entered_desp_incomeIsValid,

            bank_name: entered_bank_nameIsValid,
            other_bank: entered_other_bankIsValid,
            acc_num: entered_acc_numIsValid,
            acc_type: entered_acc_typeIsValid,
            other_acc_type: entered_other_acc_typeIsValid,
            branch_code: entered_branch_codeIsValid,
            acc_holder: entered_acc_holderIsValid,
        });

        const formIsValid = 
        entered_firstName &&
        entered_lastName &&
        entered_idNum &&
        entered_homeLanguage &&
        entered_maritalStatus &&
        entered_email &&
        entered_password &&

        entered_street_name &&
        entered_suburb &&
        entered_city &&
        entered_province &&
        entered_postalcode &&

        entered_phoneNumber &&
        entered_opt &&
        entered_homeStatus &&
        entered_dependents &&

        entered_emp_status &&
        entered_gross_income &&
        entered_net_income &&
        entered_income_frequency &&
        entered_salary_day &&
        entered_other_salary_day &&

        entered_work_number &&

        entered_university &&
        entered_other_university &&
        entered_academic_year &&
        entered_other_academic_year &&
        entered_course_duration &&
        entered_other_course_duration &&

        entered_division &&
        entered_service_time &&
        entered_other_service_time &&

        entered_emp_type &&
        entered_emplr_name &&
        entered_emp_industry &&
        entered_other_emp_industry &&
        entered_emp_position &&
        entered_other_emp_position &&
        entered_time_with_employer &&
        entered_other_time_with_employer &&
        entered_emp_duration &&

        entered_monthly_rates &&
        entered_groceries &&
        entered_commuting_costs &&
        entered_loan_repayments &&
        entered_child_maintenance &&
        entered_desp_income &&

        entered_bank_name &&
        entered_other_bank &&
        entered_acc_num &&
        entered_acc_type &&
        entered_other_acc_type &&
        entered_branch_code &&
        entered_acc_holder;

        if (!formIsValid) {
            return;
        }

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

    const personalNext = () => {
        setData({
            ...data,
            personalData: false,
            addressData: true
        });
        console.log(data);
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
            <form className='form-section' name='LoanApplication' onSubmit={confirmHandler} validate="true" >
                {/* <Input
                    value={data.firstName}
                    name="firstName"
                    ref={firstNameInputRef}
                    placeholder="First Name"
                    type="Text"
                    onChange={handleInputChange} /> */}
                    <label htmlFor='firstName'>Your Name</label>
                    <input type='text' id='firstName' ref={firstNameInputRef} />
                    {!formInputsValidity.firstName && <p>Please enter a valid First name!</p>}
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
                <div className='btns'>
                    <a href='/' className='btn-custom-neg'>Back</a>
                    {
                        data.email === null && data.password === null && data.maritalStatus === null && data.homeLanguage === null && data.idNum === null && data.lastName === null && data.firstName === null
                            ? 'Next'
                            : <button className='btn-custom' >Next</button>

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
        <fiv className='body-padding'>
            <h2>Application Complete</h2>
            <ProgressBar width='100%' step="7" />
            <h3>Your loan application has been sent for review.</h3>
            <h4>Please keep your eyes open for further confirmation on the results of your loan application</h4>
            <h4>Once approved, you will be notified with an Email and shortly, your R{state.amount} will be paid into your bank account.</h4>
        </fiv>
    )
    const rejectDiv = (
        <div>Rejected</div>
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