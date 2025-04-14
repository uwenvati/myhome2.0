import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GetInTouchSection from '../components/GetInTouchSection';
import FooterSection from '../components/FooterSection';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      fullName: '',
      email: '',
      message: ''
    });
    // Show success message or redirect
  };

  const offices = [
    {
      id: 1,
      location: 'California',
      address: '123 Main Street, Apt 401 Los Angeles, CA 90001 United States',
      phone: '+44 (0)20 7608 7900',
      email: 'info@wilkinsoneyre.com',
      image: '/office-image-1.webp'
    },
    {
      id: 2,
      location: 'New York',
      address: '55 Broadway, Suite 302 New York, NY 10006 United States',
      phone: '+44 (0)20 7608 7921',
      email: 'info@wilkinsoneyre.com',
      image: '/office-image-2.webp'
    },
    {
      id: 3,
      location: 'Washington DC',
      address: '789 Elm Street, Unit 201 Washington, DC 20001 United States',
      phone: '+44 (0)20 7608 7922',
      email: 'info@wilkinsoneyre.com',
      image: '/office-image-3.webp'
    }
  ];

  return (
    <div className="contact-us-page">
      {/* Hero Section */}
      <div className="bg-darkGreen text-white py-16 px-8 md:px-10">
        <div className="flex items-center space-x-2 text-sm mb-4">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span>Properties</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-light">Contact Us</h1>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 px-8 md:px-10">
        <div className="flex flex-col max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xl text-gray-600">Contact</span>
            <h2 className="text-4xl md:text-6xl text-[#0a2a20] font-light mt-2">
              Question not answered yet?<br />
              We are here to help!
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="fullName" className="block text-lg text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-[#ff5a1f]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-[#ff5a1f]"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-[#ff5a1f]"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="px-8 py-3 bg-white text-[#ff5a1f] border border-[#ff5a1f] rounded-full hover:bg-[#ff5a1f] hover:text-white transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Offices Section */}
      <div className="py-16 px-8 md:px-10 bg-white">
        <h2 className="text-4xl md:text-5xl text-[#0a2a20] font-light text-center mb-16">Our All Offices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {offices.map(office => (
            <div key={office.id} className="office-card">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <img 
                  src={office.image} 
                  alt={`${office.location} Office`} 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/api/placeholder/400/320"; // Fallback image
                  }}
                />
              </div>
              <h3 className="text-2xl text-[#0a2a20] font-medium mb-4">{office.location}</h3>
              <p className="text-gray-700 whitespace-pre-line mb-2">
                {office.address.split(' ').slice(0, 3).join(' ')}
                <br />
                {office.address.split(' ').slice(3, 7).join(' ')}
                <br />
                {office.address.split(' ').slice(7).join(' ')}
              </p>
              <p className="text-gray-700 mb-1">{office.phone}</p>
              <p className="text-gray-700">{office.email}</p>
            </div>
          ))}
        </div>
        
      </div>
      <GetInTouchSection/>
      <FooterSection/>
    </div>
    
  );
};

export default ContactUs;