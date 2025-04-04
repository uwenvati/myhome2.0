import React, { useState } from 'react';

const FAQSection = () => {
  // FAQ data with question and answer pairs
  const faqItems = [
    {
      id: 1,
      question: "What services does Homeifye offer?",
      answer: "Homeifye connects buyers, sellers, and renters with a wide range of real estate services, including property listings, home valuation, and expert guidance through every step of the buying, selling, or renting process."
    },
    {
      id: 2,
      question: "How can I schedule a property tour?",
      answer: "You can schedule a property tour by visiting the property listing page and clicking on the 'Schedule Tour' button. Alternatively, you can contact our customer support team who will assist you in arranging a convenient time to visit the property."
    },
    {
      id: 3,
      question: "Does Homeifye provide financing assistance?",
      answer: "Yes, Homeifye partners with trusted financial institutions to provide our clients with financing options and mortgage assistance. Our advisors can help you understand the best financing solutions for your specific situation."
    }
    // Add more FAQ items as needed
  ];

  // State to track which FAQ item is currently open
  const [openItem, setOpenItem] = useState(null);

  // Toggle function to open/close FAQ items
  const toggleItem = (id) => {
    if (openItem === id) {
      setOpenItem(null); // Close the item if it's already open
    } else {
      setOpenItem(id); // Open the clicked item
    }
  };

  return (
    <section className="py-16 px-6 w-full max-w-6xl mx-auto">
      <h2 className="text-center text-5xl md:text-6xl font-light text-dark-green mb-16">
        Frequently Asked <br /> Question
      </h2>

      <div className="space-y-4">
        {faqItems.map((item) => (
          <div key={item.id} className="border-b border-gray-200">
            <button
              className="w-full py-6 flex justify-between items-center text-left"
              onClick={() => toggleItem(item.id)}
              aria-expanded={openItem === item.id}
            >
              <h3 className="text-xl md:text-2xl font-medium text-dark-green">
                {item.question}
              </h3>
              <div className={`text-orange-500 transition-transform duration-200 ${openItem === item.id ? 'rotate-0' : 'rotate-90'}`}>
                {openItem === item.id ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                )}
              </div>
            </button>
            
            {/* Content panel - show when item is selected */}
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                openItem === item.id ? 'max-h-96 pb-6' : 'max-h-0'
              }`}
            >
              <p className="text-gray-700 text-lg">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;