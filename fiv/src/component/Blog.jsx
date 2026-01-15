
import { FaChevronRight, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";

function Blog(){
    return(
        <>

            <div className="w-full">
                            <div className="container">
                                <div className="bg-[#faefef] flex flex-col items-center justify-center gap-6 pt-48 pb-44">
                                    <h3 className="text-7xl font-bold text-center">Blog</h3>
                                    <ul className="flex flex-row items-center justify-center gap-5">
                                        <li className="flex flex-row items-center justify-center gap-2">
                                            <a href="" className="text-2xl font-bold">Home</a>
                                            <FaChevronRight className="text-2xl font-bold" />
                                        </li>
                                        <li className="text-2xl font-bold">Blog</li>
                                    </ul>
                                </div>
                            </div>
                    </div>
            


            <div className="flex flex-col items-center justify-center p-4  w-full">
                <div className="flex flex-col items-center justify-center p-4 sm:px-6 md:px-10 lg:px-32 text-center">
    <span className="text-green-500 text-xl sm:text-2xl font-bold">
        OUR BLOGS
    </span>

    <p className="
        text-black 
        text-2xl sm:text-3xl md:text-4xl 
        font-bold 
        pt-3 pb-6
        max-w-3xl
        leading-snug
    ">
        News, Stories & Knowledge for Every Stakeholder
    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-16">
                    <div className="flex flex-col items-start justify-start w-full">
                        <img src="/image/blog-img1.jpg" alt="" className="rounded-3xl" />
                        <ul className="flex flex-row item-start gap-4 px-2 pt-4">
                            <li className="flex flex-row items-center justify-start ">
                                <IoTimeOutline />
                                <span>Jan 05,2024</span>
                            </li>
                            <li className="flex flex-row items-center justify-start ">
                                <MdOutlinePersonOutline />
                                <span>Amit Sharma</span>
                            </li>
                        </ul>
                        <p className="text-black text-2xl font-semibold hover:text-[#0A2F66] px-2 pt-4 cursor-pointer">How Ecosystem Collaboration Helps Build Scalable Solutions</p>
                        <a href="" className="text-[#0A2F66] font-semibold px-2 pt-4 cursor-pointer">Read more</a>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                        <img src="/image/blog-img2.jpg" alt="" className="rounded-3xl" />
                        <ul className="flex flex-row item-start gap-8 px-2 pt-4">
                            <li className="flex flex-row items-center justify-start ">
                                <IoTimeOutline />
                                <span>Jan 06,2024</span>
                            </li>
                            <li className="flex flex-row items-center justify-start ">
                                <MdOutlinePersonOutline />
                                <span>Rohit Malhotra</span>
                            </li>
                        </ul>
                        <p className="text-black text-2xl font-semibold hover:text-[#0A2F66] px-2 pt-4 cursor-pointer">Why Demand–Supply Alignment Matters for Institutions</p>
                        <a href="" className="text-[#0A2F66] font-semibold px-2 pt-4 cursor-pointer">Read more</a>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                        <img src="/image/blog-img3.avif" alt="" className="rounded-3xl"/>
                        <ul className="flex flex-row item-start gap-4 px-2 pt-4">
                            <li className="flex flex-row items-center justify-start ">
                                <IoTimeOutline />
                                <span>Jan 07,2024</span>
                            </li>
                            <li className="flex flex-row items-center justify-start ">
                                <MdOutlinePersonOutline />
                                <span>Neha Verma</span>
                            </li>
                        </ul>
                        <p className="text-black text-2xl font-semibold hover:text-[#0A2F66] px-2 pt-4 cursor-pointer">From Requirement to Result: Inside a Multi-Stakeholder Platform</p>
                        <a href="" className="text-[#0A2F66] font-semibold px-2 pt-4 cursor-pointer">Read more</a>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                        <img src="/image/blog-img4.png" alt="" className="rounded-3xl" />
                        <ul className="flex flex-row item-start gap-4 px-2 pt-4">
                            <li className="flex flex-row items-center justify-start ">
                                <IoTimeOutline />
                                <span>Jan 09,2024</span>
                            </li>
                            <li className="flex flex-row items-center justify-start ">
                                <MdOutlinePersonOutline />
                                <span>Sandeep Gupta</span>
                            </li>
                        </ul>
                        <p className="text-black text-2xl font-semibold hover:text-[#0A2F66] px-2 pt-4 cursor-pointer">Turning Ideas into Outcomes with the Right Ecosystem Support</p>
                        <a href="" className="text-[#0A2F66] font-semibold px-2 pt-4 cursor-pointer">Read more</a>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                        <img src="/image/blog-img5.png" alt="" className="rounded-3xl"/>
                        <ul className="flex flex-row item-start gap-4 px-2 pt-4">
                            <li className="flex flex-row items-center justify-start ">
                                <IoTimeOutline />
                                <span>Jan 10,2024</span>
                            </li>
                            <li className="flex flex-row items-center justify-start ">
                                <MdOutlinePersonOutline />
                                <span>Vikram Joshi</span>
                            </li>
                        </ul>
                        <p className="text-black text-2xl font-semibold hover:text-[#0A2F66] px-2 pt-4 cursor-pointer">Why Connected Stakeholders Shape the Future of Digital Solutions</p>
                        <a href="" className="text-[#0A2F66] font-semibold px-2 pt-4 cursor-pointer">Read more</a>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                        <img src="/image/blog-img6.png" alt="" className="rounded-3xl" />
                        <ul className="flex flex-row item-start gap-4 px-2 pt-4">
                            <li className="flex flex-row items-center justify-start ">
                                <IoTimeOutline />
                                <span>Jan 12,2024</span>
                            </li>
                            <li className="flex flex-row items-center justify-start ">
                                <MdOutlinePersonOutline />
                                <span>Pooja Mehta</span>
                            </li>
                        </ul>
                        <p className="text-black text-2xl font-semibold hover:text-[#0A2F66] px-2 pt-4 cursor-pointer">The Power of Multi-Stakeholder Platforms in the Digital Economy</p>
                        <a href="" className="text-[#0A2F66] font-semibold px-2 pt-4 cursor-pointer">Read more</a>
                    </div>
                    
                </div>
            </div>

                         <div className='w-full bg-white text-black'>
                              <div className='flex flex-col items-start justify-start gap-2 sm:p-2 md:px-4  w-full '>
                                  <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  items-start justify-between sm:px-4 md:px-8 lg:px-8 p-2 md:py-16 w-full'>
                                      <div className='flex flex-col items-start justify-start gap-6 p-6 '>
                                            <img src="/image/samadhantra-footer-logo.jpeg" alt="" height="70" width="120"/>
                                            <p className='text-black text-sm '>One platform, Every stakeholder, Connecting needs with the right solutions.</p>
                                            <ul className='flex flex-wrap items-start justify-start gap-4 '>
                                                <li>
                                                    <a href="https://www.linkedin.com/" target="_blank"> 
                                                        <FaLinkedin />
            
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.twitter.com/" target="_blank"> 
                                                        <FaTwitter />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/" target="_blank"> 
                                                        <FaInstagram />
            
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank"> 
                                                        <FaFacebookF />
                                                    </a>
                                                </li>
                                                
                                            </ul>
                                      </div>
                                      
                                      <div className='flex flex-col items-start justify-start gap-6 p-6 '>
                                            <h3 className='text-black text-lg md:text-2xl font-bold'>Quick Links</h3>
                                            
                                            <ul className='flex flex-col items-start justify-start gap-4 '>
                                                <li className='text-black text-lg  cursor-pointer'><a href="/">Home</a></li>
                                                <li className='text-black text-lg  cursor-pointer'><a href="/about">About</a></li>
                                                <li className='text-black text-lg  cursor-pointer'><a href="/service">Service</a></li>
                                                <li className='text-black text-lg  cursor-pointer'><a href="/blog">Blog</a></li>
                                                <li className='text-black text-lg  cursor-pointer'><a href="/contact">Contact Us</a></li>
                                                
                                                
                                            </ul>
                                      </div>
            
                                      <div className='flex flex-col items-start justify-start gap-6 p-6 '>
                                            <h3 className='text-black text-lg md:text-2xl font-bold'>More</h3>
                                             <ul className='flex flex-col items-start justify-start gap-4 '>
                                                <li className='text-black text-lg  cursor-pointer'><a href="/stake">Stakeholder</a></li>
                                                <li className='text-black text-lg  cursor-pointer'><a href="/contact">FAQ</a> </li>
                                                <li className='text-black text-lg  cursor-pointer'><a href="/event">Privacy policy</a></li>
                                                <li className='text-black text-lg  cursor-pointer'><a href="/service">Terms & condition</a></li>
                                                
                                            </ul>   
            
                                      </div>
                                      
            
                                      <div className='flex flex-col items-start justify-start gap-6 p-6  '>
                                            <h3 className='text-black text-lg md:text-2xl font-bold'>Events</h3>
                                             <ul className='grid grid-cols-3 items-start justify-start gap-4 '>
                                                <li className=' cursor-pointer'>
                                                    <img src="/image/blog-img1.jpg" alt="" height="70" width="120" />
                                                </li>
                                                <li className=' cursor-pointer'>
                                                    <img src="/image/blog-img2.jpg" alt="" height="70" width="120" />
                                                </li>
                                                <li className=' cursor-pointer'>
                                                    <img src="/image/blog-img3.avif" alt="" height="70" width="120" />
                                                </li>
                                                <li className=' cursor-pointer'>
                                                    <img src="/image/blog-img4.png" alt="" height="70" width="120" />
                                                </li>
                                                <li className=' cursor-pointer'>
                                                    <img src="/image/blog-img5.png" alt="" height="70" width="120" />
                                                </li>
                                                <li className=' cursor-pointer'>
                                                    <img src="/image/blog-img6.png" alt="" height="70" width="120" />
                                                </li>
                                            </ul>
                            
                                      </div>
            
                                  </div>
                                  
                                  
                              </div> 
                                                 
                         </div>
                         <div className='bg-[#0A2F66] text-white flex flex-wrap items-center justify-center gap-2 p-3  sm:px-6 md:px-12 lg:px-16  w-full'>
                                 <span className='text-[#ffffff] text-sm'>Copyright © 2026 Samadhantra. All Rights Reserved by <a href="">Samadhantra</a> .</span>
                         </div>

        </>
    )
}
export default Blog;