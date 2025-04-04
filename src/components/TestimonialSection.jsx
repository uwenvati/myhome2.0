import React, { useState } from 'react';

const TestimonialSection = () => {
  
  const testimonials = [
    {
      id: 1,
      text: "I was nervous about selling my home, but Homeifye exceeded my expectations. Their tools for pricing, staging, and marketing my property were outstanding, and I felt supported every step of the way. The team's expertise and guidance helped me sell quickly and for a great price. I highly recommend Homeifye to anyone looking to buy or sell real estate!",
      name: "Mark Orta",
      title: "CTO, Zelta Hand Co.",
      image: "/testimony-image.avif" 
    },
    {
      id: 2,
      text: "Homeifye made buying my first home so much easier than I expected. Their agents were knowledgeable and patient, explaining every step of the process. I'm so happy with my new home!",
      name: "Sarah Johnson",
      title: "Marketing Director, Bright Solutions",
      image: "/testimony-image2.avif" 
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-orange-500 w-full px-6 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-5xl md:text-6xl font-light mb-8 md:mb-10">
          Testimonials
        </h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-10">
          {/* Testimonial Text */}
          <div className="md:w-1/2">
            <p className="text-white text-xl md:text-2xl font-light leading-relaxed mb-8">
              {currentTestimonial.text}
            </p>
            
            <div className="text-white">
              <p className="text-xl md:text-2xl font-medium">{currentTestimonial.name}</p>
              <p className="text-lg md:text-xl font-light">{currentTestimonial.title}</p>
            </div>
          </div>
          
          {/* Testimonial Image - Mobile: Bottom, Desktop: Right */}
          <div className="w-full md:w-2/5 flex flex-col items-center md:items-end mt-6 md:mt-0">
            <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 mb-8 md:mb-0">
              {/* Changed to use the dynamic image path from currentTestimonial */}
              <img 
                key={currentTestimonial.id}
                src={currentTestimonial.image}
                alt={`Testimonial from ${currentTestimonial.name}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex justify-center md:justify-start mt-8 md:mt-12 gap-4">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;