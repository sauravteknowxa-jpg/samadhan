import { useState } from "react";
import { FaChevronRight, FaFacebookF, FaGear, FaInstagram, FaLinkedin, FaPeopleArrows, FaQuoteLeft, FaTwitter, FaUserGear } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
function About(){
    const [openIndex, setOpenIndex] = useState(null);

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
  const faqs = [
    {
      q: "Who can use Samadhantra’s support services?",
      a: "Samadhantra supports startups, MSMEs, institutions, corporates, service providers, students, and ecosystem partners who need structured guidance and reliable solutions."
    },
    {
      q: "How does Samadhantra provide support to users?",
      a: "Support is provided through a structured process where requirements are understood, validated, and matched with the most suitable stakeholders within the ecosystem."
    },
    {
      q: "Do you offer domain and website-related support?",
      a: "Yes. Samadhantra enables access to domain registration, hosting, website development, maintenance, and related digital services through verified ecosystem partners."
    },
    {
      q: "What makes Samadhantra different from traditional service platforms?",
      a: "Unlike traditional platforms, Samadhantra focuses on demand–supply alignment and multi-stakeholder collaboration to deliver transparent, scalable, and impact-driven solutions."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    return(
        <>

        <div className="w-full">
          <div className="bg-[#faefef] flex flex-col items-center justify-center gap-6 pt-24 pb-24 lg:pt-44 lg:pb-44">
                        <h3 className="text-7xl font-bold text-center">About Us</h3>
                        <ul className="flex flex-row items-center justify-center gap-5">
                            <li className="flex flex-row items-center justify-center gap-2">
                                <a href="" className="text-2xl font-bold">Home</a>
                                <FaChevronRight className="text-2xl font-bold" />
                            </li>
                            <li className="text-2xl font-bold">About Us</li>
                        </ul>
                    </div>
                
        </div>


          <div className="w-full">
                
                <div className=" flex flex-col lg:flex-row gap-8 bg-slate-50 p-4 sm:px-6 md:px-10 lg:px-24  w-full">
                    <div className="flex items-center justify-center w-full lg:w-1/2">
      <img
        src="/image/about-img.png"
        alt="About Samadhantra"
        className="rounded-2xl w-full "
      />
    </div>
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center gap-8  lg:w-1/2 lg:py-12 w-full ">
                        <div className="flex flex-col gap-2">
                            <span className="text-[#0A2F66] text-2xl font-semibold">About Samadhantra</span>
                             <h1 className="text-4xl text-black font-bold">Where Requirements Turn into Results</h1>
                        
                        </div>

                        <div className="flex flex-col gap-4 text-gray-700 leading-relaxed">
        <p>
          Samadhantra is a unified solution system designed to fulfil demand
          and supply for all stakeholders through a structured, transparent,
          and collaborative platform.
        </p>
        <p>
          We bring together individuals, institutions, service providers,
          industry, academia, NGOs, and government bodies to create an
          ecosystem where requirements are clearly identified, resources are
          efficiently aligned, and solutions are effectively delivered.
        </p>
        <p>
          Samadhantra is not just a platform—it is a system that enables
          collaboration, trust, and sustainable outcomes across sectors.
        </p>
      </div>

    
      <div className="flex flex-col gap-3">
  <div className="flex flex-col sm:flex-row gap-6">
    <h3 className="text-lg font-bold sm:w-1/2 text-center sm:text-left">
      One Platform, Every Stakeholder
    </h3>
    <h3 className="text-lg font-bold sm:w-1/2 text-center sm:text-left">
      Smart & Faster Solution Discovery
    </h3>
  </div>

  <div className="flex flex-col sm:flex-row gap-6">
    <h3 className="text-lg font-bold sm:w-1/2 text-center sm:text-left">
      Reduced Complexity, Better Execution
    </h3>
    <h3 className="text-lg font-bold sm:w-1/2 text-center sm:text-left">
      Seamless Collaboration Across Ecosystem
    </h3>
  </div>
</div>

      <div className="flex justify-center lg:justify-start">
        <a
          href=""
          className="bg-green-500 hover:bg-green-600 transition text-white rounded-full px-6 py-3 font-medium"
        >
          Know More About Samadhantra
        </a>
      </div>
      
                    </div>
                </div>

                
            </div>

            <div className="flex flex-col items-center justify-center w-full pt-10">
                        <div className="flex flex-col items-center justify-center p-4 sm:px-6 md:px-10 lg:px-24 text-center">
                            <h2 className="text-black  text-xl sm:text-2xl lg:text-3xl font-bold">
                               How Samadhantra Creates Impact
                            </h2>
        
                            <p className="
                            text-gray-700 
                            text-lg
                             
                            pt-3 pb-6
                            max-w-3xl
                            
                        ">
                               Connecting requirements with the right stakeholders through a structured ecosystem
                            </p>
                            
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-16 lg:px-28 pt-8 ">

                                <div className="flex flex-col rounded-2xl border border-gray-300 overflow-hidden">
                                    <img src="/image/vision.jpg" alt="Vision" className="w-full" />

                                    <div className="p-6">
                                        <span className="block text-center font-semibold text-lg mb-4">
                                            Our Vision
                                        </span>

                                        <ul className="list-disc list-outside pl-6 text-black space-y-2">
                                            <li>
                                            To become India’s most trusted multi-stakeholder solution ecosystem—enabling seamless alignment of demand and supply to drive inclusive growth and collective progress.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                
                                <div className="flex flex-col rounded-2xl border border-gray-300 overflow-hidden">
                                    <img src="/image/mission.jpg" alt="Mission" className="w-full" />

                                    <div className="p-6">
                                    <span className="block text-center font-semibold text-lg mb-4">
                                        Our Mission
                                    </span>

                                    <ul className="list-disc list-outside pl-6 text-black space-y-2 ">
                                        <li>To create a structured system that connects needs with the right solutions</li>
                                        <li>To enable collaboration across sectors and stakeholders</li>
                                        <li>To ensure transparency, efficiency, and fulfilment in every engagement</li>
                                    </ul>
                                    </div>
                                </div>

                          </div>
             </div>

             <div className="flex flex-col items-center justify-center w-full pt-10">
                            <div className="flex flex-col items-center justify-center p-4 sm:px-6 md:px-10 lg:px-24 text-center">
                                <span className="text-[#49981e]  text-xl sm:text-2xl font-bold">
                                    WHY SAMADHANTRA
                                </span>
            
                                <p className="
                                text-black 
                                text-2xl sm:text-3xl lg:text-4xl 
                                font-bold 
                                pt-3 pb-6
                                max-w-3xl
                                
                            ">
                                    A Unified Solution Ecosystem for Every Stakeholder
                                </p>
                                
                            </div>
            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-16 pt-6 ">
            
            
                                <div className="bg-[#f8f8f3] rounded-2xl p-6 flex flex-col items-start gap-4 
                              hover:shadow-lg transition">
            
                                    <div className="w-12 h-12 rounded-full bg-white 
                                flex items-center justify-center">
                                        <FaGear className="text-[#0A5585] text-xl" />
                                    </div>
            
                                    <h3 className="text-2xl font-bold text-black">
                                        Unified Solution System
                                    </h3>
            
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        One integrated platform that brings together demand creators and solution providers across sectors.
                                    </p>
                                </div>
            
            
                                <div className="bg-[#f8f8f3] rounded-2xl p-6 flex flex-col items-start gap-4 
                              hover:shadow-lg transition">
            
                                    <div className="w-12 h-12 rounded-full bg-white 
                                flex items-center justify-center">
                                        <FaPeopleArrows className="text-[#0A5585] text-xl" />
                                    </div>
            
                                    <h3 className="text-2xl font-bold text-black">
                                        Demand–Supply Alignment
                                    </h3>
            
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Structured matching of requirements with the right services, products, and partners for faster fulfilment.
                                    </p>
                                </div>
            
            
                                <div className="bg-[#f8f8f3] rounded-2xl p-6 flex flex-col items-start gap-4 
                              hover:shadow-lg transition">
            
                                    <div className="w-12 h-12 rounded-full bg-white 
                                flex items-center justify-center">
                                        <FaUserGear className="text-[#0A5585] text-xl" />
                                    </div>
            
                                    <h3 className="text-2xl font-bold text-black">
                                        Multi-Stakeholder Ecosystem
                                    </h3>
            
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Designed for individuals, institutions, industry, government bodies, and service providers to collaborate seamlessly.
                                    </p>
                                </div>
            
            
                                
            
                            </div>
            
                        </div>

           <div className="w-full pt-16">

 
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
    <span className="text-[#6ce36c] text-xl sm:text-2xl font-bold">
      LEADERSHIP
    </span>

    <p className="text-black text-xl sm:text-2xl lg:text-4xl font-bold pt-4 pb-12">
      Founder & CEO
    </p>
  </div>

  
  <div
    className="
      max-w-6xl mx-auto
      flex flex-col lg:flex-row
      items-center justify-between
      gap-14
      px-4 sm:px-6
    "
  >
    
    <div className="shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">
      <img
        src="/image/ramesh-sir.png"
        alt="Dr. Ramesh"
        className="
          w-64 h-64
          sm:w-72 sm:h-72
          xl:w-80 xl:h-80
          rounded-3xl
          object-contain
          shadow-lg
        "
      />
    </div>

    
    <div
      className="
        flex flex-col gap-4
        items-center lg:items-start
        text-center lg:text-left
      "
    >
      <span className="text-sm font-semibold text-gray-500 uppercase">
        Founder & CEO
      </span>

      <span className="text-2xl font-bold text-black">
        Dr. Ramesh
      </span>

      <p className="text-gray-600 max-w-2xl leading-relaxed">
        With deep-rooted experience in building collaborative ecosystems,
        Dr. Ramesh leads Samadhantra with a mission to bridge real
        requirements with the right solutions. His leadership focuses on
        transparency, trust, and long-term value creation across industries
        and communities.
      </p>

      <p className="text-gray-700 italic">
        “When the right people connect with the right purpose, meaningful impact follows”
      </p>

    
      <ul
        className="
          flex flex-col sm:flex-row
          gap-8 pt-6
          items-center lg:items-start
          text-center lg:text-left
        "
      >
        <li className="flex flex-col items-center lg:items-start">
          <span className="text-3xl font-bold text-black">12+</span>
          <h3 className="text-sm font-medium text-gray-600">
            Years of Leadership
          </h3>
        </li>

        <li className="flex flex-col items-center lg:items-start">
          <span className="text-3xl font-bold text-black">600+</span>
          <h3 className="text-sm font-medium text-gray-600">
            Collaborations Enabled
          </h3>
        </li>

        <li className="flex flex-col items-center lg:items-start">
          <span className="text-3xl font-bold text-black">100%</span>
          <h3 className="text-sm font-medium text-gray-600">
            Commitment to Impact
          </h3>
        </li>
      </ul>
    </div>
  </div>

</div>



            <div className="w-full pt-16" >
                    <div className="flex flex-col items-center justify-center p-4 sm:px-6 lg:px-10 lg:px-32 text-center">
                                <span className="text-[#1C1C25]  text-xl sm:text-2xl font-bold">
                                    Advisory Team
                                </span>
            
                                <p className="
                                text-black 
                                text-sm sm:text-lg lg:text-xl 
                                
                                pt-4 pb-6
                                max-w-3xl
                                
                            ">
                                    Guiding Samadhantra with strategic expertise and experience
                                </p>
                                
                            </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 sm:px-6 md:px-12 lg:px-24">

  
  <div className="flex flex-col rounded-3xl border border-gray-300 overflow-hidden w-full bg-white transition hover:shadow-xl">
    
    <div className="w-full aspect-[3/4] overflow-hidden">
      <img
        src="/image/rakesh-sir.png"
        alt="Rakesh Gupta"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    <div className="p-6 flex flex-col items-center text-center gap-1">
      <span className="text-[#16315a] font-semibold text-xl">
        Rakesh Gupta
      </span>
      <p className="text-gray-500 text-sm tracking-wide">
        Executive Advisor
      </p>
      <div className="w-12 h-1 bg-[#16315a] rounded-full mt-2"></div>
    </div>
  </div>

  
  <div className="flex flex-col rounded-3xl border border-gray-300 overflow-hidden w-full bg-white transition hover:shadow-xl">
    
    <div className="w-full aspect-[3/4] overflow-hidden">
      <img
        src="/image/priyanka mam.png"
        alt="Priyanka Sarathe"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    <div className="p-6 flex flex-col items-center text-center gap-1">
      <span className="text-[#16315a] font-semibold text-xl">
        Priyanka Sarathe
      </span>
      <p className="text-gray-500 text-sm tracking-wide">
        Executive Advisor
      </p>
      <div className="w-12 h-1 bg-[#16315a] rounded-full mt-2"></div>
    </div>
  </div>

 
  <div className="flex flex-col rounded-3xl border border-gray-300 overflow-hidden w-full bg-white transition hover:shadow-xl">
    
    <div className="w-full aspect-[3/4] overflow-hidden">
      <img
        src="/image/vikash-sir.png"
        alt="Vikash Gupta"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    <div className="p-6 flex flex-col items-center text-center gap-1">
      <span className="text-[#16315a] font-semibold text-xl">
        Vikash Gupta
      </span>
      <p className="text-gray-500 text-sm tracking-wide">
        Executive Advisor
      </p>
      <div className="w-12 h-1 bg-[#16315a] rounded-full mt-2"></div>
    </div>
  </div>

</div>

            </div>
            
            <div className="w-full pt-16">
                    <div className="flex flex-col items-center justify-center p-4 sm:px-6 md:px-10 lg:px-24 text-center">
                                <span className="text-[#1C1C25]  text-xl sm:text-2xl font-bold">
                                    Our Core Team
                                </span>
            
                                <p className="
                                text-black 
                                text-sm sm:text-lg lg:text-xl 
                                
                                pt-4 pb-6
                                max-w-3xl
                                
                            ">
                                    Professionals working together to deliver excellence
                                </p>
                                
                            </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 sm:px-6 md:px-12 lg:px-24">

  
  <div className="flex flex-col rounded-3xl border border-gray-300 overflow-hidden w-full bg-white transition hover:shadow-xl">
    
    <div className="w-full aspect-[3/4] overflow-hidden">
      <img
        src="/image/core-team2.jpg"
        alt="Prakash Rao"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    <div className="p-6 flex flex-col items-center text-center gap-1">
      <span className="text-[#2f6b4f] font-semibold text-xl">
        Prakash Rao
      </span>
      <p className="text-gray-600 text-sm tracking-wide">
        Ecosystem Partnerships Lead
      </p>
      <div className="w-12 h-1 bg-[#2f6b4f] rounded-full mt-2"></div>
    </div>
  </div>

  
  <div className="flex flex-col rounded-3xl border border-gray-300 overflow-hidden w-full bg-white transition hover:shadow-xl">
    
    <div className="w-full aspect-[3/4] overflow-hidden">
      <img
        src="/image/core-team3.png"
        alt="Nidhi Joshi"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    <div className="p-6 flex flex-col items-center text-center gap-1">
      <span className="text-[#2f6b4f] font-semibold text-xl">
        Nidhi Joshi
      </span>
      <p className="text-gray-600 text-sm tracking-wide">
        Product & Platform Manager
      </p>
      <div className="w-12 h-1 bg-[#2f6b4f] rounded-full mt-2"></div>
    </div>
  </div>


  <div className="flex flex-col rounded-3xl border border-gray-300 overflow-hidden w-full bg-white transition hover:shadow-xl">
    
    <div className="w-full aspect-[3/4] overflow-hidden">
      <img
        src="/image/core-team2.jpg"
        alt="Aarav Malhotra"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    <div className="p-6 flex flex-col items-center text-center gap-1">
      <span className="text-[#2f6b4f] font-semibold text-xl">
        Aarav Malhotra
      </span>
      <p className="text-gray-600 text-sm tracking-wide">
        Growth & Communications Manager
      </p>
      <div className="w-12 h-1 bg-[#2f6b4f] rounded-full mt-2"></div>
    </div>
  </div>

  
  <div className="flex flex-col rounded-3xl border border-gray-300 overflow-hidden w-full bg-white transition hover:shadow-xl">
    
    <div className="w-full aspect-[3/4] overflow-hidden">
      <img
        src="/image/core-team3.png"
        alt="Pooja Deshpande"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    <div className="p-6 flex flex-col items-center text-center gap-1">
      <span className="text-[#2f6b4f] font-semibold text-xl">
        Pooja Deshpande
      </span>
      <p className="text-gray-600 text-sm tracking-wide">
        Quality Analyst
      </p>
      <div className="w-12 h-1 bg-[#2f6b4f] rounded-full mt-2"></div>
    </div>
  </div>

</div>

            </div>
            
            
             

            <div className="w-full pt-16 pb-20">
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
                                                    <p className="text-lg text-black text-center font-semibold lg:px-40">"Samadhantra helped us clearly define our requirements and connect with the right partners at the right time. The structured process and transparent collaboration made execution smooth and outcome  driven." </p>
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
                                                    <p className="text-lg text-black text-center font-semibold lg:px-40">"Being part of the Samadhantra ecosystem gave us access to real and relevant demand. The platform helped us collabrate with multiple stakeholders and build long-term partnerships." </p>
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
                                                    <p className="text-lg text-black text-center font-semibold lg:px-40 ">"Samadhantra helped us clearly define our requirements and connect with the right partners at the right time. The structured process and transparent collaboration made execution smooth and outcome  driven." </p>
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
                                                    <p className="text-lg text-black text-center font-semibold lg:px-40">"Being part of the Samadhantra ecosystem gave us access to real and relevant demand. The platform helped us collabrate with multiple stakeholders and build long-term partnerships." </p>
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

           


            <div className="w-full bg-[#f9fafb]">
  <div className="container mx-auto">

    <div className="flex flex-col lg:flex-row gap-12 
                    px-4 sm:px-6 lg:px-12 
                    pt-24 pb-20 w-full items-center">

      
      <div className="flex flex-col items-start justify-start 
                      lg:w-1/2 w-full gap-5">

        <span className="text-sm font-bold tracking-widest text-blue-500">
          FREQUENTLY ASKED QUESTIONS
        </span>

        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
          Answers That Help You Move Forward
        </h1>

        <p className="text-gray-600 font-medium max-w-xl">
          Samadhantra connects your questions with the right experts and ecosystem partners—so you can move forward with confidence.
        </p>
        
        <div className="flex flex-col gap-4">
      {faqs.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg"
        >
         
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between
              px-5 py-4 text-left font-semibold text-lg
              hover:bg-gray-50"
          >
            <span>{item.q}</span>
            <span className="text-2xl font-bold">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

         
          {openIndex === index && (
            <div className="px-5 pb-4 text-gray-700 text-base">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  
        {/* <form className="w-full flex flex-col gap-4 pt-4">

          <div className="flex items-start gap-4">
            <label className="w-28 font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded-lg 
                         px-4 py-2 font-medium 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-start gap-4">
            <label className="w-28 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg 
                         px-4 py-2 font-medium 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-start gap-4">
            <label className="w-28 font-semibold text-gray-700">Mobile</label>
            <input
              type="text"
              name="mobile"
              className="w-full border border-gray-300 rounded-lg 
                         px-4 py-2 font-medium 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-start gap-4">
            <label className="w-28 font-semibold text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full border border-gray-300 rounded-lg 
                         px-4 py-2 font-medium 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-start gap-4">
            <label className="w-28 font-semibold text-gray-700">Address</label>
            <textarea
              name="address"
              rows="3"
              className="w-full border border-gray-300 rounded-lg 
                         px-4 py-2 font-medium 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form> */}

       
        {/* <div className="flex items-start gap-3 text-sm font-medium text-gray-700 pt-2">
          <input type="checkbox" className="mt-1 accent-blue-600" />
          <span>Accept Terms & Conditions and Privacy Policy.</span>
        </div> */}

       
        <div className="w-44 rounded-xl px-4 py-2.5 
                        bg-blue-600 text-white font-semibold 
                        text-center cursor-pointer 
                        hover:bg-blue-700 transition">
          Read More
        </div>
      </div>

      
      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          src="/image/faq.png"
          alt="Contact"
          className="w-full max-w-xl object-contain"
        />
      </div>

    </div>
  </div>
</div>
            
             <div className="w-full pt-10 pb-10">
                <div className="flex flex-col items-center justify-center p-4 sm:px-6 lg:px-10 lg:px-20">
                    <div className="flex flex-col items-center justify-center">
                                                    <span className="text-[#76e366]  text-xl sm:text-2xl font-bold">
                                                        WHAT WE DO
                                                    </span>
            
                                                    <p className="
                                                    text-black 
                                                    text-2xl sm:text-3xl lg:text-4xl text-center
                                                    font-bold 
                                                    sm:px-6 lg:px-10 lg:px-24
                                                    pt-3 pb-6
                                                    max-w-3xl
                                                    
                                                ">
                                                       Our End-to-End Solution Process

                                                    </p>
                                                </div>
                      <div className="grid grid-cols-1  lg:grid-cols-3 items-center justify-center gap-8 pt-8 pb-8 ">
                            <div className="flex flex-col items-center justify-start gap-6">
                                    <div className="flex flex-row gap-3 lg:pl-20 ">
                                         <div className="w-14 h-14 aspect-square rounded-full  bg-[#51993C] 
                                                flex items-center justify-center
                                                text-[#0A5585] text-2xl font-bold leading-none">
                                                1
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                    <span className="text-3xl font-bold">Identify the Requirement</span>
                                                    <p className="text-lg">Clearly understand and define the stakeholder’s exact need.</p>
                                            </div>
                                    </div>
                                    <div className="flex flex-row gap-3">
                                         <div className="w-14 h-14 aspect-square rounded-full  bg-[#51993C] 
                                                flex items-center justify-center
                                                text-[#0A5585] text-2xl font-bold leading-none ">
                                                2
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                    <span className="text-3xl font-bold">Requirement Analysis</span>
                                                    <p className="text-lg">Assess scope, feasibility, priorities, and constraints.</p>
                                            </div>
                                    </div>
                                    <div className="flex flex-row gap-3 lg:pl-20">
                                         <div className="w-14 h-14 aspect-square rounded-full  bg-[#51993C] 
                                                flex items-center justify-center
                                                text-[#0A5585] text-xl font-bold leading-none">
                                                3
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                    <span className="text-3xl font-bold">Stakeholder Matching</span>
                                                    <p className="text-lg">Identify and connect with the most relevant partners.</p>
                                            </div>
                                    </div>
                            </div>

                             <div className="flex flex-col gap-6 items-center">
                                    <img src="/image/what-we-do-img.png" alt="" className="object-contain"/>
                            </div>
                            <div className="flex flex-col items-center justify-start gap-6">
                                    <div className="flex flex-row gap-3 ">
                                         <div className="w-14 h-14 aspect-square rounded-full  bg-[#51993C] 
                                                flex items-center justify-center
                                                text-[#0A5585] text-xl font-bold leading-none">
                                                4
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                    <span className="text-3xl font-bold">Solution Planning</span>
                                                    <p className="text-lg">Design a customized, actionable solution roadmap</p>
                                            </div>
                                    </div>
                                    <div className="flex flex-row gap-3 lg:pl-16">
                                         <div className="w-14 h-14 aspect-square rounded-full  bg-[#51993C] 
                                                flex items-center justify-center
                                                text-[#0A5585] text-xl font-bold leading-none">
                                                5
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                    <span className="text-3xl font-bold">Execution & Coordination</span>
                                                    <p className="text-lg">Enable smooth execution through coordinated collaboration.</p>
                                            </div>
                                    </div>
                                    <div className="flex flex-row gap-3 ">
                                         <div className="w-14 h-14 aspect-square rounded-full  bg-[#51993C] 
                                                flex items-center justify-center
                                                text-[#0A5585] text-xl font-bold leading-none">
                                                6
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                    <span className="text-3xl font-bold">Delivery & Outcomes</span>
                                                    <p className="text-lg">Deliver results with measurable impact and accountability.</p>
                                            </div>
                                    </div>
                            </div>
                      </div>

                </div>

            </div>

            <div className="w-full pt-28 pb-20 bg-[#f9fafb]">
  <div className="container mx-auto">

    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10">

      
      <div className="flex flex-col items-center justify-center text-center max-w-3xl">
        <span className="text-[#76e366] text-xl sm:text-2xl font-bold">
          NEWSLETTER
        </span>

        <p className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold pt-3 pb-4">
          Join the Samadhantra Newsletter
        </p>

        <p className="text-gray-600 font-medium pb-8">
          Get ecosystem insights, collaboration opportunities, platform updates,
          and stories from startups, institutions, and partners—straight to your inbox.
        </p>
      </div>

      
      <form className="flex flex-col  items-center gap-4 w-full max-w-xl">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full bg-white border border-gray-300 
                     rounded-full px-5 py-3 
                     text-gray-700 font-medium 
                     shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 
                     text-white font-semibold 
                     rounded-xl px-6 py-3 
                     transition shadow-lg"
        >
          Subscribe to Updates
        </button>
      </form>

    </div>
  </div>
</div>



                       <div className='w-full bg-white text-black'>
                              <div className='flex flex-col items-start justify-start gap-2 sm:p-2 lg:px-4  w-full '>
                                  <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  items-start justify-between sm:px-4 lg:px-8 lg:px-8 p-2 lg:py-16 w-full'>
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
                                            <h3 className='text-black text-lg lg:text-2xl font-bold'>Quick Links</h3>
                                            
                                            <ul className='flex flex-col items-start justify-start gap-4 '>
                                                <li className='text-black text-lg  cursor-pointer'><a href="/">Home</a></li>
                                                <li className='text-black text-lg  cursor-pointer'><a href="/about">About</a></li>
                                                <li className='text-black text-lg  cursor-pointer'><a href="/service">Service</a></li>
                                                <li className='text-black text-lg  cursor-pointer'><a href="/blog">Blog</a></li>
                                                <li className='text-black text-lg  cursor-pointer'><a href="/contact">Contact Us</a></li>
                                                
                                                
                                            </ul>
                                      </div>
            
                                      <div className='flex flex-col items-start justify-start gap-6 p-6 '>
                                            <h3 className='text-black text-lg lg:text-2xl font-bold'>More</h3>
                                             <ul className='flex flex-col items-start justify-start gap-4 '>
                                                <li className='text-black text-lg  cursor-pointer'><a href="/stake">Stakeholder</a></li>
                                                <li className='text-black text-lg  cursor-pointer'><a href="/contact">FAQ</a> </li>
                                                <li className='text-black text-lg  cursor-pointer'><a href="/event">Privacy policy</a></li>
                                                <li className='text-black text-lg  cursor-pointer'><a href="/service">Terms & condition</a></li>
                                                
                                            </ul>   
            
                                      </div>
                                      
            
                                      <div className='flex flex-col items-start justify-start gap-6 p-6  '>
                                            <h3 className='text-black text-lg lg:text-2xl font-bold'>Events</h3>
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
                         <div className='bg-[#0A2F66] text-white flex flex-wrap items-center justify-center gap-2 p-3  sm:px-6 lg:px-12 lg:px-16  w-full'>
                                 <span className='text-[#ffffff] text-sm'>Copyright © 2026 Samadhantra. All Rights Reserved by <a href="">Samadhantra</a> .</span>
                         </div>
        </>
    )
}
export default About;