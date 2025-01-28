import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi'; // For email icon
import { FaPhoneAlt } from 'react-icons/fa'; // For phone icon
import { IoLocationSharp } from 'react-icons/io5'; // For location icon
// Custom hook to observe when an element enters the viewport
const useInView = (threshold: number = 0.1) => {
  const [isInView, setIsInView] = useState(false);

  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    const footer = document.getElementById('footer-section');
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, [threshold]);

  return isInView;
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const isFooterInView = useInView(0.1); // Trigger animation when 10% of the footer is in view
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <footer
      id="footer-section"
      
    >
      <div className={`bg-[#1B2D3C] text-white p-[100px] mx-auto  transition-all duration-1000 ${
        isFooterInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Section */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isFooterInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link to="/">
              <img
                src={require('../../utils/Footer/image.png')}
                alt="United Builders"
                className="h-22 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-300">
              Premier choice and trusted investors have been relying on Groundlink for dependable solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1LLhEwXUVz/" className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <FaFacebookF className="w-4 h-4 text-[#3b5998]" />
              </a>
              <a href="https://www.instagram.com/unitedbuildpro" className="w-8 h-8 rounded-full bg-[#FF6600] flex items-center justify-center">
                <FaInstagram className="w-4 h-4 text-white" />
              </a>
              
            </div>
          </div>

          {/* Useful Links */}
          <div
            className={`transition-all pt-5 duration-1000 ${
              isFooterInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link  onClick={scrollToTop} to="/about" className="text-gray-300 hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Products */}
          <div
            className={`transition-all pt-5 duration-1000 ${
              isFooterInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link onClick={scrollToTop} to="/blocks" className="text-gray-300 hover:text-white">
                  Listings
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/services" className="text-gray-300 hover:text-white">
                  Details
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-gray-300 hover:text-white"
                >
                  Enquiry Form
                </button>
              </li>
            </ul>
          </div>

          <div
  className={`transition-all pt-5 duration-1000 ${
    isFooterInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  <h3 className="text-lg font-semibold mb-4">Contact</h3>
  <ul className="space-y-3">
    <li className="flex items-center space-x-3">
      <HiMail className="text-white text-[18px]" /> {/* Email icon */}
      <a href="mailto:unitedbuildpro@gmail.com" className="text-gray-300 hover:text-white">
        unitedbuildpro@gmail.com
      </a>
    </li>
    <li className="flex items-center space-x-3">
      <FaPhoneAlt className="text-white text-[15px]" /> {/* Phone icon */}
      <a href="tel:+919731125090" className="text-gray-300 hover:text-white">
        +91 9731125090, 9731125090
      </a>
    </li>
    <li className="flex items-start space-x-3">
      <IoLocationSharp className="text-white text-[40px]" /> {/* Location icon */}
      <p className="text-gray-300">
        #63/A, E Block, 2nd Stage, Dr Rajkumar Road,
        Subramanaya Nagar Bangalore-560010
      </p>
    </li>
  </ul>
</div>
        </div>

        {/* Footer Bottom */}
        
      </div>
      <div className="bg-[#44647f] w-full h-[50px] flex items-center justify-center border-t border-gray-700">
  <div className="max-w-7xl w-full mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
    <p className="text-sm text-white text-center md:text-left">
      © United build pro {currentYear}. All rights reserved.
    </p>
    <div className="flex items-center space-x-4">
      <Link to="/terms" className="text-sm text-white hover:text-white">
        Terms of Use
      </Link>
      <span className="text-gray-400">|</span>
      <Link to="/privacy" className="text-sm text-white hover:text-white">
        Privacy Policy
      </Link>
    </div>
  </div>
</div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-lg shadow-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-[#1B2D3C] mb-6">Request a Consultation</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-200 outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-200 outline-none"
                required
              />
              <textarea
                name="projectDetails"
                placeholder="Project Details"
                value={formData.projectDetails}
                onChange={handleChange}
                className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-200 outline-none"
                rows={4}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors duration-300"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
