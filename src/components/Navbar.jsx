import React, { useState } from "react";
import { FaTimes, FaPhoneAlt } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-scroll";
import logo from '../assets/logo.png'
import '../styles/navbar.css'

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const navArray = ['Home', 'About', 'Services', 'Contact'];

    return (
        <div className="fixed w-full h-[80px] text-xl flex justify-between items-center px-6 bg-gray-100 text-[#313131]">

            <Link to="Home" spy={true} smooth={true} duration={1000}>
                <img src={logo} alt="Logo" className="h-[40px] cursor-pointer" />
            </Link>

            {/* main screen */}
            <div className="font-normal hidden md:flex shadow-[#040c16] ml-20 ">
                <ul className="hidden md:flex">
                    {navArray.map((navItem, index) => (
                        <li className="mx-6" key={index}>
                            <Link
                                to={navItem}
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav-link"
                            >
                                {navItem}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <button className="bg-[#e94452] text-[#fdfbfb] border-[#e94452] rounded-full lg:py-2.5 lg:px-3.5 py-2 px-3 ">
                <div className="flex justify-center align-middle">
                    <FaPhoneAlt className="mt-[5px]" />
                    <a className="mx-2" href="tel:+919599018646">+91 1234567890</a>
                </div>
            </button>
            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBarsStaggered /> : <FaTimes />}
            </div>

            {/* Mobile */}
            <div
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-screen bg-[rgba(248, 245, 245, 0.8)] flex flex-col justify-center items-center"
                }

            >
                <ul>
                    {navArray.map((navItem, index) => (
                        <li className="py-6 text-3xl" key={index}>
                            <Link
                                onClick={handleClick}
                                to={navItem}
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav-link"
                            >
                                {navItem}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
