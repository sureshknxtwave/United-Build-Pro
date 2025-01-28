import React from 'react';
import { useLocation,Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaVimeoV } from 'react-icons/fa';
import TopContactBar from './Header.tsx';

const AlternateTopBar: React.FC = () => {
  return (
    <motion.div
      className="bg-[#1B2D3C] text-white py-2 px-4 text-xs font-bold"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-2">
            <MdEmail className="text-white w-4 h-4" />
            <a
              href="mailto:info@contract-site.com"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              info@contract-site.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <MdLocationOn className="text-white w-4 h-4" />
            <span>254 Lillian Blvd, Holbrook</span>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-center">
          {/* Left Side Contact Info */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MdLocationOn className="text-white w-4 h-4" />
              <span>254 Lillian Blvd, Holbrook</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdEmail className="text-white w-4 h-4" />
              <a
                href="mailto:info@contract-site.com"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                info@contract-site.com
              </a>
            </div>
          </div>

          {/* Right Side Social Links and CTA */}
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
            {/* CTA Button */}
            <Link to="/contact">
            <button  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded transition-colors duration-200">
              Make Schedule
            </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ConditionalTopBar: React.FC = () => {
  const location = useLocation();
  return location.pathname === '/' ? <TopContactBar /> : <AlternateTopBar />;
};

export default ConditionalTopBar;