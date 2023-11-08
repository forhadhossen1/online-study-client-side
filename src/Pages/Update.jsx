import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const Update = () => {

    const { user } = useContext(AuthContext);

    const handleUpdateAssignment = event => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const category = form.category_name.value;
        const date = form.date.value;
        const email = user?.email;
        const mark = form.mark.value;
        const thumbnail = form.thumbnail.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const updateAssignment = {
            title,
            category,
            date,
            mark,
            thumbnail,
            description,
            photo,
            email
        }
        console.log(updateAssignment);


        fetch(`http://localhost:5000/assignment/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount >0) {
                    Swal.fire(
                        'Success',
                        'Assignment Update Successfull',
                        'success'
                    )
            }
            })

    }
    
    const assignment = useLoaderData();
    const {_id, title, category,photo, mark, description, date, thumbnail} = assignment || {}
    

        return (
            <div className=" bg-[#F4F3F0] p-8 md:p-24">
                <h2 className="text-3xl text-center font-medium">Update Assignment</h2>
                <form onSubmit={handleUpdateAssignment}>
                    {/* name category */}
                    <div className="md:flex gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="title" defaultValue={title} placeholder="Enter title" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <select name="category_name" defaultValue={category} className="input input-bordered w-full" >
                                    <option disabled selected>Select Category</option>
                                    <option>Easy</option>
                                    <option>Medium</option>
                                    <option>Hard</option>
                                </select>
                            </label>

                        </div>
                    </div>
                    {/* price */}
                    <div className="md:flex  gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <label className="input-group">
                                <input type="date" name="date" defaultValue={date} placeholder="Enter Product price" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Mark</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="mark" defaultValue={mark}  placeholder="Assignment Mark" className="input input-bordered w-full" />
                            </label>
                        </div>


                    </div>

                    {/* email  */}
                    <div className="md:flex  gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="email" defaultValue={user?.email} className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Thumbnail</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="thumbnail" defaultValue={thumbnail} placeholder="Thumbnail" className="input input-bordered w-full" />
                            </label>
                        </div>


                    </div>

                    {/*deatails */}

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description}  placeholder="Type description" className="input input-bordered w-full" />
                        </label>
                    </div>

                    {/* Photo url */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group"> 
                            <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-3 my-5 rounded-lg text-center">
                        <input type="submit" value="Create Assignment" />
                    </div>
                </form>

            </div>
        );
        
    };

    export default Update;