import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';

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

  const [errors, setErrors] = useState({
    firstName: '',
    email: '',
    phone: '',
    message: '',
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '', // Clear error when user starts typing
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone Number must be 10 digits.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
      setFormData({
        firstName: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <h2 className="text-3xl ff font-bold text-[#1B2D3C] mb-8">
                Feel free to contact
                <br />
                us for any query.
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <FaPhone className="w-6 h-6 text-white" />
                    ),
                    label: 'Phone Number:',
                    value: 'Head office: (210) 123 451',
                  },
                  {
                    icon: (
                      <FaEnvelope className="w-6 h-6 text-white" />
                    ),
                    label: 'Mail Address:',
                    value: 'websitepreview123@gmail.com',
                  },
                  {
                    icon: (
                      <FaUser className="w-6 h-6 text-white" />
                    ),
                    label: 'Office Address:',
                    value: '254 Lillian Blvd, Holbrook',
                  },
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
                      <div className="text-sm text-gray-900 font-bold">
                        {item.label}
                      </div>
                      <div className="text-sm text-gray-500">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Section */}
            <div className="space-y-6">
  {/* Input Fields with Icons and Error Handling */}
  <div className="relative">
    <input
      type="text"
      name="firstName"
      placeholder="First Name*"
      value={formData.firstName}
      onChange={handleChange}
      className={`w-full px-4 py-3 bg-gray-50 rounded-md border ${
        errors.firstName ? 'border-red-500' : 'border-gray-200'
      } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300 pr-10`}
    />
    <FaUser className="absolute  right-3 top-6 transform -translate-y-1/2 text-gray-400" />
    {errors.firstName && (
      <span className="block text-red-500 text-sm mt-1">
        {errors.firstName}
      </span>
    )}
  </div>

  <div className="grid grid-cols-2 gap-4">
    <div className="relative">
      <input
        type="email"
        name="email"
        placeholder="Mail Address"
        value={formData.email}
        onChange={handleChange}
        className={`w-full px-4 py-3 bg-gray-50 rounded-md border ${
          errors.email ? 'border-red-500' : 'border-gray-200'
        } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300 pr-10`}
      />
      <FaEnvelope className="absolute right-3 top-6 transform -translate-y-1/2 text-gray-400" />
      {errors.email && (
        <span className="block text-red-500 text-sm mt-1">
          {errors.email}
        </span>
      )}
    </div>

    <div className="relative">
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className={`w-full px-4 py-3 bg-gray-50 rounded-md border ${
          errors.phone ? 'border-red-500' : 'border-gray-200'
        } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300 pr-10`}
      />
      <FaPhone className="absolute right-3 top-6 transform -translate-y-1/2 text-gray-400" />
      {errors.phone && (
        <span className="block text-red-500 text-sm mt-1">
          {errors.phone}
        </span>
      )}
    </div>
  </div>

  <div className="relative">
    <textarea
      name="message"
      placeholder="Enter Message"
      value={formData.message}
      onChange={handleChange}
      rows={6}
      className={`w-full px-4 py-3 bg-gray-50 rounded-md border ${
        errors.message ? 'border-red-500' : 'border-gray-200'
      } focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all duration-300 resize-none`}
    />
    <FaComment className="absolute right-3 top-3 text-gray-400" />
    {errors.message && (
      <span className="block text-red-500 text-sm mt-1">
        {errors.message}
      </span>
    )}
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="px-8 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300 flex items-center space-x-2"
  >
    Submit Request
  </button>
</div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
