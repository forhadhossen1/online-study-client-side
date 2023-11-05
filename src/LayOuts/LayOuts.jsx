import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const LayOuts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LayOuts;