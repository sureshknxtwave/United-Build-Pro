import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import { useForm } from "react-hook-form";
interface Block {
  id: number;
  name: string;
  image: string;
  price: string;
}

const BlocksListing: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const blocks: Block[] = [
    {
      id: 1,
      name: '4 inch Concrete Block',
      image: require('../../utils/Blocks/2.png'),
      price: 'Enquire now!',
    },
    {
      id: 2,
      name: '5 inch Concrete Block',
      image: require('../../utils/Blocks/3.png'),
      price: 'Enquire now!',
    },
    {
      id: 3,
      name: '6 inch Concrete Block',
      image: require('../../utils/Blocks/4.png'),
      price: 'Enquire now!',
    },
    {
      id: 4,
      name: '6 inch Concrete Block',
      image: require('../../utils/Blocks/4.png'),
      price: 'Enquire now!',
    },
    {
      id: 5,
      name: '6 inch Concrete Block',
      image: require('../../utils/Blocks/4.png'),
      price: 'Enquire now!',
    },
    {
      id: 6,
      name: '6 inch Concrete Block',
      image: require('../../utils/Blocks/4.png'),
      price: 'Enquire now!',
    },
    {
      id: 7,
      name: '6 inch Concrete Block',
      image: require('../../utils/Blocks/4.png'),
      price: 'Enquire now!',
    },
    {
      id: 8,
      name: '6 inch Concrete Block',
      image: require('../../utils/Blocks/4.png'),
      price: 'Enquire now!',
    },
    {
      id: 9,
      name: '6 inch Concrete Block',
      image: require('../../utils/Blocks/4.png'),
      price: 'Enquire now!',
    },
    // Add more blocks as needed
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
    alert("Form submitted successfully!");
  };
  // Filter blocks based on search query
  const filteredBlocks = blocks.filter((block) =>
    block.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Animation Variants
  const slideIn = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-xl ff font-bold text-[#1B2D3C]">Concrete Blocks</h1>
        <div className="flex items-center w-full sm:w-auto">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="flex-grow sm:flex-grow-0 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content - Product Grid */}
        <div className="flex-grow">
          {filteredBlocks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredBlocks.map((block) => (
                <motion.div
                  key={block.id}
                  className="bg-white p-2 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300"
                  onClick={() => navigate(`/blocks/${block.id}`)}
                  variants={slideIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <img
                    src={block.image}
                    alt={block.name}
                    className="w-full h-40 md:h-[220px] object-contain mb-4"
                  />
                  <h3 className="text-lg ff font-bold text-gray-800 mb-2">{block.name}</h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/blocks/${block.id}/enquiry`);
                    }}
                    className="text-orange-500 text-sm ff font-semibold hover:text-orange-600"
                  >
                    {block.price}
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No blocks match your search query.</p>
          )}

          {/* Pagination */}
          <motion.div
            className="flex justify-center mt-8 flex-wrap space-x-2"
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          >
            <button className="w-8 rotate-180 h-8 rounded-full text-gray-600 hover:bg-gray-100 flex items-center justify-center">
              →
            </button>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-full shadow-lg flex items-center justify-center ${
                  currentPage === page
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="w-8 h-8 rounded-full text-gray-600 hover:bg-gray-100 flex items-center justify-center">
              →
            </button>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-80">
          {/* Contact Info Card */}
          <motion.div
            className="bg-white p-4 shadow-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="w-1 h-5 bg-orange-500 mr-2"></span>
              Contact us for best price
            </h3>
            <p className="text-orange-500 font-bold text-xl flex items-center">
              +91 90000 00000
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
      className="bg-gray-200 p-6 shadow-sm mb-6 border-2 rounded-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h3 className="text-lg font-semibold mb-2">Contact us for best price</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Input */}
        <div>
          <div className="flex bg-white items-center border rounded-md px-4 py-2">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Your Name*"
              {...register("name", { required: "Name is required" })}
              className="w-full focus:outline-none"
            />
          </div>
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email Input */}
        <div>
          <div className="flex bg-white items-center border rounded-md px-4 py-2">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Your Email*"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full focus:outline-none"
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Message Input */}
        <div>
          <div className="flex bg-white items-center border rounded-md px-4 py-2">
            <FaComment className="text-gray-500 mr-2 mb-10" />
            <textarea
              placeholder="Write Message*"
              {...register("message", { required: "Message is required" })}
              className="w-full h-20 py-2 focus:outline-none"
            ></textarea>
          </div>
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
        >
          SUBMIT
        </button>
      </form>
    </motion.div>
          {/* Bestsellers Section */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <span className="w-1 h-5 bg-orange-500 mr-2"></span>
              Best Sellers
            </h3>
            <div className="w-full flex justify-center">
              <img
                src={require("../../utils/Blocks/1.png")}
                alt="Bharathi Cement"
                className="w-40 object-contain"
              />
            </div>
            <p className="text-center mt-2 font-semibold">Bharathi 43 Grade</p>
            <div className="flex justify-center">
              <button className="p-3 bg-orange-500 text-white mt-4 hover:bg-orange-600 transition-colors duration-300">
                Enquire Now!
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlocksListing;
