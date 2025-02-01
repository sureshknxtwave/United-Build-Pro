import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

const AboutUs: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3
      }
    }
  };

  const slideFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  };

  const slideFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section with Background Image */}
      <motion.div 
        className="relative h-[300px] md:h-[400px] lg:h-[500px] mb-16"
        variants={fadeIn}
      >
        <div className="absolute inset-0">
          <img
            src={require('../../utils/About/image.png')}
            alt="Construction Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Breadcrumb and Title */}
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center"
          variants={fadeIn}
        >
          <div className="text-white">
  <h1 className="text-4xl mb-3 ff md:text-5xl lg:text-6xl font-bold">About us</h1>
  <div className="flex items-center space-x-2 text-sm mb-4">
    <Link to="/" className="text-orange-500 hover:text-orange-400 flex items-center">
      <FaHome className="text-orange-500 mr-2" /> {/* Added home icon */}
      Pages
    </Link>
    <span>›</span>
    <span>About Us</span>
  </div>
</div>
        </motion.div>
      </motion.div>

      {/* Company Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <h2 className="text-3xl text-center ff md:text-4xl lg:text-5xl font-bold text-[#1B2D3C] block md:hidden">
            United Buildpro Pvt Ltd
          </h2>
          {/* Left Side - Image */}
          <motion.div 
            className="relative"
            variants={slideFromLeft}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <img
                src={require('../../utils/HomePage/2.png')}
                alt="Construction Professional"
                className="w-full "
              />
            </div>
            
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="space-y-6"
            variants={slideFromRight}
            viewport={{ once: true }}
          >
           <h2 className="text-3xl ff md:text-4xl lg:text-5xl font-bold text-[#1B2D3C] hidden md:block">
            United Buildpro Pvt Ltd
          </h2>


            {/* Vision */}
            <motion.div 
              className="border-l-4 border-orange-500 pl-4"
              variants={fadeIn}
            >
              <h3 className="font-semibold mb-2 text-lg md:text-xl">Vision</h3>
              <p className="text-gray-600 text-sm md:text-base">
                To be a trusted leader in construction and design, creating innovative,
                sustainable, and timeless spaces that enrich lives and elevate businesses.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
              className="border-l-4 border-orange-500 pl-4"
              variants={fadeIn}
            >
              <h3 className="font-semibold mb-2 text-lg md:text-xl">Mission</h3>
              <p className="text-gray-600 text-sm md:text-base">
                To redefine excellence in construction and interior design by
                delivering spaces that inspire, uplift, and provide lasting value to our clients.
              </p>
            </motion.div>

            {/* Description Paragraphs */}
            <motion.div 
              className="space-y-4 text-gray-600"
              variants={fadeIn}
            >
              <p className="text-sm md:text-base leading-relaxed">
                We specialize in crafting dream spaces that reflect our clients' unique visions and
                aspirations. With a legacy of over 300 completed projects, each one stands as a
                testament to our commitment to excellence in architecture and interior design. From
                conceptualization to completion, we offer a wide range of services, including space
                planning, furniture arrangement, custom designs, and project coordination, ensuring
                every detail is executed with precision and care.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Our dedication doesn't stop at construction. We provide ongoing and post-completion
                services, such as on-site consultations, project surveys, design concepts, finishes, and
                furnishings, to ensure a smooth transition into your new home or workspace. Whether
                it's a residential property, commercial building, or hospitality center, our projects
                showcase unparalleled professionalism, creativity, and innovation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;