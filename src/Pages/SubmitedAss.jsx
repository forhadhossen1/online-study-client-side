import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SubmitedAss = () => {

    const {user} = useContext(AuthContext);
    const [assignment, setAssignment] = useState([])

    const url = `http://localhost:5000/assignments?email=${user?.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setAssignment(data))
    },[url])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center">My Submited Assignment : {assignment.length}</h2>
        </div>
    );
};

export default SubmitedAss;