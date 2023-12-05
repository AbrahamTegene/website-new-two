// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from "react";
//Images
import logo from '../assets/logo.png';
//react Icons
import {GrLanguage} from 'react-icons/gr';
import { FaXmark, FaBars } from "react-icons/fa6";

//import link from react scrollbars
import { Link } from 'react-scroll';



const Navbar = () => {
    const [ismenopen, setIsMenuopen] = useState(false);

    const toggleMenu = () => {
        setIsMenuopen(!ismenopen);
      };
    
    
  // navitems array
  // eslint-disable-next-line no-unused-vars
  const navItems = [
    { link: 'Overview', path: 'Home' },
    { link: 'Feature', path: 'Feature' },
    { link: 'About', path: 'about' },
    { link: 'Pricing', path: 'Pricing' },
  ];

    return(
    <>
            <nav className='bg-white md:px-14 p-4 max-w-screen-2xl border-b max-auto text-primary fixed top-0 left-0 right-0'>
            <div className="text-lg container mx-auto flex justify-between items-center font-medium">
                <div className='flex space-x-14 items-center'>
                    <a href="/" className=" text-2xl font-semibold flex items-center space-x-3 text-primary">
                        <img src={logo} alt="Logo" className="w-10 inline-block items-center" />
                        <span className="text-[#263238]">PRO-G</span>
                    </a>

                    {/*Showing navitem using map */}
                    <ul className="md:flex space-x-12 hidden">
                        {
                            navItems.map(({link,path})=> <Link activeClass='active' spy={true} smooth={true} 
                            offset={-100} key={link} to={path} 
                            className="block hover:text-gray-300 cursor-pointer"> {link}</Link>)
                        }
                    </ul>
            </div>

            {/*language and signup */} 

                <div className='space-x-12 hidden lg:flex items-center'>
                    <a href="/" className='hidden lg:flex items-center hover:text-secondary'> 
                    <GrLanguage className='mr-2'/> 
                    <span> Language </span>
                    </a>
                    <button className='bg-primary  py-2 px-4 transition-all duration-300 rounded hover: text-white  hover:bg-indigo-600'>
                    Sign Up  </button>
                </div>

                {/*Menu btn. only on mobile */}
                <div className='md:hidden '>
                    <button onClick={toggleMenu}
                      className="text-secondary focus:outline-none  focus:text-gray-500">
                      {
                        ismenopen ? (<FaXmark className='h-6 w-6'/>) 
                        : (<FaBars className='h-6 w-6  text-primary '/>)
                      }
                    </button>
                </div>
            </div>
        </nav>
         {/*Menuon mobile with nav menu */}
        <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${ ismenopen ? "block fixed top-0 right-0 left-0 md:hidden" : "hidden"}`}>
            {
             navItems.map(({link,path})=> <Link activeClass='active' spy={true} smooth={true} offset={-100}
              key={link} to={path} 
              className="block hover:text-gray-300 text-white"  
              onClick={toggleMenu} >
             {link}</Link>)
            }
        </div>


    </>
    
    );
}

export default Navbar
