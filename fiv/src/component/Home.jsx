import { FaArrowLeft, FaCircleCheck, FaEllipsis, FaFacebookF, FaGear, FaGraduationCap, FaIndustry, FaInstagram, FaLaptopCode, FaLayerGroup, FaLinkedin, FaPeopleArrows, FaPeopleGroup, FaPersonCircleCheck, FaQuoteLeft, FaRocket, FaScrewdriver, FaToolbox, FaTwitter, FaUserGear } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

import Slider from "react-slick";

function Home() {
 const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

   const settings1 = {
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000, 
  speed: 600,          
  cssEase: "ease-in-out",
};


    return (
        <>

            <div className="w-full">
                <div className=" flex flex-col lg:flex-row gap-4 bg-slate-50 px-4 sm:px-6 md:px-12 lg:px-24
   w-full">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center gap-8 py-2 sm:py-4 lg:py-12   lg:w-1/2 w-full ">
                        <span className="text-[#0A2F66] text-lg sm:text-xl lg:text-2xl font-semibold">Samadhantra</span>
                        <h1 className="text-4xl text-black font-bold">One Platform, Every Stakeholder</h1>
                        <p>A unified solution system that connects needs with the right services, products, and partners—efficiently, transparently, and at scale.</p>
                        <div className="flex flex-wrap items-start justify-start gap-4">
                            <a href="" className="bg-green-400 text-white rounded-4xl px-4 py-3">Post Your Requirements</a>
                            <a href="" className="bg-green-400 text-white rounded-4xl px-4 py-3">Discover Opportunities</a>
                            <a href="" className="bg-green-400 text-white rounded-4xl px-4 py-3">Partner With us</a>
                            <a href="" className="bg-green-400 text-white rounded-4xl px-4 py-3">Track Status</a>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="relative overflow-hidden flex items-stretch justify-center  lg:w-1/2 w-full">
                        
                        <img src="/image/samadhantra-hero-img.png" alt="" className="relative w-full h-full object-cover " />
                        <div>
                            <a href="https://www.youtube.com/">

                            </a>
                        </div>
                        <img src="/image/bg-shape.png" alt="" className="hidden lg:block absolute bottom-0  left-0  z-0 w-[13%] h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* section1 */}
            <div className="w-full pt-10">
                <div className="w-full">
                    <div className="flex flex-col items-center justify-center p-4 sm:px-6 md:px-10 lg:px-32 text-center">
                        <span className="text-[#050505f5] text-xl sm:text-2xl font-bold">
                            HOW <span className="text-[#84cde5f5] ">SAMADHANTRA</span> WORKS
                        </span>

                        <p className="
                                    text-black 
                                    text-2xl sm:text-3xl md:text-4xl 
                                    font-bold 
                                    pt-3 
                                    max-w-3xl
                                    leading-snug
                                ">
                            One platform, Every stakeholder, One seamless process
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-4 md:px-8 p-2 md:py-16 w-full">


                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="w-14 h-14 rounded-full border-2 border-[#51993C] 
                                                flex items-center justify-center
                                                text-[#0A5585] text-xl font-bold">
                                1
                            </div>

                            <h3 className="text-black text-xl md:text-2xl font-semibold">
                                Identify the Requirement
                            </h3>

                            <div className="text-gray-600 text-sm md:text-base leading-relaxed">
                                <p>
                                    Stakeholders submit their needs—services, products, expertise, or resources—through a structured and transparent process.
                                </p>
                                <p>
                                    "Demand is clearly defined and validated"
                                </p>
                            </div>
                        </div>


                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="w-14 h-14 rounded-full border-2 border-[#51993C] 
                                                flex items-center justify-center
                                                text-[#0A5585] text-xl font-bold">
                                2
                            </div>

                            <h3 className="text-black text-xl md:text-2xl font-semibold">
                                Match with the Right Solution
                            </h3>

                            <div className="text-gray-600 text-sm md:text-base leading-relaxed">
                                <p>
                                    Samadhantra intelligently connects requirements with the most suitable solution providers.
                                </p>
                                <p>
                                    "Demand meets the right supply at the right time"
                                </p>
                            </div>
                        </div>


                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="w-14 h-14 rounded-full border-2 border-[#51993C] 
                                                flex items-center justify-center
                                                text-[#0A5585] text-xl font-bold">
                                3
                            </div>

                            <h3 className="text-black text-xl md:text-2xl font-semibold">
                                Fulfil, Collaborate & Scale
                            </h3>

                            <div className="text-gray-600 text-sm md:text-base leading-relaxed">
                                <p>
                                    Solutions are delivered through coordinated engagement and collaboration.
                                </p>
                                <p>
                                    "Outcomes achieved, Relationships built"
                                </p>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

            {/* section2 */}
            <div className="w-full">
                <div className=" flex flex-col md:flex-row gap-8 bg-slate-50 p-4 sm:px-6 md:px-10 lg:px-24  w-full">
                    <div className="flex items-center justify-center  md:w-1/2 py-6  w-full">
                        <img src="/image/about-img.png" alt="" className="rounded-2xl" />
                        
                    </div>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center gap-8  md:w-1/2 w-full ">
                        <div className="flex flex-col gap-2">
                            <span className="text-[#0A2F66] text-2xl font-semibold">About Samadhantra</span>
                             <h1 className="text-4xl text-black font-bold">Where Requirements Turn into Results</h1>
                        
                        </div>
                        <div className="flex flex-wrap md:items-start md:justify-start items-center justify-center gap-4">
                            <p>Samadhantra is a unified solution system designed to fulfil demand and supply for all stakeholders through a structured, transparent, and collaborative platform.</p>
                            <p> We bring together individuals, institutions, service providers, industry, academia, NGOs, and government bodies to create an ecosystem where requirements are clearly identified, resources are efficiently aligned, and solutions are effectively delivered.</p>
                            <p>Samadhantra is not just a platform—it is a system that enables collaboration, trust, and sustainable outcomes across sectors.</p>

                        </div>
                        <div className="flex flex-col md:items-start md:justify-start gap-4">
                            <div className="flex flex-row md:items-start md:justify-start gap-4">
                                <h3 className="text-lg font-bold">One Platform, Every Stakeholder</h3>
                                <h3 className="text-lg font-bold">Smart & Faster Solution Discovery</h3>
                            </div>
                            <div className="flex flex-row md:items-start md:justify-start gap-4">
                                <h3 className="text-lg font-bold">Reduced Complexity, Better Execution</h3>
                                <h3 className="text-lg font-bold">Seamless Collaboration Across Ecosystem</h3>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-start justify-start gap-4">
                            <a href="" className="bg-green-400 text-white font-bold rounded-4xl px-4 py-3">Know More About Samadhantra</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* section3 */}
            <div className="bg-[#dac5d93f] w-full pt-24 pb-24  ">
                <div className=" flex flex-col md:flex-row gap-8  p-4 sm:px-6 md:px-10 lg:px-24   w-full">
                    <div className="bg-white flex flex-col items-center justify-start md:w-1/2 w-full p-4  gap-4 h-[500px] overflow-y-auto">


  <div className="bg-[#f8f8f49d] text-black text-xl flex items-center gap-4 p-4 rounded-xl w-full h-20">
    <div className="bg-white rounded-full p-3 flex items-center justify-center shrink-0">
      <FaRocket className="text-2xl" />
    </div>
    <span className="leading-snug break-words text-xl font-semibold">
      Startup & MSME
    </span>
  </div>

  <div className="bg-[#f8f8f49d] text-black text-xl flex items-center gap-4 p-4 rounded-xl w-full h-20">
    <div className="bg-white rounded-full p-3 flex items-center justify-center shrink-0">
      <FaIndustry className="text-2xl" />
    </div>
    <span className="leading-snug break-words text-xl font-semibold">
      Institutes & Corporate & Industry
    </span>
  </div>

  <div className="bg-[#f8f8f49d] text-black text-xl flex items-center gap-4 p-4 rounded-xl w-full h-20">
    <div className="bg-white rounded-full p-3 flex items-center justify-center shrink-0">
      <FaGraduationCap className="text-2xl" />
    </div>
    <span className="leading-snug break-words text-xl font-semibold">
      Educational Institute
    </span>
  </div>

  <div className="bg-[#f8f8f49d] text-black text-xl flex items-center gap-4 p-4 rounded-xl w-full h-20">
    <div className="bg-white rounded-full p-3 flex items-center justify-center shrink-0">
      <FaIndustry className="text-2xl" />
    </div>
    <span className="leading-snug break-words text-xl font-semibold">
      Incubation Centres
    </span>
  </div>

  <div className="bg-[#f8f8f49d] text-black text-xl flex items-center gap-4 p-4 rounded-xl w-full h-20">
    <div className="bg-white rounded-full p-3 flex items-center justify-center shrink-0">
      <FaLaptopCode className="text-2xl" />
    </div>
    <span className="leading-snug break-words text-xl font-semibold">
      Students
    </span>
  </div>

  <div className="bg-[#f8f8f49d] text-black text-xl flex items-center gap-4 p-4 rounded-xl w-full h-20">
    <div className="bg-white rounded-full p-3 flex items-center justify-center shrink-0">
      <FaIndustry className="text-2xl" />
    </div>
    <span className="leading-snug break-words text-xl font-semibold">
      Freelancers
    </span>
  </div>

  <div className="bg-[#f8f8f49d] text-black text-xl flex items-center gap-4 p-4 rounded-xl w-full h-20">
    <div className="bg-white rounded-full p-3 flex items-center justify-center shrink-0">
      <FaScrewdriver className="text-2xl" />
    </div>
    <span className="leading-snug break-words text-xl font-semibold">
      Service & Product Provider & Vendor Partners
    </span>
  </div>

      </div>

                    <div className=" flex flex-col items-center md:items-start text-center md:text-left justify-center gap-8  md:w-1/2 w-full ">
                        <div className="flex flex-col gap-2">
                            <span className="text-[#0A2F66] text-2xl font-semibold">OUR STAKEHOLDERS</span>
                             <h1 className="text-4xl text-black font-semibold">Smart, scalable solutions for startups, institutions, industry, and beyond</h1>
                       
                        </div>
                         <h3 className="text-2xl text-black font-semibold">From Requirements to Results</h3>
                        <div className="flex flex-wrap md:items-start md:justify-start items-center justify-center gap-4">
                            <p>Samadhantra helps stakeholders move from requirements to results through structured planning and coordinated execution.</p>
                            <p> We analyze needs, align the right partners and resources, and design practical roadmaps that ensure clarity, efficiency, and measurable outcomes—enabling seamless collaboration across our multi-stakeholder ecosystem.</p>
                           
                        </div>
                        
                        <div className="flex flex-wrap items-start justify-start gap-4">
                            <a href="" className="bg-green-400 text-white rounded-4xl px-4 py-3">Explore Stakeholders</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* section4 */}
            <div className="bg-[#f2eeda] flex flex-col items-center justify-center pt-14 pb-20 w-full">
                <div className="flex flex-col items-center justify-center gap-6 sm:px-6 md:px-10 lg:px-32 text-center">
                    <span className="text-[#0A5585]  text-xl sm:text-2xl font-bold">
                        Our Value Proposition
                    </span>
                  
                    <p className="text-black text-base sm:text-lg lg:text-xl  sm:px-6 md:px-20 ">Samadhantra unites diverse stakeholders on a single platform to turn requirements into structured, scalable, and measurable outcomes.</p>
                </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-16 sm:py-6 lg:py-16 pt-8">

  
  <div
  className="
    flex flex-col
    rounded-2xl bg-white shadow-lg
    overflow-hidden
    transform transition-all duration-300
    hover:-translate-y-3 hover:shadow-2xl
  "
>
 
  <div className="bg-[#e38ea66a] px-6 py-5">
    <h3 className="font-semibold text-lg text-gray-900 leading-snug">
      For Individuals & Demand Creators
    </h3>
  </div>

  
  <div className="px-8 py-5">
    <ul className="list-disc list-outside pl-5 space-y-3 text-gray-700 leading-relaxed">
      <li>Single platform to raise needs and access verified solutions</li>
      <li>Faster fulfilment with reduced effort and uncertainty</li>
      <li>Transparent process and trusted ecosystem</li>
    </ul>
  </div>
</div>



  <div className="flex flex-col
    rounded-2xl bg-white shadow-lg
    overflow-hidden
    transform transition-all duration-300
    hover:-translate-y-3 hover:shadow-2xl">
    <div className="bg-[#ae8a8a18] px-6 py-5">
      <h3 className="font-semibold text-lg text-gray-900 leading-snug">For Service & Product Providers</h3>
    </div>
    <div className="px-8 py-5">
            <ul className="list-disc list-outside pl-5  space-y-3 text-gray-700">
      <li>Direct access to real, verified demand</li>
      <li>Opportunity to serve diverse sectors and stakeholders</li>
      <li>Reduced customer acquisition cost and higher conversion</li>
    </ul>
    </div>
    
  </div>


  <div className="flex flex-col
    rounded-2xl bg-white shadow-lg
    overflow-hidden
    transform transition-all duration-300
    hover:-translate-y-3 hover:shadow-2xl">
    <div className="bg-[#bbeab5] px-6 py-5">
      <h3 className="font-semibold text-lg text-gray-900 leading-snug">For Institutions & Organizations</h3>
    </div>
    <div className="px-8 py-5">
            <ul className="list-disc list-outside pl-5  space-y-3 text-gray-700">
      <li>Structured mechanism to source solutions efficiently</li>
      <li>Collaboration with multiple vendors and partners</li>
      <li>Improved governance, monitoring, and outcome tracking</li>
    </ul>
    </div>
    
  </div>

  
  <div className="flex flex-col
    rounded-2xl bg-white shadow-lg
    overflow-hidden
    transform transition-all duration-300
    hover:-translate-y-3 hover:shadow-2xl">
    <div className="bg-[#e38ea66a] px-6 py-5">
      <h3 className="font-semibold text-lg text-gray-900 leading-snug">For Industry & Enterprises</h3>
    </div>
    <div className="px-8 py-5">
             <ul className="list-disc list-outside pl-5  space-y-3 text-gray-700">
      <li>On-demand access to services, talent, vendors, and partners</li>
      <li>Efficient matching aligned with business requirements</li>
      <li>Scalable platform for continuous engagement</li>
    </ul>
    </div>
   
  </div>

  
  <div className="flex flex-col
    rounded-2xl bg-white shadow-lg
    overflow-hidden
    transform transition-all duration-300
    hover:-translate-y-3 hover:shadow-2xl">
    <div className="bg-[#ae8a8a18] px-6 py-5">
      <h3 className="font-semibold text-lg text-gray-900 leading-snug">For Academia, NGOs & CSR Bodies</h3>
    </div>
    <div className="px-8 py-5">
            <ul className="list-disc list-outside pl-5  space-y-3 text-gray-700">
      <li>Platform to align resources with societal and institutional needs</li>
      <li>Collaboration with industry and government stakeholders</li>
      <li>Enhanced impact through coordinated solution delivery</li>
    </ul>
    </div>
    
  </div>


  <div className="flex flex-col
    rounded-2xl bg-white shadow-lg
    overflow-hidden
    transform transition-all duration-300
    hover:-translate-y-3 hover:shadow-2xl">
    <div className="bg-[#bbeab5] px-6 py-5">
      <h3 className="font-semibold text-lg text-gray-900 leading-snug">For Government & Public Sector</h3>
    </div>
    <div className="px-8 py-5">
            <ul className="list-disc list-outside pl-5  space-y-3 text-gray-700">
                <li>Centralized demand–supply coordination system</li>
                <li>Increased transparency, efficiency, and accountability</li>
                <li>Support for policy execution, programs, and public initiatives</li>
           </ul>
    </div>
    
  </div>

</div>


            </div>

            {/* section5 */}
            <div className=" w-full ">
                <div className=" flex flex-col md:flex-row gap-8 bg-slate-50 p-4 sm:px-6 md:px-10  pt-24 pb-20  w-full">
                        
                        <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center gap-8  md:w-1/2 w-full ">
                            <div className="flex flex-col gap-2">
                                <span className="text-[#0A2F66] text-2xl font-semibold">WHAT WE DO</span>
                                <h1 className="text-4xl text-black font-bold">We enable solutions by connecting needs with the right partners</h1>
                            
                            </div>
                            <div className="flex flex-wrap md:items-start md:justify-start items-center justify-center gap-4">
                                <p>Samadhantra is not just a service provider—we are a unified solution ecosystem. We help startups, MSMEs, institutions, and enterprises identify their requirements and connect with the right technology, service providers, talent, and partners through a structured and transparent process.</p>
                                <p>Our approach reduces complexity, improves efficiency, and ensures solutions are planned, executed, and delivered with measurable outcomes.</p>
                            
                            </div>
                            <div className="flex flex-col md:items-start md:justify-start gap-4 w-full">
                                <div className="flex flex-col md:items-start md:justify-start gap-4 w-full">
                                    <h3 className="text-lg font-bold">Requirement Understanding</h3>
                                    <div className="w-full h-2 bg-blue-600 rounded-xl"></div>              
                                </div>
                                <div className="flex flex-col md:items-start md:justify-start gap-4 w-full">
                                    <h3 className="text-lg font-bold">Stakeholder Matching</h3>
                                    <div className="w-full h-2 bg-blue-600 rounded-xl"></div>              
                                </div>
                                <div className="flex flex-col md:items-start md:justify-start gap-4 w-full">
                                    <h3 className="text-lg font-bold">Solution Delivery</h3>
                                    <div className="w-full h-2 bg-blue-600 rounded-xl"></div>              
                                </div>
                                <div className="flex flex-col md:items-start md:justify-start gap-4 w-full">
                                    <h3 className="text-lg font-bold">Seamless Collaboration Across Ecosystem</h3>
                                    <div className="w-full h-2 bg-blue-600 rounded-xl"></div>              
                                </div>

                            
                            </div>
                            <div className="flex flex-wrap items-start justify-start gap-4">
                                <a href="" className="bg-green-400 text-white rounded-4xl px-8 py-3 font-semibold">Read more</a>
                            </div>
                        </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center md:w-1/2 py-6 w-full relative">

    
    <img
        src="/image/what-did-image.png"
        alt="Main"
        className="rounded-2xl w-full max-w-md"
    />

    
    <img
        src="/image/what-did-img4.png"
        alt="Overlay"
        className="rounded-xl w-72 mt-6
            md:w-80 md:mt-0
            md:absolute md:top-[30%] md:-right-3 shadow-lg border-4 border-white"
    />

    </div>

                    </div>   
            </div>

            {/* section6 */}
            <div className="bg-[#e6f0ff] w-full pt-20 pb-20">
                    <div className=" p-4 sm:px-6 md:px-10 lg:px-10 overflow-hidden">
                    <Slider {...settings}>
                        <div className="w-50 h-20 flex items-center justify-center">
                        <img
                            src="/image/fintechedu-logo.png"
                            alt=""
                            className="h-full object-contain"
                        />
                        </div>

                        <div className="w-50 h-20 flex items-center justify-center">
                        <img
                            src="/image/aapka-insaurance.png"
                            alt=""
                            className="h-full object-contain"
                        />
                        </div>

                        <div className="w-50 h-20 flex items-center justify-center">
                        <img
                            src="/image/grownidhi.png"
                            alt=""
                            className="h-full object-contain"
                        />
                        </div>

                        <div className="w-50 h-20 flex items-center justify-center">
                        <img
                            src="/image/teknowxa.png"
                            alt=""
                            className="h-full object-contain"
                        />
                        </div>

                        <div className="w-50 h-20 flex items-center justify-center">
                        <img
                            src="/image/tpc.png"
                            alt=""
                            className="h-full object-contain"
                        />
                        </div>
                      </Slider>
                    </div>
            </div>

            {/* section7 */}
            <div className="w-full pt-20 pb-20">
                    <div className=" p-4 sm:px-6 md:px-10 lg:px-24">
                            <div className="flex flex-col items-center justify-center">
                                    <div className="flex flex-col items-center justify-center">
                                        <span className="text-[#76e366]  text-xl sm:text-2xl font-bold">
                                            OUR TESTIMONIAL
                                        </span>

                                        <p className="
                                        text-black 
                                        text-2xl sm:text-3xl md:text-4xl text-center
                                        font-bold 
                                        sm:px-6 md:px-10 lg:px-24
                                        pt-3 pb-6
                                        max-w-3xl
                                        
                                    ">
                                            Connecting needs with the right solutions—through real experiences
                                        </p>
                                    </div>
                                   
                            </div>
                            <div className=" relative overflow-visible min-h-[450px] w-full ">
                                        <Slider {...settings1}>
                                            <div>
                                                <div className="flex flex-col items-center justify-center gap-6">
                                        
                                                    <FaQuoteLeft className="text-9xl text-[#0A5585]" />
                                                    <p className="text-lg text-black text-center font-semibold px-40">"Samadhantra helped us clearly define our requirements and connect with the right partners at the right time. The structured process and transparent collaboration made execution smooth and outcome  driven." </p>
                                                    <div className="flex flex-col items-center justify-center gap-4">
                                                            <span className="text-[#0A5585] text-2xl font-bold">Amit Sharma </span>
                                                            <span className="text-xl text-black font-semibold">Founder, Startup / MSME </span>
                                                            <img src="/image/testinomial-img1.jpg" alt="" className="rounded-full w-24" />
                                                    </div>
                                                </div>

                                            </div>
                                            
                                            <div>
                                                <div className="flex flex-col items-center justify-center gap-6">
                                        
                                                    <FaQuoteLeft className="text-9xl text-[#0A5585]" />
                                                    <p className="text-lg text-black text-center font-semibold px-40">"Being part of the Samadhantra ecosystem gave us access to real and relevant demand. The platform helped us collabrate with multiple stakeholders and build long-term partnerships." </p>
                                                    <div className="flex flex-col items-center justify-center gap-4">
                                                            <span className="text-[#0A5585] text-2xl font-bold">Rohit Malhotra </span>
                                                            <span className="text-xl text-black font-semibold">Service Provider / Vendor Partner</span>
                                                            <img src="/image/testinomial-img2.jpg" alt="" className="rounded-full w-24" />
                                                    </div>
                                                </div>

                                            </div>

                                            <div>
                                                <div className="flex flex-col items-center justify-center gap-6">
                                        
                                                    <FaQuoteLeft className="text-9xl text-[#0A5585]" />
                                                    <p className="text-lg text-black text-center font-semibold px-40 ">"Samadhantra helped us clearly define our requirements and connect with the right partners at the right time. The structured process and transparent collaboration made execution smooth and outcome  driven." </p>
                                                    <div className="flex flex-col items-center justify-center gap-4">
                                                            <span className="text-[#0A5585] text-2xl font-bold">Amit Sharma </span>
                                                            <span className="text-xl text-black font-semibold">Founder, Startup / MSME </span>
                                                            <img src="/image/testinomial-img1.jpg" alt="" className="rounded-full w-24" />
                                                    </div>
                                                </div>

                                            </div>

                                            <div>
                                                <div className="flex flex-col items-center justify-center gap-6">
                                        
                                                    <FaQuoteLeft className="text-9xl text-[#0A5585]" />
                                                    <p className="text-lg text-black text-center font-semibold px-40">"Being part of the Samadhantra ecosystem gave us access to real and relevant demand. The platform helped us collabrate with multiple stakeholders and build long-term partnerships." </p>
                                                    <div className="flex flex-col items-center justify-center gap-4">
                                                            <span className="text-[#0A5585] text-2xl font-bold">Rohit Malhotra </span>
                                                            <span className="text-xl text-black font-semibold">Service Provider / Vendor Partner</span>
                                                            <img src="/image/testinomial-img2.jpg" alt="" className="rounded-full w-24" />
                                                    </div>
                                                </div>

                                            </div>
                                            
                                            
                                        </Slider>

                                    </div>
                    </div>
            </div>

            {/* section8 */}
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center p-4 sm:px-6 md:px-10 lg:px-24 text-center">
                    <span className="text-[#0A5585]  text-xl sm:text-2xl font-bold">
                        WHY SAMADHANTRA
                    </span>

                    <p className="
                    text-black 
                    text-2xl sm:text-3xl md:text-4xl 
                    font-bold 
                    pt-3 pb-6
                    max-w-3xl
                    
                ">
                        A Unified Solution Ecosystem for Every Stakeholder
                    </p>
                    <p className="text-black text-base sm:text-lg md:text-xl pt-3">Connecting requirements to real-world outcomes—efficiently, transparently, and at scale.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-16 pt-8 ">


                    <div className="bg-[#d9ecf9] rounded-2xl p-6 flex flex-col items-start gap-4 
                  hover:shadow-md transition">

                        <div className="w-12 h-12 rounded-full bg-white 
                    flex items-center justify-center">
                            <FaGear className="text-[#0A5585] text-xl" />
                        </div>

                        <h3 className="text-lg font-semibold text-black">
                            Unified Solution System
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            One integrated platform that brings together demand creators and solution providers across sectors.
                        </p>
                    </div>


                    <div className="bg-[#d9ecf9] rounded-2xl p-6 flex flex-col items-start gap-4 
                  hover:shadow-md transition">

                        <div className="w-12 h-12 rounded-full bg-white 
                    flex items-center justify-center">
                            <FaPeopleArrows className="text-[#0A5585] text-xl" />
                        </div>

                        <h3 className="text-lg font-semibold text-black">
                            Demand–Supply Alignment
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Structured matching of requirements with the right services, products, and partners for faster fulfilment.
                        </p>
                    </div>


                    <div className="bg-[#d9ecf9] rounded-2xl p-6 flex flex-col items-start gap-4 
                  hover:shadow-md transition">

                        <div className="w-12 h-12 rounded-full bg-white 
                    flex items-center justify-center">
                            <FaUserGear className="text-[#0A5585] text-xl" />
                        </div>

                        <h3 className="text-lg font-semibold text-black">
                            Multi-Stakeholder Ecosystem
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Designed for individuals, institutions, industry, government bodies, and service providers to collaborate seamlessly.
                        </p>
                    </div>


                    <div className="bg-[#d9ecf9] rounded-2xl p-6 flex flex-col items-start gap-4 
                  hover:shadow-md transition">

                        <div className="w-12 h-12 rounded-full bg-white 
                    flex items-center justify-center">
                            <FaLayerGroup className="text-[#0A5585] text-xl" />
                        </div>

                        <h3 className="text-lg font-semibold text-black">
                            Transparent & Scalable Platform
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Built to ensure efficiency, accountability, and growth—supporting small needs to large-scale requirements.
                        </p>
                    </div>

                </div>

            </div>

            {/* section9 */}
            <div className=" pt-24 pb-20">
                <div className="w-full ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:px-4 md:px-8 p-2  w-full">


                        <div className="flex flex-col items-center justify-center gap-4 text-center">
                            <div className="w-14 h-14 rounded-full bg-[#0A5585] 
                        flex items-center justify-center">
                                <FaCircleCheck className="text-white text-2xl" />
                            </div>
                            <h3 className="text-black text-4xl font-bold">20K+</h3>
                            <span className="text-2xl font-semibold">Requirements Fulfilled</span>
                        </div>


                        <div className="flex flex-col items-center justify-center gap-4 text-center">
                            <div className="w-14 h-14 rounded-full bg-[#0A5585] 
                        flex items-center justify-center">
                                <FaPeopleGroup className="text-white text-2xl" />
                            </div>
                            <h3 className="text-black text-4xl font-bold">100K+</h3>
                            <span className="text-2xl font-semibold">Ecosystem Members</span>
                        </div>


                        <div className="flex flex-col items-center justify-center gap-4 text-center">
                            <div className="w-14 h-14 rounded-full bg-[#0A5585] 
                        flex items-center justify-center">
                                <FaEllipsis className="text-white text-2xl" />
                            </div>
                            <h3 className="text-black text-4xl font-bold">40K+</h3>
                            <span className="text-2xl font-semibold">Active Collaborations</span>
                        </div>


                        <div className="flex flex-col items-center justify-center gap-4 text-center">
                            <div className="w-14 h-14 rounded-full bg-[#0A5585] 
                        flex items-center justify-center">
                                <FaPersonCircleCheck className="text-white text-2xl" />
                            </div>
                            <h3 className="text-black text-4xl font-bold">60K+</h3>
                            <span className="text-2xl font-semibold">Stakeholders Engaged</span>
                        </div>

                    </div>
                </div>
            </div>
            
            {/* section10 */}
            <div className="flex flex-col items-center justify-center  w-full">
                <div className="flex flex-col items-center justify-center p-4 sm:px-6 md:px-10 lg:px-24 text-center">
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
                        Insights, Stories & Knowledge from the Samadhantra Ecosystem
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-16 pb-20">


  <div className="flex flex-col items-start justify-start w-full">
    <img src="/image/blog-img1.jpg" alt="" className="rounded-3xl w-full" />
    <ul className="flex flex-row items-start gap-8 px-2 pt-4">
      <li className="flex flex-row items-center gap-1">
        <IoTimeOutline />
        <span>Jan 05,2024</span>
      </li>
      <li className="flex flex-row items-center gap-1">
        <MdOutlinePersonOutline />
        <span>Amit Sharma</span>
      </li>
    </ul>
    <p className="text-black text-2xl font-semibold hover:text-[#0A2F66] px-2 pt-4 cursor-pointer">
      How Ecosystem Collaboration Helps Build Scalable Solutions
    </p>
    <a href="" className="text-[#0A2F66] font-semibold px-2 pt-4 cursor-pointer">
      Read more
    </a>
  </div>

  
  <div className="flex flex-col items-start justify-start w-full">
    <img src="/image/blog-img2.jpg" alt="" className="rounded-3xl w-full" />
    <ul className="flex flex-row items-start gap-8 px-2 pt-4">
      <li className="flex flex-row items-center gap-1">
        <IoTimeOutline />
        <span>Jan 06,2024</span>
      </li>
      <li className="flex flex-row items-center gap-1">
        <MdOutlinePersonOutline />
        <span>Rohit Malhotra</span>
      </li>
    </ul>
    <p className="text-black text-2xl font-semibold hover:text-[#0A2F66] px-2 pt-4 cursor-pointer">
      Why Demand–Supply Alignment Matters for Institutions
    </p>
    <a href="" className="text-[#0A2F66] font-semibold px-2 pt-4 cursor-pointer">
      Read more
    </a>
  </div>


  <div className="flex flex-col items-start justify-start w-full">
    <img src="/image/blog-img4.png" alt="" className="rounded-3xl w-full" />
    <ul className="flex flex-row items-start gap-8 px-2 pt-4">
      <li className="flex flex-row items-center gap-1">
        <IoTimeOutline />
        <span>Jan 09,2024</span>
      </li>
      <li className="flex flex-row items-center gap-1">
        <MdOutlinePersonOutline />
        <span>Sandeep Gupta</span>
      </li>
    </ul>
    <p className="text-black text-2xl font-semibold hover:text-[#0A2F66] px-2 pt-4 cursor-pointer">
      Turning Ideas into Outcomes with the Right Ecosystem Support
    </p>
    <a href="" className="text-[#0A2F66] font-semibold px-2 pt-4 cursor-pointer">
      Read more
    </a>
  </div>

</div>

            </div>

            {/* section11 */}
            <div className="w-full ">
                <div className=" bg-[#FAF9F7] pt-20 pb-20 w-full ">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start 
                    justify-between gap-6 p-4 sm:px-6 md:px-10 lg:px-20  w-full">


                        <div className="lg:w-1/2 text-center lg:text-left">
                            <h2 className="text-2xl lg:text-3xl font-bold text-black">
                                See How Samadhantra Turns Requirements into Results
                            </h2>
                        </div>


                        <div className="lg:w-1/2 text-center lg:text-left">
                            <p className="text-gray-600 text-sm lg:text-base">
                                Samadhantra brings together startups, institutions, enterprises, and ecosystem partners
                                to deliver outcomes through structured, transparent collaboration.
                            </p>
                        </div>


                        <div className="lg:w-1/3 text-center lg:text-right">
                            <a
                                href="#"
                                className="inline-block bg-[#51993C] text-white 
                     px-6 py-3 rounded-3xl
                     text-sm md:text-base font-medium
                     hover:bg-[#3f7d2f] transition"
                            >
                                See How It Works
                            </a>
                        </div>

                    </div>
                </div>
            </div>


            {/* footer */}
            <div className='w-full bg-white text-black'>
                <div className='flex flex-col items-start justify-start gap-2 sm:p-2 md:px-4  w-full '>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5  items-start justify-between sm:px-4 md:px-8 lg:px-8 p-2 md:py-16 w-full'>
                        <div className='flex flex-col items-start justify-start gap-6 p-6 '>
                            <img src="/image/samadhantra-footer-logo.jpeg" alt="" height="70" width="120" />
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
                                <li className='text-black text-lg  cursor-pointer'><a href="/service">Privacy policy</a></li>
                                <li className='text-black text-lg  cursor-pointer'><a href="/event">Terms & condition</a></li>

                            </ul>

                        </div>
                        <div className='flex flex-col items-start justify-start gap-6 p-6 '>
                            <h3 className='text-black text-lg md:text-2xl font-bold'>Services</h3>
                            <ul className='flex flex-col items-start justify-start gap-4 '>
                                <li className='text-black text-lg  cursor-pointer'><a href=""></a>Startup & MSME</li>
                                <li className='text-black text-lg  cursor-pointer'><a href=""></a>Educational Institute</li>
                                <li className='text-black text-lg  cursor-pointer'><a href=""></a>Product Provider</li>
                                <li className='text-black text-lg  cursor-pointer'><a href=""></a>Institutes & Industry</li>

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
export default Home;