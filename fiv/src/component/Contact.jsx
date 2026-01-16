import { FaChevronRight, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

function Contact(){
    return(
        <>

            <div className="w-full">
                     <div className="bg-[#faefef] flex flex-col items-center justify-center gap-6 pt-24 pb-24 lg:pt-44 lg:pb-44">
                                    <h3 className="text-7xl font-bold text-center">Contact Us</h3>
                                    <ul className="flex flex-row items-center justify-center gap-5">
                                        <li className="flex flex-row items-center justify-center gap-2">
                                            <a href="" className="text-2xl font-bold">Home</a>
                                            <FaChevronRight className="text-2xl font-bold" />
                                        </li>
                                        <li className="text-2xl font-bold">Contact Us</li>
                                    </ul>
                                </div>
                            
                    </div>
            
                <div className="w-full bg-[#f9fafb]">
  <div className="container mx-auto">

    <div className="flex flex-col lg:flex-row gap-12 
                    px-4 sm:px-6 lg:px-12 
                    pt-24 pb-20 w-full items-center">

      
      <div className="flex flex-col items-start justify-start 
                      lg:w-1/2 w-full gap-5">

        <span className="text-sm font-bold tracking-widest text-blue-500">
          CONNECT WITH US
        </span>

        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
          Share Your Requirement, Get the Right Solution
        </h1>

        <p className="text-gray-600 font-medium max-w-xl">
          Share your requirement, and Samadhantra will connect you with the right experts,
          partners, or service providers—quickly and transparently.
        </p>

        <form className="w-full flex flex-col gap-4 pt-4">

          <div className="flex items-start gap-4">
            <label className="w-28 font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded-md 
                         px-4 py-2 font-medium 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-start gap-4">
            <label className="w-28 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded-md 
                         px-4 py-2 font-medium 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-start gap-4">
            <label className="w-28 font-semibold text-gray-700">Mobile</label>
            <input
              type="text"
              name="mobile"
              className="w-full border border-gray-300 rounded-md 
                         px-4 py-2 font-medium 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-start gap-4">
            <label className="w-28 font-semibold text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full border border-gray-300 rounded-md 
                         px-4 py-2 font-medium 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-start gap-4">
            <label className="w-28 font-semibold text-gray-700">Address</label>
            <textarea
              name="address"
              rows="3"
              className="w-full border border-gray-300 rounded-md 
                         px-4 py-2 font-medium 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>

       
        <div className="flex items-start gap-3 text-sm font-medium text-gray-700 pt-2">
          <input type="checkbox" className="mt-1 accent-blue-600" />
          <span>Accept Terms & Conditions and Privacy Policy.</span>
        </div>

       
        <div className="w-44 rounded-full px-4 py-2.5 
                        bg-blue-600 text-white font-semibold 
                        text-center cursor-pointer 
                        hover:bg-blue-700 transition">
          Send Message
        </div>
      </div>

      
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src="/image/contact-img.png"
          alt="Contact"
          className="w-full max-w-xl object-contain"
        />
      </div>

    </div>
  </div>
</div>


              <div className="p-4">
  <h1 className="text-2xl text-center font-bold mb-4">Contact Us</h1>
  <p className="text-center text-xl">Our office location:</p>

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.4965366282568!2d77.4329962738732!3d23.225011708745974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x62a2416a0cbb33f7%3A0xb615405bdf98c4f2!2sTeknowxa!5e0!3m2!1sen!2sin!4v1768464033403!5m2!1sen!2sin"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Office Location"
  ></iframe>
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
export default Contact;