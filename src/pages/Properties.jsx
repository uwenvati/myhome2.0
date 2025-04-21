import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { supabase } from '../supabaseClient';
import SearchSection from '../components/SearchSection';
import GetInTouchSection from '../components/GetInTouchSection';
import FooterSection from '../components/FooterSection';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch properties from Supabase
    const fetchProperties = async () => {
      try {
        const { data, error } = await supabase
          .from('properties')
          .select('*');
        
        if (error) {
          throw error;
        }
        
        setProperties(data);
      } catch (err) {
        setError('Error loading properties');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="properties-page">
      {/* Hero Section */}
      <div className="bg-darkGreen text-white py-16 px-8 md:px-10">
        <div className="flex items-center space-x-2 text-sm mb-4">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span>Properties</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-light">Properties</h1>
      </div>
      
      <SearchSection />
     
      {/* Property Listings */}
      <div className="py-12 px-4 md:px-10">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-xl">Loading properties...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-xl text-red-500">{error}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map(property => (
                <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative group">
                    <img 
                      src={property.image} 
                      alt={property.name} 
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/api/placeholder/400/320"; // Fallback image
                      }}
                    />
                    {/* Overlay that appears on hover */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    
                    {/* Expand icon that appears on hover */}
                    <div className="absolute bottom-4 right-4 bg-[#0a2a20] rounded-full p-3 cursor-pointer hover:bg-opacity-90 transition-all transform scale-0 group-hover:scale-100 duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 3H21V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 21H3V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 3L14 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 21L10 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-normal text-[#ff5a1f]">{property.name}</h3>
                      <p className="text-xl font-medium">$ {property.price} USD</p>
                    </div>
                    <div className="mt-2 flex justify-between">
                      <p className="text-gray-600">{property.address}</p>
                      <p className="text-gray-600">{property.size} Sq.Ft</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button className="px-6 py-3 border border-[#ff5a1f] text-[#ff5a1f] rounded-full hover:bg-[#ff5a1f] hover:text-white transition-colors">
                Next <span className="ml-1">&gt;</span>
              </button>
            </div>
          </>
        )}
      </div>
      
      <GetInTouchSection />
      <FooterSection />
    </div>
  );
};

export default Properties;