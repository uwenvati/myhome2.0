import React from "react";

const SearchSection = () => {
  return (
    <section className="relative -mt-12 z-10 px-4 py-4 md:px-0">
      <div className="max-w-7xl mx-auto bg-white p-10 md:p-6 rounded-xl shadow-lg flex flex-col md:flex-row md:items-center gap-4 lg:h-35">

        <div className="flex items-center bg-gray-100 px-4 py-3 rounded-full w-full cursor-pointer">
          <img src="/search-icon.svg" alt="search" className="mr-4"/>
          <input
            type="text"
            placeholder="Search for properties"
            className="w-full bg-transparent focus:outline-none"
          />
          <button className="bg-orange-500 text-white px-6 py-2  rounded-full font-medium cursor-pointer">
            Search
          </button>
        </div>

        
        <div className="flex flex-col md:flex-row w-full gap-4">
         
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-full w-full cursor-pointer">
            <img src="/home-icon.svg" alt="home-icon" />
            <select className="w-full bg-transparent focus:outline-none">
              <option>Properties</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>
          </div>

          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-full w-full cursor-pointer">
            <img src="/location-icon.svg" alt="location-icon" />
            <select className="w-full bg-transparent focus:outline-none">
              <option>Location</option>
              <option>Lagos</option>
              <option>Abuja</option>
            </select>
          </div>

          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-full w-full cursor-pointer">
            <img src="/types-icon.svg" alt="types-icon" />
            <select className="w-full bg-transparent focus:outline-none">
              <option>Types</option>
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default SearchSection;
