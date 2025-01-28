import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaVimeoV } from 'react-icons/fa';

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

    const topContactBar = document.getElementById('top-contact-bar');
    if (topContactBar) {
      observer.observe(topContactBar);
    }

    return () => {
      if (topContactBar) {
        observer.unobserve(topContactBar);
      }
    };
  }, [threshold]);

  return isInView;
};

const TopContactBar: React.FC = () => {
  const isTopContactBarInView = useInView(0.1);

  return (
    <div
      id="top-contact-bar"
      className={`bg-[#1B2D3C] text-white text-[12px] py-2 font-bold transition-all duration-1000 ${
        isTopContactBarInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Contact Info */}
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4">
          {/* Essential Contact Info (Always Visible) */}
          <div className="flex items-center flex-wrap gap-4">
            {/* Phone Number */}
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
              <span>9731125090</span>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>Unitedbuildpro@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>#63/A, E Block, 2nd Stage, Dr Rajkumar Road, Subramanaya Nagar Bangalore-560010</span>
            </div>
          </div>

          {/* Desktop Only Content */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Address */}
            

            <div className="flex items-center space-x-4">
            {/* Social Media Links */}
            <div className="flex items-center space-x-2">
              <a href="#" className="hover:text-gray-300">
                <FaFacebookF className="text-white w-4 h-4" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaTwitter className="text-white w-4 h-4" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaVimeoV className="text-white w-4 h-4" />
              </a>
            </div>
           
          </div>

            {/* Country Indicator */}
            <div className="flex items-center space-x-2 border-l pl-4">
              <img className="h-4" src={require('../../utils/HomePage/india.png')} />
              <span>IN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;