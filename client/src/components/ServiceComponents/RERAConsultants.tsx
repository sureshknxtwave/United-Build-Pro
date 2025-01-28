import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Expertise {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const RealEstateConsultants: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  };

  const expertiseCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    })
  };

  const dotGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.2,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.3
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4
      }
    }
  };

  const expertiseAreas: Expertise[] = [
    {
      icon: require('../../utils/ServicesImages/9.png'),
    title: "Assistance with RERA approvals and documentation",
   
    },
    {
      icon: require('../../utils/ServicesImages/7.png'),
    title: "Property sales and leasing services",
    
    },
    {
      icon: require('../../utils/ServicesImages/8.png'),
    title: "Real estate investment consultation",
    
    }
    ];
    
    const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    };
    
    
    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can send formData to your backend or handle it as needed
    setIsModalOpen(false);  // Close the modal after submission
  };
  return (
    <motion.div 
      className="bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div 
          className="max-w-3xl mb-12"
          variants={itemVariants}
        >
          <h1 className="text-5xl ff md:text-4xl font-bold text-[#1B2D3C] mb-4">
            Real Estate & RERA Consultants
          </h1>
          <p className="text-gray-600 text-xl">
            Your trusted guide in real estate.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Featured Image */}
          <motion.div 
            className="relative"
            variants={imageVariants}
          >
            <motion.div 
              className="rounded-lg overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              <img
                src={require("../../utils/ServicesImages/5.png")}
                alt="Real Estate Protection"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Decorative Dots */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-24 h-24"
              variants={dotGridVariants}
            >
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 bg-orange-500 rounded-full"
                    variants={dotVariants}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Description and CTA */}
          <motion.div 
            className="space-y-6 p-3"
            variants={itemVariants}
          >
            <motion.p 
              className="text-gray-600 text-lg leading-relaxed"
              variants={itemVariants}
            >
              Navigating the real estate market can be challenging, but we simplify it for you. 
              From buying and selling to regulatory compliance, our experts provide tailored 
              advice and support.
            </motion.p>

            <motion.button
              className="bg-[#1B2D3C] text-white px-6 py-3  hover:bg-[#2a4459] transition-colors duration-300"
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enquire now
            </motion.button>
          </motion.div>
        </div>

        {/* Our Expertise Section */}
        <motion.div variants={itemVariants}>
          <motion.h2 
            className="text-3xl ff font-bold text-[#1B2D3C] mb-12 text-center"
            variants={itemVariants}
          >
            Our Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseAreas.map((expertise, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                variants={expertiseCardVariants}
                custom={index}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", bounce: 0.6 }}
                >
                 <div className="flex justify-center">
                  <img  className="h-16" src={expertise.icon}/>
                  </div>
                </motion.div>
                <h3 className="font-semibold text-grey-400 px-20 mb-2">
                  {expertise.title}
                </h3>
                
              </motion.div>
            ))}
          </div>
        </motion.div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-lg shadow-lg relative">
              <button
                onClick={() => setIsModalOpen(false)}  // Close modal when clicked
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
      </div>
    </motion.div>
  );
};

export default RealEstateConsultants;