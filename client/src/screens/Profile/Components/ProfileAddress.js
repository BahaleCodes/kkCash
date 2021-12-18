import React, { useState } from 'react';

import Card from '../../../shared/components/UIElements/Card/Card';
import Input from '../../../shared/components/UIElements/Input/Input';
import Address from '../../Loan/Components/Address';

const ProfileAddress = (props) => {
    const [edit, setEdit] = useState(false);
    return (
        <Card>
            {
                props.newApp
                    ? <Address
                        street_name={props.street_name}
                        suburb={props.suburb}
                        city={props.city}
                        province={props.province}
                        postalcode={props.postalcode}
                        profile={true}
                        addressNext={props.addressDone}
                        handleInputChange={props.onChange}
                    />
                    : <React.Fragment>
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
                    </React.Fragment>
            }
            {
                edit
                    ? <div className='btns'>
                        <button onClick={props.bankUpdate} className='btn-custom' disabled={!edit}>Update</button>
                    </div>
                    : ''
            }
        </Card>
    )
}

export default ProfileAddress;