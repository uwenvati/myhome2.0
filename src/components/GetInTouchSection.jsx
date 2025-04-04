import React from 'react';

const GetInTouchSection = () => {

  return (
    <div className="flex flex-col lg:flex-row bg-green-950 text-white min-h-screen p-6 lg:p-12 items-center">
      
      <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 relative">
        <div className="w-full max-w-md">
         
          <div className="overflow-hidden rounded-b-[50px] transition-transform duration-300 hover:scale-105">
            <img 
              src="/section-cta-image.png" 
              alt="Modern house with wooden accents and large windows" 
              className="w-full h-full object-cover"
            />
          </div>
          
          
          {/*<div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <img 
              src="/section-cta-image22.png" 
              alt="Real estate agent in orange sweater" 
              className="w-32 h-32 rounded-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>*/}
        </div>
      </div>
      
     
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-12 lg:mt-0">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Are you looking to buy or rent a property?
        </h1>
        
        <div className="mt-6">
          <a 
            href="#contact" 
            className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-green-950 transition-colors duration-300"
          >
            Get In Touch
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
