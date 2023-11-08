import { Link } from "react-router-dom";


const AssignmentCard = ({ totalAssignment }) => {
    const { title, category, mark, description, photo, _id } = totalAssignment || {}
    console.log(totalAssignment)
    return (
        <div className="card bg-base-100 shadow-xl rounded-none">
            <figure className="px-10 pt-10">
                <img src={photo} alt="thumble" className= " h-[200px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className="font-bold">Category : {category}</p>
                <p className="font-bold">Mark : {mark}</p>
                <p>{description}</p>
                <div className="card-actions">
                    <Link to={`/details/${_id}`}><button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">View</button></Link>

                    <Link to={`/update/${_id}`}><button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;