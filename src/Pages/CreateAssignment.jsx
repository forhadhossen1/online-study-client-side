import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const CreateAssignment = () => {
    const {user} = useContext(AuthContext);

    const handleCreateAssignment = event => {
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

        const newAssignment = { title, category, date, mark, thumbnail, description, photo,email }

        console.log(newAssignment);

    }

    return (
        <div className=" bg-[#F4F3F0] p-8 md:p-24">
            <h2 className="text-3xl text-center font-medium">Create Assignment</h2>
            <form onSubmit={handleCreateAssignment}>
                {/* name category */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Enter title" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            {/* <input type="text" name="brand_name" placeholder="Enter product brand" className="input input-bordered w-full" /> */}
                            <select name="category_name" className="input input-bordered w-full" >
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
                            <input type="date" name="date" placeholder="Enter Product price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Mark</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="mark" placeholder="Assignment Mark" className="input input-bordered w-full" />
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
                            <input type="text" defaultValue={user?.email} name="email" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Thumbnail</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="thumbnail" placeholder="Thumbnail" className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>

                {/*deatails */}

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="Type description" className="input input-bordered w-full" />
                    </label>
                </div>

                {/* Photo url */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-3 my-5 rounded-lg text-center">
                    <input type="submit" value="Create Assignment" />
                </div>
            </form>

        </div>
    );
};

export default CreateAssignment;