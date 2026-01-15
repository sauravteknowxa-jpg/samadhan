import { FaPhone } from "react-icons/fa6";
import {  IoClose, IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import "./style.css"
import { useEffect, useState } from "react";

function Navbar(){
        const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return(
        
        <>
           

            <div className="w-full">
                    <nav className="bg-[#0A2F66] text-white hidden lg:flex flex-wrap items-center justify-between text-shadow-black p-4 sm:px-6 lg:px-10 py-4 w-full ">                       
                            <div className="container">
                                <div className="flex flex-row items-center sm:justify-between">
                                    <div>
                                    <ul className="flex flex-row items-center gap-6 text-white">
                                        
                                        <li className="flex items-center gap-2">
                                        <IoTimeOutline />
                                        <span>MON-SAT</span>
                                        <span >10:30AM - 7:00PM</span>
                                        </li>

                                        <li className="flex items-center gap-2">
                                        <IoLocationOutline />
                                        <span>OFFICE</span>
                                        <span >Mansarovar Complex, Bhopal</span>
                                        </li>

                                        <li className="flex items-center gap-2">
                                        <FaPhone />
                                        <span>CALL</span>
                                        <span >+91 6232912441</span>
                                        </li>

                                    </ul>
                                    </div>

                                    <div>
                                        <select className="bg-transparent text-white outline-none">
                                            <option className="text-black">English</option>
                                            <option className="text-black">Hindi</option>
                                            <option className="text-black">Deutsch</option>
                                            <option className="text-black">Português</option>
                                            <option className="text-black">简体中文</option>
                                        </select>
                                    </div>
                                </div>
                             </div>
                    </nav>

                    {isSticky && <div className="h-[80px]"></div>}

                    <nav className={ `bg-white flex flex-row items-center justify-between p-4 sm:px-6 lg:px-10 py-4 w-full ${isSticky ? "fixed top-0 left-0 z-50 shadow-lg" : "relative"}`}>
                        <div>
                            <img src="/image/samadhantra-footer-logo.jpeg" alt="" height="70" width="120"/>
                        </div>
                        <ul className='hidden lg:flex flex-row items-center justify-center gap-4 '>
                                    <li className='text-[#6A6A6A] text-base font-medium hover:text-green-300 cursor-pointer'><NavLink to="/">HOME</NavLink></li>
                                    <li className='text-[#6A6A6A] text-base font-medium hover:text-green-300  cursor-pointer'><NavLink to="/about">ABOUT US</NavLink></li>
                                    <li className='text-[#6A6A6A] text-base font-medium hover:text-green-300 cursor-pointer'><NavLink to="/stake">STAKEHOLDER</NavLink></li>
                                    <li className='text-[#6A6A6A] text-base font-medium hover:text-green-300 cursor-pointer'><NavLink to="/service">SERVICE</NavLink></li>
                                    <li className='text-[#6A6A6A] text-base font-medium hover:text-green-300 cursor-pointer'><NavLink to="/event">EVENT</NavLink></li>     
                                    <li className='text-[#6A6A6A] text-base font-medium hover:text-green-300 cursor-pointer'><NavLink to="/blog">BLOG</NavLink></li>
                                    <li className='text-[#6A6A6A] text-base font-medium hover:text-green-300 cursor-pointer'><NavLink to="/contact">CONTACT US</NavLink> </li>               
                        </ul>

                        <div className="hidden lg:flex gap-6">
                              <a href="/contact" className="bg-green-700 text-white font-bold cursor-pointer rounded-3xl px-6 py-3">Free quote</a>                        
                         </div>
                         

                          <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="lg:hidden text-2xl"
                            >
                            {showMenu ? <IoClose /> : <GiHamburgerMenu />}
                        </button>
                            
                            {showMenu && (
                                <div className="lg:hidden bg-white shadow-md fixed top-[84px] left-0 w-full z-40">
                                    <ul className='flex flex-col items-start justify-start gap-4 pl-14 py-4 font-bold '>
                                        <li className='text-[#6A6A6A] text-base font-medium hover:text-green-300 cursor-pointer'><NavLink to="/" onClick={() => setShowMenu(false)}>HOME</NavLink></li>
                                        <li className='text-[#6A6A6A] text-base font-medium hover:text-green-300  cursor-pointer'><NavLink to="/about" onClick={() => setShowMenu(false)}>ABOUT US</NavLink></li>
                                        <li className='text-[#6A6A6A] text-base font-medium hover:text-green-300 cursor-pointer'><NavLink to="/stake" onClick={() => setShowMenu(false)}>STAKEHOLDER</NavLink></li>
                                        <li className='text-[#6A6A6A] text-base font-medium hover:text-green-300 cursor-pointer'><NavLink to="/service" onClick={() => setShowMenu(false)}>SERVICE</NavLink></li>
                                        <li className='text-[#6A6A6A] text-base font-medium hover:text-green-300 cursor-pointer'><NavLink to="/event" onClick={() => setShowMenu(false)}>EVENT</NavLink></li>     
                                        <li className='text-[#6A6A6A] text-base font-medium hover:text-green-300 cursor-pointer'><NavLink to="/blog" onClick={() => setShowMenu(false)}>BLOG</NavLink></li>
                                        <li className='text-[#6A6A6A] text-base font-medium hover:text-green-300 cursor-pointer'><NavLink to="/contact" onClick={() => setShowMenu(false)}>CONTACT US</NavLink> </li>               
                                   </ul>
                                </div>
                                    
                            )}
                    </nav>

                </div>
                
        </>


   )
        
    
}
export default Navbar;