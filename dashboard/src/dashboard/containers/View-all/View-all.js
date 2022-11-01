import React, {
    useContext,
    useEffect,
    useState
} from "react";
import axios from "axios";

import { AuthContext } from "../../../shared/context/auth-context";

const ViewAll = () => {
    const { auth } = useContext(AuthContext);
    const [ data, setData ] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            return await axios.get(`http://localhost:8000/api/users/all/${auth.userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${auth.token}`
                },
            })
        };
        getUsers()
        .then(response => setData(JSON.parse(JSON.stringify(response))))
        .then(() => {
            console.log(data)
        })
    }, [auth.userId, auth.token, data])
    return (
        <div>
            <h2>View All</h2>
        </div>
    )
}

export default ViewAll;