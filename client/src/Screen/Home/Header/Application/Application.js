import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Application.module.css';
import Input from '../../../../Components/UI/Input/Input';

const Application = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [data, setData] = useState({
        repaymentDay: null,
        amount: null,
        duration: 0,
        rate: 0.1,
        amount_due: 0,
        interest: 0,
        showNumbers: false,
        filled: false
    })
    const handleInputChange = event => {
        setData({
            ...data,
            installment,
            [event.target.name]: event.target.value
        });
    };
    const installment = () => {
        let price = data.amount;
        const intrest_rate = parseFloat(data.rate);
        let val = (parseInt(price) + parseInt(price * intrest_rate));
        let time = parseInt(data.duration);
        let repayDay = startDate.setDate(startDate.getDate()+(time));
        setData({
            ...data,
            amount_due: val,
            interest: parseInt(price * intrest_rate),
            repaymentDay: repayDay.toString(),
            showNumbers: true
        });
        // console
    }
    const nextHandle = () => {
        installment();
    }
    return (
        <div className={classes.cnt_body}>
            <div className={classes.row}>
                <div className='col-md-3'>
                    <label>How Much (ZAR)?</label>
                    <Input type={"Number"} value={data.amount} onChange={handleInputChange} name={"amount"} />
                </div>
                <div className='col-md-3'>
                    <label>How Long (Days)?</label>
                    <Input onChange={handleInputChange} name={"duration"} />
                </div>
            </div>
            {
                data.showNumbers
                    ? <div>
                        <button onClick={() => (
                            setData({
                                showNumbers: false
                            })
                        )} className='btn-custom'>Cancel</button>
                        <br />
                        <br />
                        <Link to={{
                            pathname: '/loan-application',
                            state: {
                                amount_due: data.amount_due,
                                duration: data.duration,
                                amount: data.amount,
                                interest: data.interest,
                                rate: data.rate,
                                repaymentDay: data.repaymentDay
                            }
                        }} className='btn-custom'>Continue</Link>
                        <div className={classes.row}>
                            <div className={classes.col}>
                                <h4>R{data.amount_due}</h4>
                                <h5>Installment</h5>
                            </div>
                            <div className={classes.col}>
                                <h4>{startDate.toDateString()}</h4>
                                <h5>Repay Date</h5>
                            </div>
                            <div className={classes.col}>
                                <h4>R{data.interest}</h4>
                                <h5>Interest & Fees</h5>
                            </div>
                        </div>
                    </div>
                    : <div className='col-md-12 body-padding'>
                        {
                            data.duration !== null && data.duration !== 0
                            ? <button onClick={nextHandle} className='btn-custom'>Next</button>
                            : ""
                        }
                        
                        <p>Please enter desired amount and duration to pay loan.</p>
                    </div>
            }
        </div>
    )
}

export default Application;