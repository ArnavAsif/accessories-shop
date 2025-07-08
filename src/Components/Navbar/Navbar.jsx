import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { Link, NavLink, useLocation } from "react-router";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Utility/firebase.init";
import { useState } from "react";
import defaultImg from "../../assets/default.webp"

const Navbar = () => {
    // Google Login start
    const [user, setUser] = useState([null])
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch(error => {
                console.log(error)
                setUser(null)
            })
    }
    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // Google Login start


    const location = useLocation();
    const isHome = location.pathname === '/';

    const NavList = <>
        <li><NavLink to='/' className={({ isActive }) => (isActive ? '' : '')}>Home</NavLink></li>
        <li><NavLink to='/statistics' className={({ isActive }) => (isActive ? 'text-[#9538E2]' : '')}>Statistics</NavLink></li>
        <li><NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'text-[#9538E2]' : '')}>Dashboard</NavLink></li>

    </>
    return (
        <div className={`navbar shadow-sm ${isHome ? 'bg-[#9538E2] text-white sticky top-0 z-30' : 'bg-white text-black'} rounded-t-2xl  w-11/12 mx-auto`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {NavList}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavList}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <button className="btn btn-ghost btn-circle"><img className="w-6 h-6 rounded-full" src={user.photoURL} alt="" /></button>

                        </> : 
                        <>
                            <button className="btn btn-ghost btn-circle"><img className="w-6 h-6 rounded-full" src={defaultImg} alt="" /></button>

                        </>

                }

                <button className="btn btn-ghost btn-circle">
                    <MdOutlineShoppingCart className="w-5 h-5"></MdOutlineShoppingCart>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <CiHeart className="w-5 h-5"></CiHeart>
                    </div>
                </button>


                {
                    user ? <button onClick={handleGoogleSignOut} className="btn btn-accent">Sign Out</button> :
                        <button onClick={handleGoogleLogin} className="btn btn-accent">Login</button>
                }

            </div>
        </div>
    );
};

export default Navbar;