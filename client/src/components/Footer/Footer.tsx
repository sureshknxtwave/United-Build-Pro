import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram,FaEnvelope } from 'react-icons/fa';

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
    <footer id="footer-section">
  <div
    className={`bg-[#1B2D3C] text-white p-[100px] mx-auto transition-all duration-1000 ${
      isFooterInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
  >
    <div className="grid grid-cols-1 md:grid-cols-3">
      {/* Logo and Social Section */}
      <div
        className={`space-y-6 my-6 md:my-0 md:px-20 transition-all duration-1000 ${
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
          <div  className="w-8 h-8 rounded-full bg-white text-center pt-1">
              <a
                href="https://www.facebook.com/share/1LLhEwXUVz/"
                
              >
                <i className="fab fa-facebook-f w-4 h-4 text-[#3b5998] sm:w-5 sm:h-5"></i>
              </a>
  </div>
  <div className="w-8 h-8 rounded-full bg-[#FF6600] text-center pt-1">
  <a
    href="https://www.instagram.com/unitedbuildpro"
    
  >
    <i className="fab fa-instagram w-4 h-4 text-white sm:w-5 sm:h-5"></i>
  </a>

  </div>
  
</div>

      </div>

      {/* Useful Links */}
      <div
        className={`transition-all md:pl-28 pt-5 duration-1000 ${
          isFooterInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
        <ul className="space-y-3">
          <li>
            <Link onClick={scrollToTop} to="/about" className="text-gray-300 hover:text-white">
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

      {/* Contact Section */}
      <div
        className={`transition-all mt-10 md:mt-0 pt-5 duration-1000 ${
          isFooterInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h3 className="text-lg font-semibold mb-4">Contact</h3>
        <ul className="space-y-3">
          <li className="flex items-center space-x-3">
            <i className="fas fa-envelope text-white text-[20px] md:text-[15px]"></i> {/* Email icon */}
            <a href="mailto:unitedbuildpro@gmail.com" className="text-gray-300 hover:text-white">
              unitedbuildpro@gmail.com
            </a>
          </li>
          <li className="flex items-center space-x-3">
            <i className="fas fa-phone-alt text-white text-[20px] md:text-[15px]"></i> {/* Phone icon */}
            <a href="tel:+919731125090" className="text-gray-300 hover:text-white">
              +91 9731125090, 9731125090
            </a>
          </li>
          <li className="flex items-start space-x-3">
            <i className="fas fa-map-marker-alt text-white text-[20px] md:text-[18px]"></i> {/* Location icon */}
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
    <div className="max-w-7xl w-full mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0">
      <p className="text-sm text-white text-center md:text-left">
        © United build pro {currentYear}. All rights reserved.
      </p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
