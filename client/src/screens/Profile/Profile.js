import React, { useState } from 'react';
import axios from 'axios';

import classes from './Profile.module.css';
import Addressing from './Components/Addressing';
import Employment from './Components/Employment';
import Financing from './Components/Financing';
import Banking from './Components/Banking';
import Personal from './Components/Personal';
import { useAuth } from '../../shared/hooks/auth-hook';
import Header from '../Home/Header/Header';

// const baseURL = 'https://kk-cash-back.herokuapp.com/api/';
const baseURL = 'http://localhost:8000/api/';

const Profile = () => {
    const { token, userId } = useAuth();
    const [viewPersonal, setViewPerson] = useState(false);
    const [viewAddress, setViewAddress] = useState(false);
    const [viewEmployment, setViewEmployment] = useState(false);
    const [viewFinances, setViewFinances] = useState(false);
    const [viewBank, setViewBank] = useState(false);
    const [apply, setApply] = useState(true);
    const [edit, setEdit] = useState(false);
    const [data, setData] = useState({
        loading: false,
        error: false,
        errorMessage: "",

        firstName: "",
        lastName: "",
        email: "",
        phone_number: "",

        street_name: "",
        suburb: "",
        city: "",
        province: "",
        postalcode: "",

        emp_status: "",
        gross_income: "",
        net_income: "",
        income_frequency: null,
        salary_day: null,
        work_number: null,
        university: null,
        academic_year: null,
        course_duration: null,
        division: null,
        service_time: null,
        emp_type: null,
        emplr_name: null,
        emp_industry: null,
        emp_position: null,
        time_with_employer: null,
        emp_duration: null,

        monthly_rates: "",
        groceries: "",
        commuting_costs: "",
        loan_repayments: "",
        child_maintenance: "",
        desp_income: null,

        bank_name: "",
        acc_num: "",
        acc_type: "",
        branch_code: "",
        acc_holder: "",

        addressId: "",
        empId: "",
        loanId: "",
        finId: "",
        bankId: ""
    });
    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };
    const viewPerson = async () => {
        setViewPerson(!viewPersonal);
        await fetch(`${baseURL}/user/${userId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then((res) => {
                setData({
                    firstName: res.first_name,
                    lastName: res.last_name,
                    email: res.email,
                    phone_number: res.phone_number,
                });
            })
    };
    const viewAddressData = async () => {
        setViewAddress(!viewAddress);
        await fetch(`${baseURL}address/by/user/${userId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then((res) => {
                setData({
                    street_name: res[0].street,
                    suburb: res[0].suburb,
                    city: res[0].city,
                    province: res[0].province,
                    postalcode: res[0].postal_code,
                    addressId: res[0]._id
                });
            })
    };
    const viewEmpData = async () => {
        setViewEmployment(!viewEmployment);
        await fetch(`${baseURL}employment/by/user/${userId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then((res) => {
                setData({
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
                    empId: res[0]._id
                });
            })
    };
    const viewFin = async () => {
        setViewFinances(!viewFinances);
        await fetch(`${baseURL}finances/by/user/${userId}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then((res) => {
                setData({
                    monthly_rates: res[0].monthly_rates,
                    groceries: res[0].groceries,
                    commuting_costs: res[0].commuting_costs,
                    loan_repayments: res[0].loan_repayments,
                    child_maintenance: res[0].child_maintenance,
                    desp_income: res[0].desp_income,
                    finId: res[0]._id
                });
            })
    };
    const viewBanking = async () => {
        setViewBank(!viewBank);
        await fetch(`${baseURL}bank/by/user/${userId}`,
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
                        bank_name: res[0].bank_name,
                        acc_num: res[0].acc_num,
                        acc_type: res[0].acc_type,
                        branch_code: res[0].branch_num,
                        acc_holder: res[0].acc_holder,
                        bankId: res[0]._id
                    });
                }
            })
    };

    const updatePerson = async () => {
        await axios
            .put(`${baseURL}user/${userId}`, {
                "first_name": data.firstName,
                "last_name": data.lastName,
                "email": data.email,
                "phone_number": data.phone_number,
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }
            )
            .then((response) => {
                setData({
                    ...data,
                    loading: false,
                });
                viewPerson();
            })
            .catch(error => {
                setData({
                    ...data,
                    error: true,
                    errorMessage: error
                })
            });
    };
    const updateAddress = async () => {
        await axios
            .put(`${baseURL}/address/update/${data.addressId}/${userId}`, {
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
            .then((response) => {
                viewAddressData();
                setData({
                    ...data,
                    loading: false
                });
            })
            .catch(error => {
                setData({
                    ...data,
                    error: true,
                    errorMessage: error
                })
            });
    };
    const updateEmp = async () => {
        await axios
            .put(`${baseURL}employment/update/${data.empId}/${userId}`, {
                "emp_status": data.emp_status,
                "gross_income": data.gross_income,
                "net_income": data.net_income,
                "income_frequency": data.income_frequency,
                "salary_day": data.salary_day,
                "work_number": data.work_number,
                "university": data.university,
                "academic_year": data.academic_year,
                "course_duration": data.course_duration,
                "division": data.division,
                "service_time": data.service_time,
                "emp_type": data.emp_type,
                "employer_name": data.employer_name,
                "emp_industry": data.emp_industry,
                "emp_position": data.emp_position,
                "time_with_employer": data.time_with_employer,
                "emp_duration": data.emp_duration
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }
            )
            .then((response) => {
                console.log(response.data);
                viewEmpData();
                setData({
                    ...data,
                    loading: false
                });
            })
            .catch(error => {
                setData({
                    ...data,
                    error: true,
                    errorMessage: error
                })
            });
    };
    const updateFin = async () => {
        await axios
            .put(`${baseURL}finances/update/${data.finId}/${userId}`, {
                "monthly_rates": data.monthly_rates,
                "groceries": data.groceries,
                "commuting_costs": data.commuting_costs,
                "loan_repayments": data.loan_repayments,
                "child_maintenance": data.child_maintenance,
                "desp_income": data.desp_income
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }
            )
            .then((response) => {
                console.log(response.data);
                viewFin();
                setData({
                    ...data,
                    loading: false,
                    optData: false,
                    addressData: true
                });
            })
            .catch(error => {
                console.log(error);
                setData({
                    ...data,
                    error: true,
                    errorMessage: error
                })
            });
    };
    const updateBank = async () => {
        await axios
            .put(`${baseURL}bank/update/${data.bankId}/${userId}`, {
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
            .then((response) => {
                console.log(response.data);
                viewBank();
                setData({
                    ...data,
                    loading: false,
                    optData: false,
                    addressData: true
                });
            })
            .catch(error => {
                setData({
                    ...data,
                    error: true,
                    errorMessage: error
                })
            });
    };
    const applyBox = (
        <div>
            <h3>Are caught in a financial pickle? </h3>
            <h5>Well... let's deal with the Dill-emma.</h5>
            <Header />
        </div>
    );


    return (
        <div className={classes.Profile}>
            <div className='container text-center'>
                <div className='section-title'>
                    <h2>User Profile</h2>
                    {apply && applyBox}

                    <div >
                        <h3>Edit Profile
                            <button onClick={() => {
                                setEdit(!edit)
                                setApply(!apply)
                            }} className='btn-custom'>
                                {
                                    edit
                                        ? <i className='fa fa-close'></i>
                                        : <i className='fa fa-edit'></i>
                                }
                            </button>
                        </h3>
                        {
                            edit
                                ? <div className={classes.toggleBtns}>
                                    <button className={`btn-custom ${classes.btn}`} onClick={viewPerson}>
                                        Personal
                                    </button>
                                    <button className={`btn-custom ${classes.btn}`} onClick={viewAddressData}>
                                        Address
                                    </button>
                                    <button className={`btn-custom ${classes.btn}`} onClick={viewEmpData}>
                                        Employment
                                    </button>
                                    <button className={`btn-custom ${classes.btn}`} onClick={viewFin}>
                                        Finances
                                    </button>
                                    <button className={`btn-custom ${classes.btn}`} onClick={viewBanking}>
                                        Bank Details
                                    </button>
                                </div>
                                : ''
                        }

                    </div>
                    <br />
                    {
                        viewPersonal && <Personal
                            firstName={data.firstName}
                            lastName={data.lastName}
                            email={data.email}
                            phone_number={data.phone_number}
                            onChange={handleInputChange}
                            updateReq={updatePerson}
                        />
                    }
                    {
                        viewAddress && <Addressing
                            street_name={data.street_name}
                            suburb={data.suburb}
                            city={data.city}
                            province={data.province}
                            postalcode={data.postalcode}
                            onChange={handleInputChange}
                            addressUpdate={updateAddress}
                        />
                    }
                    {
                        viewEmployment && <Employment
                            emp_status={data.emp_status}
                            gross_income={data.gross_income}
                            net_income={data.net_income}
                            income_frequency={data.income_frequency}
                            salary_day={data.salary_day}
                            university={data.university}
                            academic_year={data.academic_year}
                            course_duration={data.course_duration}
                            division={data.division}
                            service_time={data.service_time}
                            emp_type={data.emp_type}
                            emplr_name={data.emplr_name}
                            emp_industry={data.emp_industry}
                            emp_position={data.emp_position}
                            time_with_employer={data.time_with_employer}
                            emp_duration={data.emp_duration}
                            work_number={data.work_number}
                            onChange={handleInputChange}
                            employmentUpdate={updateEmp}
                        />
                    }
                    {
                        viewFinances && <Financing
                            gross_income={data.gross_income}
                            net_income={data.net_income}
                            monthly_rates={data.monthly_rates}
                            groceries={data.groceries}
                            commuting_costs={data.commuting_costs}
                            loan_repayments={data.loan_repayments}
                            child_maintenance={data.child_maintenance}
                            desp_income={data.desp_income}
                            onChange={handleInputChange}
                            financesUpdate={updateFin}
                        />
                    }
                    {
                        viewBank && <Banking
                            bank_name={data.bank_name}
                            acc_num={data.acc_num}
                            branch_code={data.branch_code}
                            acc_type={data.acc_type}
                            acc_holder={data.acc_holder}
                            onChange={handleInputChange}
                            bankUpdate={updateBank}
                        />
                    }
                    <br />
                </div>
            </div>
        </div >
    )
}

export default Profile;