import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyAssRow from "../Components/MyAssRow";


const MyAssignment = () => {
    const { user } = useContext(AuthContext);
    const [assignments, setAssignments] = useState([])

    const url = `https://assignment11-onlinestudy-server.vercel.app/assignments?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {credentials: 'include'})
            .then(res => res.json())
            .then(data => setAssignments(data))
    }, [url])
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">My Assignments : {assignments.length}</h2>

            <div className="overflow-x-auto py-8">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>Exameniee</th>
                            <th>Assignment</th>
                            <th>Status</th>
                            <th>Total Mark</th>
                            <th>Obtaint Mark</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-200">
                        {
                            assignments.map(assignment => <MyAssRow
                                key={assignment._id}
                                assignment={assignment}
                            ></MyAssRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAssignment;