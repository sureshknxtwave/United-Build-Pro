import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom'

const AboutUs: React.FC = () => {

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  

  // Colors object
  const colors = {
    primary: '#1B2D3C',
    orange: '#FF6600',
    white: '#FFFFFF',
    gray: {
      light: '#F5F5F5',
      text: '#666666',
      border: '#E5E5E5',
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
        
        className="px-8 py-3 ff font-semibold transition-all duration-300 mt-8"
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

  // Desktop animation variants
  const desktopVariants = {
    initial: { x: -200, opacity: 0 },
    animate: { 
      x: scrollY > 150 ? 0 : -200,
      opacity: scrollY > 150 ? 1 : 0
    },
    transition: { duration: 0.8 }
  };

  // Mobile animation variants
  const mobileVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: scrollY > 100 ? 1 : 0.3
    },
    transition: { duration: 0.5 }
  };

  return (
    <>
      {/* Modal Component */}
      
      <section className="py-16 px-4 md:px-8 lg:px-0" style={{ backgroundColor: colors.white }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* On mobile, show heading first */}
            

            {/* Image Container with Decorative Elements */}
            <motion.div 
              className="relative "
              variants={isMobile ? mobileVariants : desktopVariants}
              initial="initial"
              animate="animate"
              transition={isMobile ? mobileVariants.transition : desktopVariants.transition}
            >
               <h2 
                className="block md:hidden text-4xl text-center ff md:text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: colors.primary }}
              >
                About us
              </h2>
              {/* Main Image */}
              <div className="relative z-10 rounded-lg overflow-hidden">
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
              className="  lg:pl-12 "
              variants={isMobile ? mobileVariants : desktopVariants}
              initial="initial"
              animate="animate"
              transition={isMobile ? mobileVariants.transition : desktopVariants.transition}
            >
             
              <h2 
                className=" md:block hidden text-3xl ff md:text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: colors.primary }}
              >
                About us
              </h2>
              
              <div className="space-y-6" style={{ color: colors.gray.text }}>
                <p className="leading-relaxed text-center md:text-start text-base md:text-md">
                  Everyone has a vision of their dream home or workspace — a space filled with 
                  special features and lasting impressions. At United Builders PVT Ltd, we bring 
                  these visions to life. Our team of highly skilled professionals and designers 
                  knows the right questions to ask to uncover your desires and create a space that's 
                  uniquely yours.
                </p>
                
                <p className="leading-relaxed text-center md:text-start text-base md:text-md">
                  Every project we undertake is a harmonious blend of our client's vision and our 
                  design expertise. We focus on creating spaces that not only meet expectations but 
                  exceed them, offering a seamless integration of style and functionality while at the same 
                  time making life at ease spaces to form spaces system.
                </p>
                <Link to='/about' className="flex justify-center md:justify-start"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <Button>Know More</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;