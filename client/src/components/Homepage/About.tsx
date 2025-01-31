import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Modal from '../Modal/Modal.tsx'
import {Link} from 'react-router-dom'


const AboutUs: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const handleJoinUsClick = () => {
      setIsModalOpen(true); // Open modal when button is clicked
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false); // Close modal
    };
  
    const handleSubmit = (formData: { name: string; email: string; phone: string; subject: string; message: string }) => {
      console.log('Form submitted with data:', formData);
      // You can replace this with logic for sending data to an API
      handleCloseModal(); // Close the modal after submission
    };
  
  // Colors object
  const colors = {
    primary: '#1B2D3C',    // Dark blue
    orange: '#FF6600',     // Brand orange
    white: '#FFFFFF',      // White
    gray: {
      light: '#F5F5F5',   // Light gray background
      text: '#666666',    // Text gray
      border: '#E5E5E5',  // Border gray
    }
  };

  // Image loading state
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Scroll position state
  const [scrollY, setScrollY] = useState(0);

  // Update scrollY on scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Button component with hover effect
  const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <button 
      onClick={handleJoinUsClick}
        className="px-8 py-3 ff font-semibold  transition-all duration-300 mt-8"
        style={{ 
          backgroundColor: isHovered ? '#2a4459' : colors.primary,
          color: colors.white,
          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
          boxShadow: isHovered 
            ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </button>
    );
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-0 " style={{ backgroundColor: colors.white }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Container with Decorative Elements */}
          <motion.div 
            className="relative"
            initial={{ x: -200, opacity: 0 }}  // Start off-screen left
            animate={{ 
              x: scrollY > 150 ? 0 : -200,  // Slide in when scrolled down 150px
              opacity: scrollY > 150 ? 1 : 0  // Fade in when scrolled down 150px
            }}
            transition={{ duration: 0.8 }}     // Smooth transition
          >
            {/* Main Image */}
            <div className="relative z-10 rounded-lg overflow-hidden" 
                 >
              <img
                src={require("../../utils/HomePage/2.png")}
                alt="Construction Professional"
                className={`w-full h-[550px] object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
              />
              {/* Loading placeholder */}
              {!imageLoaded && (
                <div 
                  className="absolute inset-0 bg-gray-200 animate-pulse"
                  style={{ backgroundColor: colors.gray.border }}
                ></div>
              )}
            </div>
            
            {/* Decorative Frame */}
            <div 
              className="absolute top-8 -left-4 w-full h-full rounded-lg -z-10"
              style={{ border: `2px solid ${colors.orange}` }}
            ></div>
            
            
          </motion.div>

          {/* Content Container */}
          <motion.div 
            className="lg:pl-12"
            initial={{ x: 200, opacity: 0 }}  // Start off-screen right
            animate={{ 
              x: scrollY > 150 ? 0 : 200,   // Slide in when scrolled down 150px
              opacity: scrollY > 150 ? 1 : 0  // Fade in when scrolled down 150px
            }}
            transition={{ duration: 0.8 }}     // Smooth transition
          >
            <h2 
              className="text-3xl ff md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: colors.primary }}
            >
              About us
            </h2>
            
            <div className="space-y-6" style={{ color: colors.gray.text }}>
              <p className="leading-relaxed text-base md:text-md">
                Everyone has a vision of their dream home or workspace — a space filled with 
                special features and lasting impressions. At United Builders PVT Ltd, we bring 
                these visions to life. Our team of highly skilled professionals and designers 
                knows the right questions to ask to uncover your desires and create a space that's 
                uniquely yours.
              </p>
              
              <p className="leading-relaxed text-base md:text-md">
                Every project we undertake is a harmonious blend of our client's vision and our 
                design expertise. We focus on creating spaces that not only meet expectations but 
                exceed them, offering a seamless integration of style and functionality while at the same 
                time making life at ease spaces to form spaces system.
              </p>
            <Link to='/about' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Button >Know More</Button>
            </Link>
             

             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
