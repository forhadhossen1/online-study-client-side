

const CreateAssignment = () => {

    const handleCreateAssignment = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const brand = form.brand_name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newProduct = { name, brand, price, rating, details, photo }

        console.log(newProduct);

    }

    return (
        <div className=" bg-[#F4F3F0] p-8 md:p-24">
            <h2 className="text-3xl text-center font-medium">Create Assignment</h2>
            <form onSubmit={handleCreateAssignment}>
                {/* name category */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Enter Product name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            {/* <input type="text" name="brand_name" placeholder="Enter product brand" className="input input-bordered w-full" /> */}
                            <select name="brand_name" className="input input-bordered w-full" >
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
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Enter Product price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Enter Product Rating" className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>

                {/*deatails */}

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="details" placeholder="Enter Product details" className="input input-bordered w-full" />
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