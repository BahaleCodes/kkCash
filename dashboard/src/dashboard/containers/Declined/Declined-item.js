import React from "react";
import { Link } from 'react-router-dom';

import classes from "./Declined.module.css";

const DeclinedItem = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.head_img}>
                <img className={classes.img_component} loading='lazy' src={props.image} alt={props.name} />
            </div>
            <div className={classes.text} >
                <Link
                    to={{
                        pathname: `/client/${props.userId}`,
                        state: {
                            name: props.name,
                            image: props.image,
                            email: props.email,
                            phone_number: props.phone_number,
                            idNum: props.idNum,
                            home_language: props.home_language,
                            marital_status: props.marital_status,
                            home_status: props.home_status,
                            dependents: props.dependents,
                            loan_history: props.loan_history,
                            userAddress: props.userAddress,
                            userEmp: props.userEmp,
                            userFinances: props.userFinances,
                            userBank: props.userBank,
                            createdAt: props.createdAt,
                            updatedAt: props.updatedAt
                        }
                    }}
                    className={classes.smart_link}
                >
                    <h2>{props.name}</h2>
                </Link>
            </div>
        </div >
    )
}

export default DeclinedItem;
