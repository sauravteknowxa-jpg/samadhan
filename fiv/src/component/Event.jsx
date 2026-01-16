import { FaChevronRight, FaFacebookF, FaIndustry, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

function Event(){
    return(
        <>

        <div className="w-full">
             <div className="bg-[#faefef] flex flex-col items-center justify-center gap-6 pt-24 pb-24 lg:pt-44 lg:pb-44">
                                <h3 className="text-7xl font-bold text-center">Events</h3>
                                <ul className="flex flex-row items-center justify-center gap-5">
                                    <li className="flex flex-row items-center justify-center gap-2">
                                        <a href="" className="text-2xl font-bold">Home</a>
                                        <FaChevronRight className="text-2xl font-bold" />
                                    </li>
                                    <li className="text-2xl font-bold">Events</li>
                                </ul>
                            </div>
                       
                </div>

                <div className="w-full pt-10 pb-10">
                    <div className="container">
                        <div className="flex flex-col items-center justify-center p-4 sm:px-6 md:px-12 lg:px-32">
                            <h2 className="text-black  text-xl sm:text-2xl md:text-3xl font-bold">
                              Events & Engagements
                            </h2>
                            <p className="
                            text-gray-700 
                            text-lg
                             
                            pt-3 pb-6
                            max-w-3xl
                            
                        ">
                               Where ideas connect, collaborations grow, and ecosystems evolve.
                            </p>
                        </div>

                        <div className="flex flex-row  gap-8 p-4 sm:px-6 md:px-12 w-full ">
                            <div className="bg-white flex flex-col items-start justify-start md:w-[40%] w-full p-4 gap-4">

                                <span className="text-[#0A2F66] text-2xl font-bold">Event Categories</span>
                            
                              <div className="bg-[#f8f8f49d] text-black text-xl flex items-center gap-4 p-4 rounded-xl w-full h-20">
                                
                                <span className="leading-snug break-words text-xl font-semibold">
                                  Awards Ceremony

                                </span>
                              </div>
                            
                              <div className="bg-[#f8f8f49d] text-black text-xl flex items-center gap-4 p-4 rounded-xl w-full h-20">
                               
                                <span className="leading-snug break-words text-xl font-semibold">
                                  Brainstorming Sessions

                                </span>
                              </div>
                            
                              <div className="bg-[#f8f8f49d] text-black text-xl flex items-center gap-4 p-4 rounded-xl w-full h-20">
                                
                                <span className="leading-snug break-words text-xl font-semibold">
                                  Round Table Discussions

                                </span>
                              </div>
                            
                              <div className="bg-[#f8f8f49d] text-black text-xl flex items-center gap-4 p-4 rounded-xl w-full h-20">
                                
                                <span className="leading-snug break-words text-xl font-semibold">
                                  Conferences

                                </span>
                              </div>
                            
                              <div className="bg-[#f8f8f49d] text-black text-xl flex items-center gap-4 p-4 rounded-xl w-full h-20">
                                
                                <span className="leading-snug break-words text-xl font-semibold">
                                  Seminars

                                </span>
                              </div>
                            
                              <div className="bg-[#f8f8f49d] text-black text-xl flex items-center gap-4 p-4 rounded-xl w-full h-20">
                                
                                <span className="leading-snug break-words text-xl font-semibold">
                                  Meetings

                                </span>
                              </div>
                            
                              <div className="bg-[#f8f8f49d] text-black text-xl flex items-center gap-4 p-4 rounded-xl w-full h-20">
                                
                                <span className="leading-snug break-words text-xl font-semibold">
                                    Recognition of Efforts & Contributions
                                </span>
                              </div>
                            
                                  </div>
                                  <div className="flex flex-col justify-end  rounded-3xl gap-3 ">
                                            <span className="text-[#0A2F66] text-2xl font-bold">Latest Event</span>
                                            <div className="flex flex-col rounded-3xl  border border-gray-300 overflow-hidden    w-full">
                                    
                                    <img src="/image/latest-event1.png" alt="Vision" className="w-full h-64 object-cover rounded-t-2xl" />

                                    <div className="p-6 flex flex-col gap-2">
                                        <span className="text-[#16315a] block  font-semibold text-lg ">
                                            Startup Growth & Networking Meet
                                        </span>
                                        <p>
                                            A structured networking engagement enabling startups, investors, and ecosystem stakeholders to connect effectively.
                                            </p>
                                        <ul className="flex flex-row justify-between">
                                           <li><span>📅 25 Feb 2026</span></li>
                                           <li><span>📍 New Delhi</span></li>
                                           
                                        </ul>
                                        <div className="bg-green-300 text-white rounded-3xl px-6 py-3 w-40">
                                                <span>Register now</span>
                                        </div>
                                    </div>
                                </div>
                                     </div>
                                   
                        </div>
                    </div>
                </div>

                <div className=" w-full">
                    <div className="container">
                        <div className="flex flex-col items-center justify-center p-4 sm:px-6 md:px-12 lg:px-32">
                            <h2 className="text-gray-400  text-xl ">
                              UPCOMING EVENTS
                            </h2>
                            <p className="
                            text-black
                            text-lg
                            sm:text-2xl md:text-4xl font-bold 
                            pt-3 
                            max-w-3xl
                            
                        ">
                              Join Our Latest Events
                            </p>
                            <p className=" pt-3 pb-6">
                                Learn, connect & grow with industry experts
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 p-4 sm:px-6 md:px-12 lg:px-24">
                            <div className="flex flex-col rounded-3xl  border border-gray-300 overflow-hidden    w-full">
                                    
                                    <img src="/image/upcoming-1.png" alt="Vision" className="w-full h-50 object-cover rounded-t-2xl" />

                                    <div className="p-6 flex flex-col items-start gap-2">
                                        <span className="text-[#16315a] block  font-semibold text-lg ">
                                           Startup Growth Bootcamp
                                        </span>
                                        <p>
                                            Scale your startup with expert mentoring & proven strategies.
                                            </p>

                                            <span>📅 25 Jan 2026</span>
                                       
                                    </div>
                                </div>

                                <div className="flex flex-col rounded-3xl  border border-gray-300 overflow-hidden    w-full">
                                    
                                    <img src="/image/upcoming-2.png" alt="Vision" className="w-full h-50 object-cover rounded-t-2xl" />

                                    <div className="p-6 flex flex-col gap-2">
                                        <span className="text-[#16315a] block  font-semibold text-lg ">
                                            Funding & Investor Connect
                                        </span>
                                        <p>
                                            Interact with investors and explore funding opportunities.
                                            </p>
                                            <span>📅 02 Feb 2026</span>
                                        
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="w-full pt-10 pb-10">
                    <div className="flex flex-col items-start justify-start p-4 sm:px-6 md:px-12 lg:px-24">
                            <h2 className="text-[#16315a]  text-2xl font-bold ">
                              Happened Events
                            </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 p-4 sm:px-6 md:px-12 lg:px-24">
                            <div className="flex flex-col rounded-3xl  border border-gray-300 overflow-hidden    w-full">
                                    
                                    <img src="/image/past-event1.jpg" alt="Vision" className="w-full h-50 object-cover rounded-t-2xl" />

                                    <div className="p-6 flex flex-col items-start gap-2">
                                        <span className="text-[#16315a] block  font-semibold text-lg ">
                                           Startup Growth Meetup
                                        </span>
                                        <p>
                                            A successful meetup focused on scaling startups.
                                            </p>

                                            <ul className="flex flex-row justify-between w-full">
                                           <li><span>📅 25 Feb 2026</span></li>
                                           <li><a href="" className="px-3 py-1 bg-white text-green-300 border-2 border-solid border-green-200 rounded-xl font-semibold">Event Closed</a></li>
                                           
                                        </ul>
                                       
                                    </div>
                                </div>

                                <div className="flex flex-col rounded-3xl  border border-gray-300 overflow-hidden    w-full">
                                    
                                    <img src="/image/past-event2.jpg" alt="Vision" className="w-full h-50 object-cover rounded-t-2xl" />

                                    <div className="p-6 flex flex-col gap-2">
                                        <span className="text-[#16315a] block  font-semibold text-lg ">
                                            Founders Networking Meet
                                        </span>
                                        <p>
                                            Connecting founders with mentors & investors.
                                            </p>
                                            <ul className="flex flex-row justify-between">
                                           <li><span>📅 25 Feb 2026</span></li>
                                           <li><a href="" className="px-3 py-1 bg-white text-green-300 border-2 border-solid border-green-200 rounded-xl font-semibold">Event Closed</a></li>
                                           
                                        </ul>
                                        
                                    </div>
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
export default Event;