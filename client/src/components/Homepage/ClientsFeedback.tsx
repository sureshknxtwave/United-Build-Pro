import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Feedback {
  id: number;
  content: string;
  author: string;
  position: string;
  rating: number;
  authorImage: string;
}
const feedbacks: Feedback[] = [
  {
    id: 1,
    content1:'precious ipsum dolor sit amet',
    content2:' consectetur adipisicing elit, sed dos',
    content3: 'mod tempor incididunt ut labore',
    content4: 'et dolore magna aliqua. Ut enim ad',
    content5: 'min veniam, quis nostrud Precious',
    content6: 'ips um dolor sit amet, consecte',
    
    author: 'Lee Barners',
    position: 'Managing Director',
    rating: 5,
    authorImage: require('../../utils/HomePage/men.jpg'),
  },
  {
    id: 2,
    content1:'precious ipsum dolor sit amet',
    content2:' consectetur adipisicing elit, sed dos',
    content3: 'mod tempor incididunt ut labore',
    content4: 'et dolore magna aliqua. Ut enim ad',
    content5: 'min veniam, quis nostrud Precious',
    content6: 'ips um dolor sit amet, consecte',
    
    author: 'Jane Doe',
    position: 'Project Manager',
    rating: 4,
    authorImage: require('../../utils/HomePage/women.jpg'),
  },
  {
    id: 3,
    content1:'precious ipsum dolor sit amet',
      content2:' consectetur adipisicing elit, sed dos',
      content3: 'mod tempor incididunt ut labore',
      content4: 'et dolore magna aliqua. Ut enim ad',
      content5: 'min veniam, quis nostrud Precious',
      content6: 'ips um dolor sit amet, consecte',
      
    author: 'John Smith',
    position: 'CEO',
    rating: 5,
    authorImage: require('../../utils/HomePage/women2.jpeg'),
  },
];

const ClientsFeedback: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleFeedbacks, setVisibleFeedbacks] = useState<Feedback[]>([]);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const endIndex = currentIndex + slidesToShow;
    setVisibleFeedbacks(feedbacks.slice(currentIndex, endIndex));
  }, [currentIndex, slidesToShow]);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + slidesToShow >= feedbacks.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? feedbacks.length - slidesToShow : prev - 1
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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

  return (
    <section className="py-16 my-[100px] px-4 md:px-8 lg:px-0 relative overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.h2
          className="text-3xl ff md:text-5xl font-bold text-center mb-16"
          variants={cardVariants}
        >
          Clients Feedback
        </motion.h2>

        {/* Feedback Carousel */}
        <div className="relative px-4 md:px-12">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            className="absolute -left-4 text-orange-500 border-2 border-orange-500 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="transform rotate-180">➜</span>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12  text-orange-500 border-2 border-orange-500 rounded-full shadow-lg flex items-center justify-center  transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span>➜</span>
          </motion.button>

          {/* Feedback Cards */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-6 md:gap-8"
              initial={false}
              animate={{
                x: `${-100 * (currentIndex / slidesToShow)}%`
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              {feedbacks.map((feedback) => (
                <motion.div
                  key={feedback.id}
                  className={`flex-shrink-0 ${
                    slidesToShow === 1 
                      ? 'w-full' 
                      : slidesToShow === 2 
                      ? 'w-1/2' 
                      : 'w-1/3'
                  }`}
                  variants={cardVariants}
                >
                  <div className=" p-6 md:p-8   transition-all duration-300 shadow-lg my-2  flex flex-col justify-between md:h-[350px] border-b-4 border-transparent hover:border-orange-500">
                   
                    {/* Content */}
                    <h1 className="mb-1 text-gray-600 text-sm md:text-[16px]">
                      {feedback.content1}
                    </h1>
                    <h1 className="mb-1 text-gray-600 text-sm md:text-[16px]">
                      {feedback.content2}
                    </h1>
                    <h1 className="mb-1 text-gray-600 text-sm md:text-[16px]">
                      {feedback.content3}
                    </h1>
                    <h1 className="mb-1 text-gray-600 text-sm md:text-[16x]">
                      {feedback.content4}
                    </h1><h1 className="mb-1 text-gray-600 text-sm md:text-[16px]">
                      {feedback.content5}
                    </h1><h1 className="mb-1 text-gray-600 text-sm md:text-[16px]">
                      {feedback.content6}
                    </h1>

                    {/* Author */}
                    <div className="flex items-center">
                      <motion.img
                        src={feedback.authorImage}
                        alt={feedback.author}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full mr-4 border-2 border-gray-300"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div>
                        <h3 className="font-bold text-[#1B2D3C] text-base md:text-lg">
                          {feedback.author}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feedback.position}
                        </p>
                      </div>
                    </div>

                   
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ClientsFeedback;