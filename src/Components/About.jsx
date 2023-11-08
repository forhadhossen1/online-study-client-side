
const About = () => {
    return (
        <div className='bg-slate-100 shadow-xl my-10'>
            <h2 className='text-5xl font-bold text-center pt-10 text-orange-700'>About Us</h2>
            <div className="hero min-h-[70vh]">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src="https://i.ibb.co/SJp82cP/aboutUs1.jpg" className="w-3/4 rounded-lg shadow-2xl" />
                        <img src="https://i.ibb.co/hDjxqVs/aboutUs.jpg" className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 right-5 border-8 border-white" />
                    </div>
                    <div className='lg:w-1/2 md:mt-20'>
                        <h1 className="text-5xl font-bold">Welcome to Our Online Study Group</h1>
                        <p className="py-6">Join us to enhance your knowledge and skills with a group of passionate learners. We are here to support your educational journey.</p>
                        <p className="py-6">Connect with like-minded individuals, engage in meaningful discussions, and achieve your learning goals together.</p>
                        <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;