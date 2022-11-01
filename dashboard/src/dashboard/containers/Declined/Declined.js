import React, {
    useContext,
    useEffect,
    useState
}
    from "react";
import axios from 'axios';

// import classes from "./Declined.module.css";
import "../../../shared/styles/styles.css";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import DeclinedItem from "./Declined-item";

// import userimg from "../../../shared/img/user.png";
// import JsonData from "../../../shared/data/data.json";
import { AuthContext } from "../../../shared/context/auth-context";

const Declined = () => {
    const { auth } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        setLoading(true);
        const getUsers = async () => {
            return await axios.get(`http://localhost:8000/api/users/all/${auth.userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${auth.token}`
                },
            })
        };
        getUsers()
            .then(response => setData(response))
            .then(setLoading(false))
            .catch((err) => {
                console.log(err);
                setError(true);
                setLoading(false);
            });
    }, [auth.token, auth.userId]);

    const loadingDiv = (
        <div>
            <LoadingSpinner />
        </div>
    );
    const errorDiv = (
        <div>
            <h2>ERROR</h2>
            <h3>Couldn't load records</h3>
            <h3>{data.errorMessage}</h3>
        </div>
    );

    return (
        <div className="text-center">
            <div className="section-title">
                <h2>Declined</h2>
            </div>
            <div className="text-center">
                {
                    data.users
                        ? data.users.map((x) => (
                            <div className="align-center col-sm-6 col-md-3 col-lg-3">
                                <DeclinedItem
                                    key={x._id}
                                    name={`${x.first_name} ${x.last_name}`}
                                    image={x.userimg}
                                    userId={x._id}
                                    email={x.email}
                                    phone_number={x.phone_number}
                                    idNum={x.idNum}
                                    home_language={x.home_language}
                                    marital_status={x.marital_status}
                                    home_status={x.home_status}
                                    dependents={x.dependents}
                                    loan_history={x.loan_history}
                                    userAddress={x.userAddress}
                                    userEmp={x.userEmp}
                                    userFinances={x.userFinances}
                                    userBank={x.userBank}
                                    createdAt={x.createdAt}
                                    updatedAt={x.updatedAt}
                                />
                            </div>
                        ))
                        : 'loading...'
                }
                {loading && loadingDiv}
                {error && errorDiv}
            </div>
        </div>
    )
}

export default Declined;
