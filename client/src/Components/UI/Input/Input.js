import React from "react";

import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div id='input'>
            <div className={classes.form__group} >
                <input
                    type="number"
                    className={classes.form__field}
                    placeholder={props.name}
                    name={props.name}
                    id={props.name}
                    required
                    onChange={props.change}
                    value={props.val}
                />
                <label
                    for={props.name}
                    className={classes.form__label}
                >
                    {props.name}
                </label>
            </div>
        </div>
    )
}

export default Input;