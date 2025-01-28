import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa'; // Import icons

interface FormData {
  firstName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    phone: '',
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div 
        className="bg-white rounded-lg shadow-lg p-8 md:p-12"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-3xl ff font-bold text-[#1B2D3C] mb-8"
              variants={itemVariants}
            >
              Feel free to contact
              <br />
              us for any query.
            </motion.h2>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Contact Items with Animations */}
              {[
                {
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone Number:",
                  value: "Head office: (210) 123 451"
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Mail Address:",
                  value: "websitepreview123@gmail.com"
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Office Address:",
                  value: "254 Lillian Blvd, Holbrook"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 hover:bg-orange-50 p-1 rounded-[25px]"
                  variants={itemVariants}
                  custom={index}
                >
                  <motion.div 
                    className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <div className="text-sm text-gray-900 font-bold">{item.label}</div>
                    <div className="text-sm text-gray-500">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
  className="space-y-6"
  variants={itemVariants}
>
  {/* First Name Input */}
  <motion.div className="relative">
    <motion.input
      type="text"
      name="firstName"
      placeholder="First Name*"
      value={formData.firstName}
      onChange={handleChange}
      className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300 pr-10"
      variants={itemVariants}
      whileFocus={{ scale: 1.02 }}
    />
    <FaUser className="absolute right-3 bottom-3 text-gray-400" /> {/* Changed to bottom-3 */}
  </motion.div>

  {/* Email and Phone Inputs */}
  <motion.div 
    className="grid grid-cols-2 gap-4"
    variants={itemVariants}
  >
    {/* Email Input */}
    <motion.div className="relative">
      <motion.input
        type="email"
        name="email"
        placeholder="Mail Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300 pr-10"
        whileFocus={{ scale: 1.02 }}
      />
      <FaEnvelope className="absolute right-3 bottom-3 text-gray-400" /> {/* Changed to bottom-3 */}
    </motion.div>

    {/* Phone Input */}
    <motion.div className="relative">
      <motion.input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300 pr-10"
        whileFocus={{ scale: 1.02 }}
      />
      <FaPhone className="absolute right-3 bottom-3 text-gray-400" /> {/* Changed to bottom-3 */}
    </motion.div>
  </motion.div>

  {/* Message Textarea */}
  <motion.div className="relative">
    <motion.textarea
      name="message"
      placeholder="Enter Message"
      value={formData.message}
      onChange={handleChange}
      rows={6}
      className="w-full px-4 py-3 bg-gray-50 rounded-md border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300 resize-none pr-10"
      variants={itemVariants}
      whileFocus={{ scale: 1.02 }}
    />
    <FaComment className="absolute right-3 bottom-40 text-gray-400" /> {/* Changed to bottom-3 */}
  </motion.div>

  {/* Submit Button */}
  <motion.button
    type="submit"
    className="px-8 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300 flex items-center space-x-2"
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span>Submit Request</span>
    <motion.span
      initial={{ x: 0 }}
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      →
    </motion.span>
  </motion.button>
</motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;