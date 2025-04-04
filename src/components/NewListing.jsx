const listings = [
  { id: 1, image: "/property-image-1.avif", name: "Cozy Cabin", price: "$250,000" },
  { id: 2, image: "/property-image-2.avif", name: "Modern Villa", price: "$450,000" },
  { id: 3, image: "/property-image-3.avif", name: "Luxury House", price: "$750,000" },
];

export default function NewListings() {
  return (
    <section className="py-16 px-6 relative">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-semibold text-gray-900">New Listings</h2>
        <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full text-lg font-medium transition duration-300 hover:bg-orange-500 hover:text-white">
  Explore All →
</button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {listings.map((listing, index) => (
    <div
      key={index}
      className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <img
        src={listing.image}
        alt={listing.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold">{listing.name}</h3>
        <span className="text-orange-500 font-bold">{listing.price}</span>
      </div>
    </div>
  ))}
</div>


    </section>
  );
}
