import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import EnquiryForm from './EnquiryForm.tsx';

interface BlockDetail {
  id: number;
  name: string;
  image: string;
  price: string;
  characteristics: string[];
  orderInfo: string[];
  description: string;
}

const blocksData: BlockDetail[] = [
  {
    id: 1,
    name: '4 inch Concrete Block',
    image: require("../../utils/Blocks/5.png"),
    price: '₹72/per block',
    characteristics: ['Weight: 17 lb - 19.5 lb', 'Compressive Strength: 4 - 4.5 N/mm²', 'Standard Size: As per weight'],
    orderInfo: ['Minimum Order Quantity: 500 Blocks', 'Delivery Time: 2-3 Business Days'],
    description: 'High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs. ',
  },
  {
    id: 2,
    name: '5 inch Concrete Block',
    image: require("../../utils/Blocks/5.png"),
    price: '₹85/per block',
    characteristics: ['Weight: 17 lb - 19.5 lb', 'Compressive Strength: 4 - 4.5 N/mm²', 'Standard Size: As per weight'],
    orderInfo: ['Minimum Order Quantity: 500 Blocks', 'Delivery Time: 2-3 Business Days'],
    description: 'High-quality concrete blocks suitable for various construction needs. High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.',
  },
  {
    id: 3,
    name: '6 inch Concrete Block',
    image: require("../../utils/Blocks/5.png"),
    price: '₹98/per block',
    characteristics: ['Weight: 17 lb - 19.5 lb', 'Compressive Strength: 4 - 4.5 N/mm²', 'Standard Size: As per weight'],
    orderInfo: ['Minimum Order Quantity: 500 Blocks', 'Delivery Time: 2-3 Business Days'],
    description: 'High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.',
  },
  {
    id: 4,
    name: '6 inch Concrete Block',
    image: require("../../utils/Blocks/5.png"),
    price: '₹98/per block',
    characteristics: ['Weight: 17 lb - 19.5 lb', 'Compressive Strength: 4 - 4.5 N/mm²', 'Standard Size: As per weight'],
    orderInfo: ['Minimum Order Quantity: 500 Blocks', 'Delivery Time: 2-3 Business Days'],
    description: 'High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.',
  },
  {
    id: 5,
    name: '6 inch Concrete Block',
    image: require("../../utils/Blocks/5.png"),
    price: '₹98/per block',
    characteristics: ['Weight: 17 lb - 19.5 lb', 'Compressive Strength: 4 - 4.5 N/mm²', 'Standard Size: As per weight'],
    orderInfo: ['Minimum Order Quantity: 500 Blocks', 'Delivery Time: 2-3 Business Days'],
    description: 'High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.',
  },
  {
    id: 6,
    name: '6 inch Concrete Block',
    image: require("../../utils/Blocks/5.png"),
    price: '₹98/per block',
    characteristics: ['Weight: 17 lb - 19.5 lb', 'Compressive Strength: 4 - 4.5 N/mm²', 'Standard Size: As per weight'],
    orderInfo: ['Minimum Order Quantity: 500 Blocks', 'Delivery Time: 2-3 Business Days'],
    description: 'High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.',
  },
  {
    id: 7,
    name: '6 inch Concrete Block',
    image: require("../../utils/Blocks/5.png"),
    price: '₹98/per block',
    characteristics: ['Weight: 17 lb - 19.5 lb', 'Compressive Strength: 4 - 4.5 N/mm²', 'Standard Size: As per weight'],
    orderInfo: ['Minimum Order Quantity: 500 Blocks', 'Delivery Time: 2-3 Business Days'],
    description: 'High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.',
  },
  {
    id: 8,
    name: '6 inch Concrete Block',
    image: require("../../utils/Blocks/5.png"),
    price: '₹98/per block',
    characteristics: ['Weight: 17 lb - 19.5 lb', 'Compressive Strength: 4 - 4.5 N/mm²', 'Standard Size: As per weight'],
    orderInfo: ['Minimum Order Quantity: 500 Blocks', 'Delivery Time: 2-3 Business Days'],
    description: 'High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.',
  },
  {
    id: 9,
    name: '6 inch Concrete Block',
    image: require("../../utils/Blocks/5.png"),
    price: '₹98/per block',
    characteristics: ['Weight: 17 lb - 19.5 lb', 'Compressive Strength: 4 - 4.5 N/mm²', 'Standard Size: As per weight'],
    orderInfo: ['Minimum Order Quantity: 500 Blocks', 'Delivery Time: 2-3 Business Days'],
    description: 'High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.High-quality concrete blocks suitable for various construction needs.',
  },
];

const BlockDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blockDetails, setBlockDetails] = useState<BlockDetail | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBlockDetails = () => {
      setIsLoading(true);
      try {
        const block = blocksData.find((b) => b.id === Number(id));
        setBlockDetails(block || null);
      } catch (error) {
        console.error('Error loading block details:', error);
        setBlockDetails(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadBlockDetails();
  }, [id]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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

  // Loading state
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (!blockDetails) {
    return (
      <motion.div 
        className="max-w-7xl mx-auto px-4 py-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-xl font-bold text-gray-800">Block not found</h2>
        <motion.button
          onClick={() => navigate('/blocks')}
          className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go Back
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Rest of your component code remains the same */}
      {/* Breadcrumb */}
      <motion.nav 
        aria-label="Breadcrumb" 
        className="mb-8"
        variants={itemVariants}
      >
        <ul className="flex items-center space-x-2 text-sm">
          <motion.li whileHover={{ scale: 1.05 }}>
            <button
              onClick={() => navigate('/blocks')}
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              Blocks
            </button>
          </motion.li>
          <li className="text-gray-400">›</li>
          <li className="text-gray-600">{blockDetails.name}</li>
        </ul>
      </motion.nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Section */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <img 
            src={blockDetails.image} 
            alt={blockDetails.name} 
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
          />
        </motion.div>

        {/* Details Section */}
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.h1 
            className="text-4xl ff font-bold text-[#1B2D3C]"
            variants={itemVariants}
          >
            {blockDetails.name}
          </motion.h1>
          
          <motion.p 
            className="text-orange-500 ff text-xl"
            variants={itemVariants}
          >
            {blockDetails.price}
          </motion.p>

          {/* Characteristics */}
          <motion.div variants={itemVariants}>
            <h2 className="font-bold text-lg mb-3 ff">Product Characteristics:</h2>
            <ul className="space-y-2">
              {blockDetails.characteristics.map((char, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center text-gray-600"
                  variants={itemVariants}
                >
                  <span className="w-2 h-2 bg-black rounded-full mr-3" />
                  {char}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Order Information */}
          <motion.div variants={itemVariants}>
            <h2 className="font-bold text-lg mb-3 ff">Order Information:</h2>
            <ul className="space-y-2">
              {blockDetails.orderInfo.map((info, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center text-gray-600"
                  variants={itemVariants}
                >
                  <span className="w-2 h-2 bg-black rounded-full mr-3" />
                  {info}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enquiry Button */}
          <motion.button
            onClick={() => setIsEnquiryOpen(true)}
            className="w-auto p-3 bg-orange-500 text-white py-3  hover:bg-orange-600 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Enquire now
          </motion.button>
        </motion.div>
      </div>

      {/* Description Section */}
      <motion.div 
        className="mt-12"
        variants={itemVariants}
      >
        <h2 className="text-xl font-bold text-[#1B2D3C] mb-4 ff">Description</h2>
        <p className="text-gray-600 leading-relaxed">{blockDetails.description}</p>
      </motion.div>

      {/* Enquiry Form */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <EnquiryForm
            selectedBlock={blockDetails.name}
            onClose={() => setIsEnquiryOpen(false)}
          />
        </div>
      )}
    </motion.div>
  );
};

export default BlockDetails;