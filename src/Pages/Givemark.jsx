import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Givemark = () => {
    const giveMark = useLoaderData();

    const [mark, setMark] = useState([])

    const handleGiveMark = event => {
        event.preventDefault();

        const form = event.target;
        const feedback = form.feedback.value;
        const number = form.number.value;
        const giveMark = { feedback, number };
        console.log(giveMark);


    }


    const url = `https://assignment11-onlinestudy-server.vercel.app/submits`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMark(data))
    }, [url])

    return (
        <div>
            <h2 className="text-center py-8 text-2xl font-bold">PDF: {giveMark.title}</h2>
            <a href={mark.link}></a>
            <form onSubmit={handleGiveMark}>
                <div className="md:flex  gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Feedack</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="feedback" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Number</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="number" placeholder="Number" className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-3 my-5 rounded-lg text-center">
                    <input type="submit" value="Submite" />
                </div>
            </form>
        </div>
    );
};

export default Givemark;