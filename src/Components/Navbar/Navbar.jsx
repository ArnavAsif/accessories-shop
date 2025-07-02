import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { Link, NavLink, useLocation } from "react-router";

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const NavList = <>
        <li><NavLink to='/' className={({isActive}) => (isActive ? '': '')}>Home</NavLink></li>
        <li><a>Statistics</a></li>
        <li><NavLink to='/dashboard' className={({isActive}) => (isActive ? 'text-[#9538E2]': '')}>Dashboard</NavLink></li>
        
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
                <button className="btn btn-ghost btn-circle">
                    <MdOutlineShoppingCart className="w-5 h-5"></MdOutlineShoppingCart>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <CiHeart className="w-5 h-5"></CiHeart>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;