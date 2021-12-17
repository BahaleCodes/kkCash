import React, { useState } from 'react';

import Card from '../../../shared/components/UIElements/Card/Card';
import Input from '../../../shared/components/UIElements/Input/Input';

const Financing = (props) => {
    const [edit, setEdit] = useState(false);
    return (
        <Card>
            <h2>Financial Information
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
            <Input value={props.monthly_rates} name='monthly_rates' placeholder="Monthly rent rates and taxes (exclude bond repayment)" disabled={!edit} onChange={props.onChange} />
            <Input value={props.groceries} name='groceries' placeholder="Monthly groceries and household goods" disabled={!edit} onChange={props.onChange} />
            <Input value={props.commuting_costs} name='commuting_costs' placeholder="Monthly commuting costs (exclude car repayment)" disabled={!edit} onChange={props.onChange} />
            <Input value={props.loan_repayments} name='loan_repayments' placeholder="Monthly loan repayments" disabled={!edit} onChange={props.onChange} />
            <Input value={props.child_maintenance} name='child_maintenance' placeholder="Monthly child maintanence" disabled={!edit} onChange={props.onChange} />
            <Input value={props.desp_income} name='desp_income' placeholder="Calculated disposable income" disabled={true} />
            <div className='btns'>
                <button onClick={props.financesUpdate} className='btn-custom' disabled={!edit} >Update</button>
            </div>
        </Card>
    )
}

export default Financing;