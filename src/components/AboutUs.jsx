import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-darkGreen text-white py-20 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative flex justify-center">
          {/* Large Image */}
          <div className="rounded-lg overflow-hidden w-3/4 lg:w-2/3">
            <img
              src="/home-about-image.avif"
              alt="Real estate team"
              className="w-full h-full object-cover"
            />
          </div>
         
          <div className="absolute bottom-0 right-8 w-1/3 lg:w-1/4 rounded-full shadow-lg">
            <img
              src="/home-about-image-float.png"
              alt="Modern house"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

      
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
          <span className="text-lg mb-4 block opacity-80">About us</span>
          <h2 className="text-4xl font-bold mb-6">About our Real Estate Firm</h2>
          <p className="mb-8 text-lg opacity-80">
            Our mission is simple: to provide unparalleled expertise, guidance, 
            and support to our clients across their real estate journey.
          </p>

          
          <div className="space-y-6">
            <div className="flex items-center justify-center lg:justify-start">
              <span className="mr-4 text-bright-orange text-3xl font-bold">💰</span>
              <div>
                <h3 className="font-semibold text-xl">Affordable Price</h3>
                <p className="opacity-80">
                  Offering competitive rates that make quality accessible to all.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <span className="mr-4 text-bright-orange text-3xl font-bold">✔</span>
              <div>
                <h3 className="font-semibold text-xl">Clear Legality</h3>
                <p className="opacity-80">
                  Ensuring transparent and compliant legal processes.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
