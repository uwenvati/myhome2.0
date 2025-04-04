const Hero = () => {
  return (
    <section className="bg-[#0A231E] text-white min-h-screen flex items-center px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto">
        
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Find the right and best home for your family
          </h1>
          <button className="border border-white text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 transition duration-300 hover:bg-white hover:text-black">
            <span>Start exploring</span>
            <span>→</span>
          </button>
        </div>

        <div className="lg:w-1/2 flex justify-center relative mt-12 lg:mt-0">
          
          <div className="w-full h-auto rounded-t-[100px] md:rounded-t-[150px] object-cover">
            <img
              src="/home-hero.avif"
              alt="House"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute bottom-0 left-8 w-[100px] md:w-[140px] rounded-lg shadow-lg overflow-hidden">
         <video 
       src="/video-hero.mp4" 
    autoPlay 
    loop 
    muted 
    playsInline 
    className="w-full h-full object-cover rounded-lg">
           </video>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
