import { Link, NavLink } from "react-router-dom";
import auth from "../firebase.config";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut(auth)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.error(error)
            })
    }


    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/assignment'>Assignment</NavLink></li>
        <li><NavLink to='/createAssignment'>Create Assignment</NavLink></li>
        <li><NavLink to='/myAssignment'>My Assignment</NavLink></li>
        <li><NavLink to='/submitedAssignment'>Submited Assignment</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <p className="btn btn-ghost normal-case font-bold text-2xl">Study</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user && <div>
                        <h3 className=" sm:hidden md:inline text-lg font-medium">{user.displayName}</h3>
                        <label className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full ">
                                <img src={user?.photoURL
                                } />
                            </div>
                        </label>
                    </div>
                }

                {
                    user ? <button onClick={handleLogOut} className="btn px-6 py-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none">Log Out</button>
                        :
                        <Link to='/login' className="btn px-6 py-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none">Login</Link>
                }

            </div>
        </div>
    );
};

export default Header;