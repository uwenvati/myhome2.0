import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SearchSection from "./SearchSection";
import NewListings from "./NewListing";
import AboutUs from "./AboutUs";
import FeaturedListings from "./FeaturedListings";
import TestimonialSection from "./TestimonialSection";
import FAQSection from "./FAQsection";
import GetInTouchSection from "./GetInTouchSection";
import FooterSection from "./FooterSection";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SearchSection />
      <NewListings />
      <AboutUs />
      <FeaturedListings />
      <TestimonialSection />
      <FAQSection />
      <GetInTouchSection />
      
      {/* This is where different pages will load */}
      <Outlet />

      <FooterSection />
    </div>
  );
};

export default Layout;
