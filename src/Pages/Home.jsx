import About from "../Components/About";
import Banner from "../Components/Banner";
import Faq from "../Components/FAQ";
import Feature from "../Components/Feature";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Faq></Faq>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;