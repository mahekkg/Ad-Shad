import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-scroll';
import { navArray } from '../store/services-store';

const Footer = () => {
  return (
    <div className="bg-gray-700 text-white p-8 w-full">
      {/* Section: Links */}
      <section className="container mx-auto flex flex-col md:flex-row  lg:flex-row justify-between  md:items-center">

        {/* Column 1 */}
        <div className="mb-6 text-left md:mb-0 md:w-1/4">
          {/* Content */}
          <Link to="Home" spy={true} smooth={true} duration={1000}>
                <img src={logo} alt="Logo" className="h-[40px] cursor-pointer my-2" />
            </Link>
          <p className="text-sm">
          We Are An Expert in Software Development & Digital Marketing And Use The Best Technologies And Platforms To Deliver High-Quality Products.
          </p>
        </div>

        {/* Column 2 */}
        <div className="mb-6 text-left md:mb-0 md:w-1/4">
          {/* Links */}
          <h6 className="text-lg font-bold mb-4">Useful links</h6>
          {navArray.map((item,index)=>(
           <Link to={item} spy={true} smooth={true} duration={500} key={index}>
            <p  href="#!" className="text-gray-300 hover:text-white">{item}</p>
            </Link>
          ))}
        </div>

        {/* Column 3 */}
        <div className="mb-6 text-left md:mb-0 md:w-1/4">
          {/* Links */}
          <h6 className="text-lg font-bold mb-4">Contact</h6>
          <p>New York, NY 10012, US</p>
          <p>info@example.com</p>
          <p>+ 01 234 567 88</p>
          <p>+ 01 234 567 89</p>
        </div>

      </section>
      

    </div>
  );
};

export default Footer;
