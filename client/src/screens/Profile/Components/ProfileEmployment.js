import React, { useState } from 'react';

import Card from '../../../shared/components/UIElements/Card/Card';
import Input from '../../../shared/components/UIElements/Input/Input';
import Employment from '../../Loan/Components/Employment';

const ProfileEmployment = (props) => {
    const [edit, setEdit] = useState(false);
    return (
        <Card>
            {
                props.newApp
                    ? <Employment
                        emp_status={props.emp_status}
                        gross_income={props.gross_income}
                        net_income={props.net_income}
                        income_frequency={props.income_frequency}
                        salary_day={props.salary_day}
                        other_salary_day={props.other_salary_day}
                        university={props.university}
                        other_university={props.other_university}
                        academic_year={props.academic_year}
                        other_academic_year={props.other_academic_year}
                        course_duration={props.course_duration}
                        other_course_duration={props.other_course_duration}
                        division={props.division}
                        service_time={props.service_time}
                        other_service_time={props.other_service_time}
                        emp_type={props.emp_type}
                        emplr_name={props.emplr_name}
                        emp_industry={props.emp_industry}
                        other_emp_industry={props.other_emp_industry}
                        emp_position={props.emp_position}
                        other_emp_position={props.other_emp_position}
                        time_with_employer={props.time_with_employer}
                        other_time_with_employer={props.other_time_with_employer}
                        emp_duration={props.emp_duration}
                        work_number={props.work_number}
                        handleInputChange={props.onChange}
                        employmentNext={props.employmentDone}
                        profile={true}
                    />
                    : <React.Fragment>
                        <h2>Employment Information
                            <button onClick={() => {
                                setEdit(!edit)
                            }} className='btn-custom'>
                                {
                                    edit
                                        ? <i className='fa fa-close'></i>
                                        : <i className='fa fa-edit'></i>
                                }
                            </button>
                        </h2>
                        <Input value={props.emp_status} name='emp_status' placeholder='Employee Status' type='text' disabled={!edit} onChange={props.onChange} />
                        <Input value={props.gross_income} name='gross_income' placeholder='Gross Monthly Income (Before Tax)' type='text' disabled={!edit} onChange={props.onChange} />
                        <Input value={props.net_income} name='net_income' placeholder='Net Monthly Income (After Tax)' type='text' disabled={!edit} onChange={props.onChange} />
                        <Input value={props.income_frequency} name='income_frequency' placeholder='Income Frequency' type='text' disabled={!edit} onChange={props.onChange} />
                        <Input value={props.salary_day} name='salary_day' placeholder='Salary Day' type='text' disabled={!edit} onChange={props.onChange} />
                        {
                            props.emp_status === "Self Employed"
                                ? <Input value={props.work_number} name='work_number' placeholder='Work contact number' type='text' disabled={!edit} onChange={props.onChange} />
                                : ''
                        }
                        {
                            props.emp_status === "Student"
                                ? <div>
                                    <Input value={props.university} name='university' placeholder='University' type='text' disabled={!edit} onChange={props.onChange} />
                                    <Input value={props.academic_year} name='academic_year' placeholder='Academic Year' type='text' disabled={!edit} onChange={props.onChange} />
                                    <Input value={props.course_duration} name='course_duration' placeholder='Course Duration' type='text' disabled={!edit} onChange={props.onChange} />
                                </div>
                                : ''
                        }
                        {
                            props.emp_status === "Armed Forces"
                                ? <div>
                                    <Input value={props.division} name='division' placeholder='Division' type='text' disabled={!edit} onChange={props.onChange} />
                                    <Input value={props.service_time} name='service_time' placeholder='Time with Service' type='text' disabled={!edit} onChange={props.onChange} />
                                </div>
                                : ''
                        }
                        {
                            props.emp_status === "Employed"
                                ? <div>
                                    <Input value={props.emp_type} name='emp_type' placeholder='Employement Type' type='text' disabled={!edit} onChange={props.onChange} />
                                    <Input value={props.emplr_name} name='emplr_name' placeholder='Employer Name' type='text' disabled={!edit} onChange={props.onChange} />
                                    <Input value={props.emp_industry} name='emp_industry' placeholder='Employer Industry' type='text' disabled={!edit} onChange={props.onChange} />
                                    <Input value={props.emp_position} name='emp_position' placeholder='Position' type='text' disabled={!edit} onChange={props.onChange} />
                                    <Input value={props.time_with_employer} name='time_with_employer' placeholder='Time with Employer' type='text' disabled={!edit} onChange={props.onChange} />
                                    {
                                        props.emp_type === "Part Time" || props.emp_type === "Temporary"
                                            ? <Input value={props.emp_duration} name='emp_duration' placeholder='Employemnt Duration' type='text' disabled={!edit} onChange={props.onChange} />
                                            : ''
                                    }
                                    <Input value={props.work_number} name='work_number' placeholder='Work contact number' type='text' disabled={!edit} onChange={props.onChange} />

                                </div>
                                : ''
                        }
                        {
                            edit
                                ? <div className='btns'>
                                    <button onClick={props.bankUpdate} className='btn-custom' disabled={!edit}>Update</button>
                                </div>
                                : ''
                        }
                    </React.Fragment>
            }
        </Card>
    )
}

export default ProfileEmployment;