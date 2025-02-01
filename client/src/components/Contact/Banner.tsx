import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

const ContactUs: React.FC = () => {
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section with Background Image */}
      <motion.div 
        className="relative h-[400px]"
        variants={fadeInUp}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.img
            src={require("../../utils/About/image.png")}
            alt="Contact Us"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
          {/* Dark Overlay */}
          <motion.div 
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4">
          <div className="h-full flex flex-col justify-center">
            {/* Breadcrumb */}
            <motion.div 
              className="flex items-center space-x-2 text-sm text-white/90 mb-4"
              variants={slideFromLeft}
            >
            <div className="text-white">
  <h1 className="text-4xl mb-3 ff md:text-5xl lg:text-6xl font-bold">Contact us</h1>
  <div className="flex items-center space-x-2 text-sm mb-4">
    <Link to="/" className="text-orange-500 hover:text-orange-400 flex items-center">
      <FaHome className="text-orange-500 mr-2" /> {/* Added home icon */}
      Pages
    </Link>
    <span>›</span>
    <span>Contact Us</span>
  </div>
</div>
            </motion.div>

            
          </div>
        </div>
      </motion.div>

      
      {/* Contact Form Section */}
      <motion.div 
        className="py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="max-w-3xl mx-auto px-4">
          
          
          {/* Add your contact form here */}
          <motion.form 
            className="space-y-6"
            variants={fadeInUp}
          >
            {/* Add your form fields here */}
          </motion.form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;