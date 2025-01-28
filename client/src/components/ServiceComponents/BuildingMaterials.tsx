import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: require('../../utils/ServicesImages/7.png'),
    
    description: 'Trusted brandsand certified quality',
  },
  {
    icon: require('../../utils/ServicesImages/8.png'),
    
    description: 'Easy online ordering process',
  },
  {
    icon: require('../../utils/ServicesImages/9.png'),
    description: 'Fast and reliable delivery',
  },
];

const BuildingMaterialsService: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    })
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
  };

  return (
    <motion.div 
      className="bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="max-w-3xl mb-12"
          variants={itemVariants}
        >
          <h1 className="text-3xl ff md:text-5xl font-bold text-[#1B2D3C] mb-4">
            Building Materials Sales (E-Commerce)
          </h1>
          <p className="text-gray-600 text-lg">
            Quality materials for quality construction.
          </p>
        </motion.div>

        {/* Materials Grid and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Single Image */}
          <motion.div 
            className="aspect-square overflow-hidden rounded-lg"
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <img
              src={require("../../utils/ServicesImages/1.png")}
              alt="Materials Banner"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Description and CTA */}
          <motion.div 
            className="space-y-6 pt-20 relative"
            variants={itemVariants}
          >
            <p className="text-gray-600 text-[20px] leading-relaxed">
              We bring you an extensive range of premium building materials at competitive prices 
              through our user-friendly e-commerce platform. Whether you're constructing a home, 
              office, or commercial space, find everything you need at your fingertips with doorstep 
              delivery.
            </p>
            
            <motion.button
              className="bg-[#1B2D3C] text-white px-6 py-3  hover:bg-[#2a4459] transition-colors duration-300"
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enquire now
            </motion.button>

            {/* Decorative Dots */}
            <motion.div 
              className="absolute right-0 top-0 w-24 h-24 opacity-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1 }}
            >
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 bg-orange-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Key Features */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl ff font-bold text-[#1B2D3C] mb-8 text-center">
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={featureVariants}
                custom={index}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", bounce: 0.6 }}
                >
                  <div className="flex justify-center">
                  <img  className="h-16" src={feature.icon}/>
                  </div>
                  
                </motion.div>
                
                <p className="text-gray-400 text-lg font-bold px-20">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Materials Categories */}
        

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

export default BuildingMaterialsService;