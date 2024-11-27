import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="flex justify-between items-center my-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                        aria-expanded={isMenuOpen ? 'true' : 'false'}
                        aria-controls="navbar-menu"
                        onClick={toggleMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        id="navbar-menu"
                        className={`text-white leading-10 font-me menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow transition-all transform ease-in-out duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-10px]'}`}
                    >
                        <li>
                        <NavLink
                            to="/"
                            className="hover:bg-[#f8b90c] rounded-[25px] hover:shadow-custom"
                            activeClassName="bg-[#f8b90c]"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="nav-link hover:bg-[#f8b90c] rounded-[25px] hover:shadow-custom"
                            activeClassName="bg-[#f8b90c]"
                        >
                            About Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Courses"
                            className="nav-link hover:bg-[#f8b90c] rounded-[25px] hover:shadow-custom"
                            activeClassName="bg-[#f8b90c]"
                        >
                            Courses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/BlogPage"
                            className="nav-link hover:bg-[#f8b90c] rounded-[25px] hover:shadow-custom"
                            activeClassName="bg-[#f8b90c]"
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/ContactPage"
                            className="nav-link bg-[#f8b90c] rounded-[25px] shadow-[0 0 5px #f9c873] shadow-custom"
                            activeClassName="bg-[#f8b90c]"
                        >
                            Say Hello
                        </NavLink>
                    </li>
                    </ul>
                </div>
                <NavLink to="/" className="text-3xl font-bold text-white">
                    Redwan Labib
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="text-white text-[17px] font-semibold menu-horizontal px-1 gap-8">
                    <li>
                        <NavLink
                            to="/"
                            className="hover:bg-[#f8b90c] px-[17px] py-3 rounded-[25px] hover:shadow-custom"
                            activeClassName="bg-[#f8b90c]"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="nav-link hover:bg-[#f8b90c] px-[15px] py-3 rounded-[25px] hover:shadow-custom"
                            activeClassName="bg-[#f8b90c]"
                        >
                            About Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Courses"
                            className="nav-link hover:bg-[#f8b90c] duration-400 ease-linear px-[15px] py-3 rounded-[25px] hover:shadow-custom"
                            activeClassName="bg-[#f8b90c]"
                        >
                            Courses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/BlogPage"
                            className="nav-link hover:bg-[#f8b90c] px-[17px] py-3 rounded-[25px] hover:shadow-custom"
                            activeClassName="bg-[#f8b90c]"
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/ContactPage"
                            className="nav-link bg-[#f8b90c] px-[15px] py-3 rounded-[25px] shadow-[0 0 5px #f9c873] shadow-custom"
                            activeClassName="bg-[#f8b90c]"
                        >
                            Say Hello
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
