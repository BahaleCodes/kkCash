import React from 'react';

import Input from '../../../shared/components/UIElements/Input/Input';
import SelectBox from '../../../shared/components/UIElements/SelectBox/SelectBox';
import ProgressBar from '../../../shared/components/UIElements/ProgressBar/ProgressBar';

const Address = (props) => {
    return (
        <div style={{marginTop: "10rem"}} className='body-padding'>
            <h2>Current Address</h2>
            <ProgressBar width='25%' step={"3"} />
            <Input value={props.street_name} name='street_name' placeholder='Street Name' type='Text' onChange={props.handleInputChange} />
            <Input value={props.suburb} name='suburb' placeholder='Suburb' type='Text' onChange={props.handleInputChange} />
            <Input value={props.city} name='city' placeholder='City' type='Text' onChange={props.handleInputChange} />
            <SelectBox value={props.province} name='province' placeholder='Province' onChange={props.handleInputChange} questions={[
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
            <Input value={props.postalcode} name='postalcode' placeholder='Postal Code' type='Number' onChange={props.handleInputChange} />
            <div className='btns'>
                <button onClick={props.optBack} className='btn-custom-neg'>Back</button>
                <button onClick={props.addressNext} className='btn-custom' >Next</button>
            </div>
        </div>
    );
}

export default Address;