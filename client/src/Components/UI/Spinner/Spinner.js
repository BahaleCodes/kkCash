import React from 'react';

import classes from './Spinner.module.css';

const Spinner = () => {
    return (
        <div className={classes.cnt}>
            <div className={classes.ring}>Loading
                <span className={classes.span}></span>
            </div>
        </div>
    )
}

export default Spinner;