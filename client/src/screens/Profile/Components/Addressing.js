import React, { useState } from 'react';

import Card from '../../../shared/components/UIElements/Card/Card';
import Input from '../../../shared/components/UIElements/Input/Input';

const Addressing = (props) => {
    const [edit, setEdit] = useState(false);
    return (
        <Card>
            <h2>Address Information
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
            <Input value={props.street_name} name='street_name' placeholder='Street Name' type='Text' disabled={!edit} onChange={props.onChange} />
            <Input value={props.suburb} name='suburb' placeholder='Suburb' type='Text' disabled={!edit} onChange={props.onChange} />
            <Input value={props.city} name='city' placeholder='City' type='Text' disabled={!edit} onChange={props.onChange} />
            <Input value={props.province} name='province' placeholder='Province' type='Text' disabled={!edit} onChange={props.onChange} />
            <Input value={props.postalcode} name='postalcode' placeholder='Postal Code' type='Number' disabled={!edit} onChange={props.onChange} />
            <div className='btns'>
                <button onClick={props.addressUpdate} className='btn-custom' disabled={!edit} >Update</button>
            </div>
        </Card>
    )
}

export default Addressing;