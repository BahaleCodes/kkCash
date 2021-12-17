import React, { useState } from 'react';

import Card from '../../../shared/components/UIElements/Card/Card';
import Input from '../../../shared/components/UIElements/Input/Input';

const Employment = (props) => {
    const [edit, setEdit] = useState(false);
    return (
        <Card>
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
                        <Input value={props.university} name='university' placeholder='University' type='text' disabled={!edit} onChange={props.onChange}/>
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
            <div className='btns'>
                <button onClick={props.employmentUpdate} className='btn-custom' disabled={!edit}>Update</button>
            </div>
        </Card>
    )
}

export default Employment;