import { FaBusinessTime, FaChevronRight, FaFacebookF, FaGear, FaInstagram, FaLinkedin, FaPeopleArrows, FaTwitter, FaUserGear } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";


function Service(){
    return(
        <>

            <div className="w-full">
                            <div className="container">
                                <div className="bg-[#faefef] flex flex-col items-center justify-center gap-6 pt-48 pb-44">
                                    <h3 className="text-7xl font-bold text-center">Services</h3>
                                    <ul className="flex flex-row items-center justify-center gap-5">
                                        <li className="flex flex-row items-center justify-center gap-2">
                                            <a href="" className="text-2xl font-bold">Home</a>
                                            <FaChevronRight className="text-2xl font-bold" />
                                        </li>
                                        <li className="text-2xl font-bold">Services</li>
                                    </ul>
                                </div>
                            </div>
                    </div>
            

                    <div className="flex flex-col items-center justify-center w-full pt-10">
                                               <div className="flex flex-col items-center justify-center gap-4 p-4 sm:px-6 md:px-10 lg:px-32 text-center">
                                                   <span className="text-[#49981e]  text-xl sm:text-2xl font-semibold">
                                                       OUR SERVICES
                                                   </span>
                                                    <h1 className="
                                                   text-black 
                                                   text-2xl sm:text-3xl md:text-4xl 
                                                   font-bold 
                                                   
                                                   max-w-3xl   ">Service Categories Across the Samadhantra Ecosystem</h1>

                                                   <p className="
                                                   text-black 
                                                   text-lg 
                                                   max-w-3xl
                                                   
                                               ">
                                                       Structured, scalable and collaborative service offerings
                                                   </p>
                                                   
                                               </div>
                               
                                               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-16 pt-8 pb-28">
                               
                               
                                                   <div className="bg-[#faefef] rounded-2xl p-6 flex flex-row items-start gap-4 
                                                 hover:shadow-md transition">
                               
                                                       <div className="w-12 h-12 rounded-full bg-white 
                                                   flex items-center justify-center">
                                                           
                                                           <FaBusinessTime className="text-[#0A5585] text-xl" />
                                                       </div>
                                                    
                                                    <div className="flex flex-col items-start justify-start gap-4">
                                                        <h3 className="text-2xl font-bold text-black">
                                                           Business & Startup Services
                                                       </h3>
                                                       <ul className="flex flex-col gap-2">
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Company Corporation
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                MSME registration
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                                Business advisory
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Financial planning
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                                Process consulting
                                                            </li>
                                                       </ul>
                                                    </div>
                                                       
                                                   </div>
                               
                               
                                                   <div className="bg-[#faefef] rounded-2xl p-6 flex flex-row items-start gap-4 
                                                 hover:shadow-md transition">
                               
                                                       <div className="w-12 h-12 rounded-full bg-white 
                                                   flex items-center justify-center">
                                                           
                                                           <FaBusinessTime className="text-[#0A5585] text-xl" />
                                                       </div>
                                                    
                                                    <div className="flex flex-col items-start justify-start gap-4">
                                                        <h3 className="text-2xl font-bold text-black">
                                                           Technology & Digital Solutions
                                                       </h3>
                                                       <ul className="flex flex-col gap-2">
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Website & app development
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                SaaS products
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                                ERP / CRM / HRMS
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                AI & data analytics
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                                Cybersecurity
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                                Cloud & hosting
                                                            </li>
                                                       </ul>
                                                    </div>
                                                       
                                                   </div>
                               
                               
                                                   <div className="bg-[#faefef] rounded-2xl p-6 flex flex-row items-start gap-4 
                                                 hover:shadow-md transition">
                               
                                                       <div className="w-12 h-12 rounded-full bg-white 
                                                   flex items-center justify-center">
                                                           
                                                           <FaBusinessTime className="text-[#0A5585] text-xl" />
                                                       </div>
                                                    
                                                    <div className="flex flex-col items-start justify-start gap-4">
                                                        <h3 className="text-2xl font-bold text-black">
                                                           
                                                             Education & Skill Development
                                                       </h3>
                                                       <ul className="flex flex-col gap-2">
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Certification programs
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Faculty development
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                                Industry-aligned curriculum
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Online / offline training
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                               Skill assessment
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                               Foreign university collaboration
                                                            </li>
                                                       </ul>
                                                    </div>
                                                       
                                                   </div>

                                                     <div className="bg-[#faefef] rounded-2xl p-6 flex flex-row items-start gap-4 
                                                 hover:shadow-md transition">
                               
                                                       <div className="w-12 h-12 rounded-full bg-white 
                                                   flex items-center justify-center">
                                                           
                                                           <FaBusinessTime className="text-[#0A5585] text-xl" />
                                                       </div>
                                                    
                                                    <div className="flex flex-col items-start justify-start gap-4">
                                                        <h3 className="text-2xl font-bold text-black">
                                                           Talent, Internship & Hiring
                                                       </h3>
                                                       <ul className="flex flex-col gap-2">
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Internships
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Apprenticeships
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                                Freelance projects
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Full-time hiring
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                               Campus placements
                                                            </li>
                                                       </ul>
                                                    </div>
                                                       
                                                   </div>
                               
                               
                                                   <div className="bg-[#faefef] rounded-2xl p-6 flex flex-row items-start gap-4 
                                                 hover:shadow-md transition">
                               
                                                       <div className="w-12 h-12 rounded-full bg-white 
                                                   flex items-center justify-center">
                                                           
                                                           <FaBusinessTime className="text-[#0A5585] text-xl" />
                                                       </div>
                                                    
                                                    <div className="flex flex-col items-start justify-start gap-4">
                                                        <h3 className="text-2xl font-bold text-black">
                                                           Investment & Funding

                                                       </h3>
                                                       <ul className="flex flex-col gap-2">
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Angel funding
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Venture capital
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                                Government grants
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                CSR funding
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                               Pitch & fundraising support
                                                            </li>
                                                       </ul>
                                                    </div>
                                                       
                                                   </div>
                               
                               
                                                   <div className="bg-[#faefef] rounded-2xl p-6 flex flex-row items-start gap-4 
                                                 hover:shadow-md transition">
                               
                                                       <div className="w-12 h-12 rounded-full bg-white 
                                                   flex items-center justify-center">
                                                           
                                                           <FaBusinessTime className="text-[#0A5585] text-xl" />
                                                       </div>
                                                    
                                                    <div className="flex flex-col items-start justify-start gap-4">
                                                        <h3 className="text-2xl font-bold text-black">
                                                           Legal, Compliance & Governance
                                                       </h3>
                                                       <ul className="flex flex-col gap-2">
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                IP & patent filing
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Contracts & agreements
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                                GST & taxation
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Audit & compliance
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                                Regulatory advisory
                                                            </li>
                                                       </ul>
                                                    </div>
                                                       
                                                   </div>
                               
                                                    <div className="bg-[#faefef] rounded-2xl p-6 flex flex-row items-start gap-4 
                                                 hover:shadow-md transition">
                               
                                                       <div className="w-12 h-12 rounded-full bg-white 
                                                   flex items-center justify-center">
                                                           
                                                           <FaBusinessTime className="text-[#0A5585] text-xl" />
                                                       </div>
                                                    
                                                    <div className="flex flex-col items-start justify-start gap-4">
                                                        <h3 className="text-2xl font-bold text-black">
                                                           
                                                            Marketing, Sales & Growth
                                                       </h3>
                                                       <ul className="flex flex-col gap-2">
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Branding & design
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Digital marketing
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                                Performance marketing
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                PR & communications
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                                Market research

                                                            </li>
                                                       </ul>
                                                    </div>
                                                       
                                                   </div>
                                                   
                                                   <div className="bg-[#faefef] rounded-2xl p-6 flex flex-row items-start gap-4 
                                                 hover:shadow-md transition">
                               
                                                       <div className="w-12 h-12 rounded-full bg-white 
                                                   flex items-center justify-center">
                                                           
                                                           <FaBusinessTime className="text-[#0A5585] text-xl" />
                                                       </div>
                                                    
                                                    <div className="flex flex-col items-start justify-start gap-4">
                                                        <h3 className="text-2xl font-bold text-black">
                                                           Infrastructure & Operations
                                                       </h3>
                                                       <ul className="flex flex-col gap-2">
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Office setup
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                IT hardware
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                                Cloud infrastructure
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Facility management
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                                Supply chain services
                                                            </li>
                                                       </ul>
                                                    </div>
                                                       
                                                   </div>
                               
                                                    <div className="bg-[#faefef] rounded-2xl p-6 flex flex-row items-start gap-4 
                                                 hover:shadow-md transition">
                               
                                                       <div className="w-12 h-12 rounded-full bg-white 
                                                   flex items-center justify-center">
                                                           
                                                           <FaBusinessTime className="text-[#0A5585] text-xl" />
                                                       </div>
                                                    
                                                    <div className="flex flex-col items-start justify-start gap-4">
                                                        <h3 className="text-2xl font-bold text-black">
                                                           Research, Innovation & Consulting
                                                       </h3>
                                                       <ul className="flex flex-col gap-2">
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                R&D projects
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Industry–academia collaboration
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                                Market intelligence
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Product validation
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                                Innovation labs
                                                            </li>
                                                       </ul>
                                                    </div>
                                                       
                                                   </div>

                                                    <div className="bg-[#faefef] rounded-2xl p-6 flex flex-row items-start gap-4 
                                                 hover:shadow-md transition">
                               
                                                       <div className="w-12 h-12 rounded-full bg-white 
                                                   flex items-center justify-center">
                                                           
                                                           <FaBusinessTime className="text-[#0A5585] text-xl" />
                                                       </div>
                                                    
                                                    <div className="flex flex-col items-start justify-start gap-4">
                                                        <h3 className="text-2xl font-bold text-black">
                                                           
                                                          Government, CSR & Public Programs
                                                       </h3>
                                                       <ul className="flex flex-col gap-2">
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Government scheme implementation

                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                CSR project execution
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                                Skill & employment programs
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]" />
                                                                Social impact initiatives
                                                            </li>
                                                            <li className="flex flex-row items-center gap-2">
                                                                <TiTick className="text-[#0A2F66]"/>
                                                                Monitoring & reporting
                                                            </li>
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
export default Service;