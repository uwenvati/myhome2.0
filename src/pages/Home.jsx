import React from 'react'
import Hero from '../components/Hero'
import SearchSection from '../components/SearchSection'
import NewListing from '../components/NewListing'
import AboutUs from '../components/AboutUs'
import FeaturedListings from '../components/FeaturedListings'
import TestimonialSection from '../components/TestimonialSection'
import FAQsection from '../components/FAQsection'
import GetInTouchSection from '../components/GetInTouchSection'
import FooterSection from '../components/FooterSection'


const Home = () => {
  return (
    <div>
      
      <Hero/>
      <SearchSection />
      <NewListing />
      <AboutUs />
      <FeaturedListings />
      <TestimonialSection />
      <FAQsection />
      <GetInTouchSection />
      <FooterSection />
    </div>
  )
}

export default Home