import React from 'react';

import Input from '../../../shared/components/UIElements/Input/Input';
import ProgressBar from '../../../shared/components/UIElements/ProgressBar/ProgressBar';

const Finances = (props) => {
    return (
        <div className='body-padding'>
            <h2>Monthly Finances</h2>
            <ProgressBar width='60%' step='5' />
            <Input value={props.gross_income} disabled={"true"} name='gross_income' placeholder='Gross Monthly Income (After Tax)' onChange={props.handleInputChange} />
            <Input value={props.net_income} disabled={"true"} name='net_income' placeholder='Net Monthly Income (After Tax)' onChange={props.handleInputChange} />
            <Input value={props.monthly_rates} name='monthly_rates' placeholder="Monthly rent rates and taxes (exclude bond repayment)" onChange={props.handleInputChange} />
            <Input value={props.groceries} name='groceries' placeholder="Monthly groceries and household goods" onChange={props.handleInputChange} />
            <Input value={props.commuting_costs} name='commuting_costs' placeholder="Monthly commuting costs (exclude car repayment)" onChange={props.handleInputChange} />
            <Input value={props.loan_repayment} name='loan_repayments' placeholder="Monthly loan repayments" onChange={props.handleInputChange} />
            <Input value={props.child_maintenance} name='child_maintenance' placeholder="Monthly child maintanence" onChange={props.handleInputChange} />
            <Input value={props.desp_income} name='desp_income' placeholder="Calculated disposable income" disabled={true} onChange={props.handleInputChange} />
            <div className='btns'>
                <button onClick={props.employmentBack} className='btn-custom-neg'>Back</button>
                <button onClick={props.financesNext} className='btn-custom' >Next</button>
            </div>
        </div>
    )
}

export default Finances;