const Banner = () => {
    return (
        <div className="carousel w-full h-[400px] md:h-[700px]">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src="https://i.ibb.co/3NWWwDT/learning4.jpg" className="w-full  " />
                <div className="absolute  h-full flex items-center pl-2 md:pl-7 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white space-y-7 md:w-1/2'>
                        <h2 className='text-2xl md:text-3xl font-bold'>Batter Education For Batter World</h2>
                        <h2 className='text-4xl md:text-6xl font-bold uppercase'>The Best Education Theme</h2>
                        <p>Completely conceptualize enterprise processes after synergistic template and infomediaries.Conveniently transition awesome them customer </p>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/LQDDQmQ/learning3.jpg" className="w-full " />
                <div className="absolute  h-full flex items-center pl-2 md:pl-7 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white space-y-7 md:w-1/3'>
                        <h2 className='text-2xl md:text-3xl font-bold'>Batter Education For Batter World</h2>
                        <h2 className='text-4xl md:text-6xl font-bold uppercase'>The Best Education Theme</h2>
                        <p>Completely conceptualize enterprise processes after synergistic template and infomediaries.Conveniently transition awesome them customer </p>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/M5f0xz5/learning1.jpg" className="w-full " />
                <div className="absolute  h-full flex items-center pl-2 md:pl-7 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white space-y-7 md:w-1/3'>
                        <h2 className='text-2xl md:text-3xl font-bold'>Batter Education For Batter World</h2>
                        <h2 className='text-4xl md:text-6xl font-bold uppercase'>The Best Education Theme</h2>
                        <p>Completely conceptualize enterprise processes after synergistic template and infomediaries.Conveniently transition awesome them customer </p>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;