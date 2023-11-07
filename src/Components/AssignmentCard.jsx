

const AssignmentCard = ({ totalAssignment }) => {
    const { title, category, mark, thumbnail, description, photo } = totalAssignment || {}
    console.log(totalAssignment)
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt="thumble" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className="font-bold">Category : {category}</p>
                <p className="font-bold">Mark : {mark}</p>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">View</button>
                    <button className="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;