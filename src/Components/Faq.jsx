
const Faq = () => {
    return (
        <div className=''>
            <h2 className='text-6xl font-bold text-center pt-10 text-blue-700'>FAQ</h2>
            <div className="hero min-h-[80vh]">
                <div className="hero-content flex-col lg:flex-row lg:justify-between">
                    <div className='lg:w-1/2'>
                        <img src="https://i.ibb.co/F8ZjG2p/question.png" className="w-full" />
                    </div>
                    <div className='lg:w-1/2 md:mt-20'>
                        <h1 className="text-4xl font-bold">Some Qustion & Answer</h1>
                        <div className="space-y-4 pt-8">
                            <div className="collapse collapse-arrow bg-base-200 rounded-none">
                                <input type="radio" name="my-accordion-2" checked="checked" />
                                <div className="collapse-title text-xl font-bold ">
                                    What is Online Study?
                                </div>
                                <div className="collapse-content">
                                    <p>Online Study is an educational platform that provides a wide range of courses and learning materials. Its designed to help students and learners access high-quality education from anywhere in the world. We offer a diverse set of courses, taught by experienced instructors, covering various subjects and skill levels.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200 rounded-none">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-bold">
                                    How do I get started on Online Study?
                                </div>
                                <div className="collapse-content">
                                    <p>To get started on Online Study, you need to create an account. Simply sign up with your email and choose the courses or programs that interest you. Once you are registered, you can log in and start exploring the content available on our platform.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200 rounded-none">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-bold">
                                    Can I access Online Study on my mobile device?
                                </div>
                                <div className="collapse-content">
                                    <p>Yes, Online Study is accessible on various devices, including mobile phones, tablets, and desktop computers. You can download our mobile app or use your devices web browser to access our platform on the go.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow bg-base-200 rounded-none">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-bold">
                                    How can I contact the instructors if I have questions?
                                </div>
                                <div className="collapse-content">
                                    <p> Each course on Online Study has a dedicated discussion forum where you can interact with instructors and fellow learners. You can ask questions, seek clarification, and engage in discussions to enhance your learning experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;