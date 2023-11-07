import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SubAssRow from "../Components/SubAssRow";
import Swal from "sweetalert2";

const SubmitedAss = () => {

    const { user } = useContext(AuthContext);
    const [assignments, setAssignments] = useState([])

    const url = `http://localhost:5000/assignments?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAssignments(data))
    }, [url])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delet this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/assignments/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = assignments.filter(assignment => assignment._id !== id);
                            setAssignments(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div>
            <h2 className="text-4xl font-bold text-center">My Submited Assignment : {assignments.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Delete
                            </th>
                            <th>Assigment</th>
                            <th>Assignment Mark</th>
                            <th>Staus</th>
                            <th>Give Mark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            assignments.map(assignment => <SubAssRow
                                key={assignment._id}
                                assignment={assignment}
                                handleDelete={handleDelete}
                            ></SubAssRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default SubmitedAss;