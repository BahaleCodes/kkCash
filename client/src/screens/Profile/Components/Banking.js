import React, { useState } from 'react';

import Card from '../../../shared/components/UIElements/Card/Card';
import Input from '../../../shared/components/UIElements/Input/Input';

const Banking = (props) => {
    const [edit, setEdit] = useState(false);
    return (
        <Card>
            <h2>Banking Information
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
            <Input value={props.bank_name} name='bank_name' placeholder='Bank Name' type='text' disabled={!edit} onChange={props.onChange} />
            <Input value={props.acc_num} name='acc_num' placeholder='Account Number' type='Number' disabled={!edit} onChange={props.onChange} />
            <Input value={props.acc_type} name='acc_type' placeholder='Account Type' type='text' disabled={!edit} onChange={props.onChange} />
            <Input value={props.branch_code} name='branch_code' placeholder='Branch Code' type='text' disabled={!edit} onChange={props.onChange} />
            <Input value={props.acc_holder} name='acc_holder' placeholder='Account holder' type='text' disabled={!edit} onChange={props.onChange} />
            <div className='btns'>
                <button onClick={props.bankUpdate} className='btn-custom' disabled={!edit}>Update</button>
            </div>
        </Card>
    )
}

export default Banking;