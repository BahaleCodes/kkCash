import React, { useState } from 'react';

import Card from '../../../shared/components/UIElements/Card/Card';
import Input from '../../../shared/components/UIElements/Input/Input';

const Personal = (props) => {
    const [edit, setEdit] = useState(false);
    return (
        <Card>
            <h2> Personal Information
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
            <Input value={props.firstName} name="firstName" placeholder="First Name" type="Text" disabled={!edit} onChange={props.onChange} />
            <Input value={props.lastName} name='lastName' placeholder='Surname' type='Text' disabled={!edit} onChange={props.onChange} />
            <Input value={props.email} name='email' placeholder='Home Language' type='email' disabled={!edit} onChange={props.onChange} />
            <Input value={props.phone_number} name='phone_number' placeholder='Cell Phone Number' type='Number' disabled={!edit} onChange={props.onChange} />
            <div>
                <div className='btns'>
                    <button onClick={props.updateReq} className='btn-custom' disabled={!edit} >Update</button>
                </div>
            </div>
        </Card >
    )
}

export default Personal;