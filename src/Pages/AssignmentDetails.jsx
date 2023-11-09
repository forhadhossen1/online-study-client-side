import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Swal from "sweetalert2";

const AssignmentDetails = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const link = form.link.value;
        const note = form.note.value;
        const status = 'pending';
        const submit = {link, note, status};
        console.log(submit)

        fetch('http://localhost:5000/submits', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body : JSON.stringify(submit)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Success',
                        'Submited pdf link',
                        'success'
                    )
            }
            })

    }

    const details = useLoaderData();
    const { title, category, photo, mark, description, } = details || {}
    return (
        <div className="card bg-base-100 shadow-xl rounded-none my-5 md:flex">
            <figure className="px-10 pt-10">
                <img src={photo} alt="thumble" className="w-full md:h-[400px] lg:h-[500px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className="font-bold">Category : {category}</p>
                <p className="font-bold">Mark : {mark}</p>
                <p>{description}</p>
                <div className="card-actions">
                    <a href="#my_modal_8" className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Take Assignment</a>
                    <div className="modal" id="my_modal_8">
                        <div className="modal-box">
                            <form onSubmit={handleSubmit}> 
                                <div className="md:flex  gap-5">
                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">PDF Link</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="link" placeholder="assignment pdf link" className="input input-bordered w-full" />
                                        </label>
                                    </div>

                                    <div className="form-control md:w-1/2">
                                        <label className="label">
                                            <span className="label-text">Quick Note</span>
                                        </label>
                                        <label className="input-group">
                                            <textarea name="note" placeholder="Text note" className="input input-bordered w-full"></textarea>
                                        </label>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-3 my-5 rounded-lg text-center">
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AssignmentDetails;