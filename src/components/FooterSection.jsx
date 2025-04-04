import React from 'react'
import Logo from '/brand-logo-dark.svg';

const FooterSection = () => {
  return (
    
    <footer className="bg-white text-black py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Homify Logo" className="w-20 h-20" />
            
          </div>
          <p className="text-sm">
            Homify is dedicated to revolutionizing the real estate experience through innovation and excellence.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all">
            Get for Free →
          </button>
        </div>

        {/* Pages section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Properties</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Template section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Template</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500 transition-colors">Style Guide</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Licenses</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Changelog</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">404</a></li>
          </ul>
        </div>

        {/* Contact section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <address className="not-italic space-y-2">
            <p>(62) 1829017</p>
            <p><a href="mailto:hello@homify.com" className="hover:text-orange-500 transition-colors">hello@homify.com</a></p>
            <p>2912 Meadowbrook Road, Los Angeles, CA 90017</p>
          </address>
        </div>
      </div>

      {/* Customization help section */}
      <div className="mt-12 p-6 bg-green-800 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Need Help Customizing Your Site?</h3>
            <p className="text-sm">Let us personalize your pages or make adjustments to help your site shine.</p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all">
            Get in Touch →
          </button>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-8 pt-8 border-t border-black flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© All rights reserved. Homify.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <p className="text-sm">Powered by Shammah</p>
          <p className="text-sm">Made in Shammah</p>
        </div>
      </div>
    </div>
  </footer>
);
};



export default FooterSection