import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import TopContactBar from './Header.tsx';

const AlternateTopBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleJoinUsClick = () => {
    setIsModalOpen(true); // Open modal when button is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  const handleSubmit = (formData: { name: string; email: string; phone: string; subject: string; message: string }) => {
    console.log('Form submitted with data:', formData);
    handleCloseModal(); // Close the modal after submission
  };

  // Modal Component
  const Modal: React.FC<{
    isOpen: boolean;
    handleClose: () => void;
    handleSubmit: (formData: { name: string; email: string; phone: string; subject: string; message: string }) => void;
  }> = ({ isOpen, handleClose, handleSubmit }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    const [errors, setErrors] = useState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
      const newErrors = {
        name: formData.name ? '' : 'Name is required',
        email: formData.email ? '' : 'Email is required',
        phone: formData.phone ? '' : 'Phone number is required',
        subject: formData.subject ? '' : 'Subject is required',
        message: formData.message ? '' : 'Message is required',
      };
      setErrors(newErrors);
      return Object.values(newErrors).every((error) => !error);
    };

    const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validate()) {
        handleSubmit(formData);
      }
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4 shadow-lg">
          <h2 className="text-lg font-bold">Schedule a Meeting</h2>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
              {errors.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md resize-none"
                rows={4}
              />
              {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

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
              <a href="https://www.facebook.com/share/1LLhEwXUVz/" className="hover:text-gray-300">
                <FaFacebookF className="text-white w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/unitedbuildpro" className="hover:text-gray-300">
                <FaInstagram className="text-white w-4 h-4" />
              </a>
            </div>
            {/* CTA Button */}
            <button
              onClick={handleJoinUsClick}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded transition-colors duration-200"
            >
              Make Schedule
            </button>
            <Modal
              isOpen={isModalOpen}
              handleClose={handleCloseModal}
              handleSubmit={handleSubmit}
            />
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
