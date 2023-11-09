import { useEffect, useState } from "react";
import AssignmentCard from "../Components/AssignmentCard";
import Footer from "./Footer";


const Assignment = () => {

    const [totalAssignmetns, setTotalAssignments] = useState([]);

    const url = `http://localhost:5000/assignment`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTotalAssignments(data))
    }, [url])


    return (
        <div>
            <h2 className="text-center text-4xl font-bold py-7">All Assignment</h2>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    totalAssignmetns.map(totalAssignment => <AssignmentCard
                        totalAssignment={totalAssignment}
                        key={totalAssignment._id}></AssignmentCard>)
                }
            </div>
            <div className="pt-6">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Assignment;