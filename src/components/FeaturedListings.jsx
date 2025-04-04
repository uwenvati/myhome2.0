import React from 'react';

const FeaturedListings = () => {
  const listings = [
    {
      id: 1,
      title: "Willow Heights",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam pulvinar gravida. Vestibulum porttitor ex eu nulla condimentum, fringilla aliquet arcu pharetra.",
      price: "$290000",
      image: "/feature-image-1.avif",
    },
    {
      id: 2,
      title: "Maple Residency",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam pulvinar gravida. Vestibulum porttitor ex eu nulla condimentum, fringilla aliquet arcu pharetra.",
      price: "$310000",
      image: "/feature-image-2.avif",
    },
    {
      id: 3,
      title: "Oakwood Estate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam pulvinar gravida. Vestibulum porttitor ex eu nulla condimentum, fringilla aliquet arcu pharetra.",
      price: "$280000",
      image: "/feature-image-3.avif",
    },
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-deep-green mb-12">Featured Listings</h2>
        <div className="space-y-12">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start hover:shadow-xl transition-all hover:text-orange-500 duration-300"
            >
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full md:w-1/2 h-64 object-cover rounded-lg"
              />
              <div className="md:w-1/2 md:pl-6 text-center md:text-left 0">
                <h3 className="text-2xl font-semibold text-deep-green mb-2 ">{listing.title}</h3>
                <p className="text-gray-700 mb-4">{listing.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-bright-orange">{listing.price} <span className="text-gray-500 text-sm">/ Monthly</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 border-2 border-bright-orange text-bright-orange rounded-full hover:bg-bright-orange hover:text-orange-500 transition">
            Explore all Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListings;
