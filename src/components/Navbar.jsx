import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-darkGreen px-6 py-4 flex items-center justify-between">
      
      <div className="flex items-center">
        <img src="/brand-logo.svg" alt="Logo" className="h-8 w-auto" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex space-x-8 text-white">
        <li className="hover:text-orange-600 duration-500">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-orange-600 duration-500">
          <Link to="/properties">Properties</Link>
        </li>
        <li className="hover:text-orange-600 duration-500">
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li className="hover:text-orange-600 duration-500">
          <Link to="/pages">Pages</Link>
        </li>
      </ul>

      <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition hidden lg:block duration-500">
        Get for Free
      </button>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center space-x-4">
        <button className="border border-white text-white px-6 py-2 rounded-full transition duration-300 hover:bg-white hover:text-black">
          Get for Free
        </button>

        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-darkGreen text-white text-center py-4 space-y-4 lg:hidden">
          <li onClick={() => setMenuOpen(false)}><Link to="/">Home</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/properties">Properties</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/contact">Contact Us</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/pages">Pages</Link></li>
        </ul>
      )}
    </nav>
  );
}




