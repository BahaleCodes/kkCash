import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useAuth } from '../shared/hooks/auth-hook';

const Client = (props) => {
    const { state } = props.location;
    const { token, userId } = useAuth();
    const [data, setData] = useState({
        name: "",
        email: "",
        phone_number: "",
        idNum: "",
        home_language: "",
        marital_status: "",
        home_status: "",
        dependents: "",
        loan_history: {},
        userAddress: {},
        userEmp: {},
        userFinances: {},
        userBank: {},
        createdAt: "",
        updatedAt: ""
    });
    useEffect(() => {
        const getUsers = async () => {
            const apiResponse = await axios.get(
                `http://localhost:8000/api/user/${userId}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }
            )
            setData(apiResponse)
        }
        getUsers();
    }, [token, userId]);

    return (
        <div>
            <h2>Clients</h2>
            <h2>{userId}</h2>
            <h2>{`${data.data.first_name} ${data.data.last_name}`}</ h2>
            <h2>{data.data.email}</ h2>
            <h2>{data.data.phone_number}</ h2>
            <h2>{data.data.idNum}</ h2>
            <h2>{data.data.home_language}</ h2>
            <h2>{data.data.marital_status}</ h2>
            <h2>{data.data.home_status}</ h2>
            <h2>{data.data.dependents}</ h2>
            <h2>Last loan: R{JSON.stringify(data.data.loan_history[data.data.loan_history.length - 1].amount)}</ h2>
            <div>
                <h1>Address</h1>
                <h3>Street: {JSON.stringify(data.data.userAddress[data.data.userAddress.length - 1].street)}</h3>
                <h3>Suburb: {JSON.stringify(data.data.userAddress[data.data.userAddress.length - 1].suburb)}</h3>
                <h3>City: {JSON.stringify(data.data.userAddress[data.data.userAddress.length - 1].city)}</h3>
                <h3>Province: {JSON.stringify(data.data.userAddress[data.data.userAddress.length - 1].province)}</h3>
                <h3>Postal Code: {JSON.stringify(data.data.userAddress[data.data.userAddress.length - 1].postal_code)}</h3>
            </div>
            <h2>{JSON.stringify(data.data.userEmp)}</ h2>
            {/* <h2>{JSON.stringify(data.data.userFinances)}</ h2>
            <h2>{JSON.stringify(data.data.userBank)}</ h2>
            <h2>{data.data.createdAt}</ h2>
            <h2>{data.data.updatedAt}</ h2> */}
        </div>
    )
}

export default Client;