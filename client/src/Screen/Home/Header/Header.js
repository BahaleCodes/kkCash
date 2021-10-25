import React from "react";
import Input from "../../../Components/UI/Input/Input";

import classes from './Header.module.css';

const Header = () => {
    return (
        <div className='container'>
            <div className={classes.Header}>
                <div className={classes.card}>
                    <div className={classes.content}>
                        <div className={classes.drawer}>
                            <h3>How to Apply
                                <button className='btn-custom'>
                                    <i className='fa fa-arrow-down'></i>
                                </button>
                            </h3>
                        </div>
                        <div className={classes.cnt_body}>
                            <div className={classes.col}>
                                <div className='col-md-3'>
                                    <Input name={"amount"} />
                                </div>
                                <div className='col-md-3'>
                                    <Input name={"duration"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;