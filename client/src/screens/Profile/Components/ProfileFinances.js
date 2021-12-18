import React, { useState } from 'react';

import Card from '../../../shared/components/UIElements/Card/Card';
import Input from '../../../shared/components/UIElements/Input/Input';
import Finances from '../../Loan/Components/Finances';

const ProfileFinances = (props) => {
    const [edit, setEdit] = useState(false);
    return (
        <Card>
            {
                props.newApp
                    ? <Finances
                        gross_income={props.gross_income}
                        net_income={props.net_income}
                        monthly_rates={props.monthly_rates}
                        groceries={props.groceries}
                        commuting_costs={props.commuting_costs}
                        loan_repayments={props.loan_repayments}
                        child_maintenance={props.child_maintenance}
                        desp_income={props.desp_income}
                        handleInputChange={props.onChange}
                        financesNext={props.financesDone}
                        profile={true}
                    />
                    : <React.Fragment>
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

export default ProfileFinances;