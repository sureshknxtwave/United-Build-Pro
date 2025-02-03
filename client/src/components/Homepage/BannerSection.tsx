import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for sliding transitions
import Navbar from "../Navbar/Navbar.tsx";
import Modal from '../Modal/Modal.tsx';
import {Link} from 'react-router-dom'

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const carouselData: CarouselSlide[] = [
  {
    id: 1,
    title: "Your vision,",
    subtitle: "Our Expertise",
    description:
      "Bringing dreams to life from design to final touches, we deliver on time and within budget.",
    image: require("../../utils/HomePage/banner.png"),
  },
  {
    id: 2,
    title: "You Dream,",
    subtitle: "We’ll Make It Real",
    description:
      "All types of work – from designing and laying the Foundation, finishing and commissioning. Tight deadlines, reasonable.",
    image: require("../../utils/HomePage/banner2.png"),
  },
  // Add more slides as needed
];

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  // Image scroll animation variants
  const imageScrollVariants = {
    initial: { y: 0 },
    animate: { 
      y: [0, -20, 0], // Slight up and down movement
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Text animation variants
  const textVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="relative">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gray-100">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white mx-10 shadow-lg flex items-center justify-center hover:bg-gray-100 transition duration-300"
          aria-label="Previous slide"
        >
          <span className="transform rotate-180 text-orange-600">➜</span>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-orange-500 text-white mx-10 shadow-lg flex items-center justify-center hover:bg-orange-600 transition duration-300"
          aria-label="Next slide"
        >
          <span>➜</span>
        </button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative min-h-[400px] md:min-h-[600px]">
          <div className="flex flex-col md:flex-row md:mx-10 items-center justify-between py-12 md:py-20 space-y-10 md:space-y-0">
            {/* Left Content */}
            <motion.div
              key={`text-${currentSlide}`}
              initial={textVariants.initial}
              animate={textVariants.animate}
              exit={textVariants.exit}
              transition={textVariants.transition}
              className="max-w-xl z-10 text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4 text-center md:text-left">
                <div className="w-4 h-4 bg-orange-500"></div>
                <span className="text-orange-500 font-bold text-sm">
                    BUILDING YOUR FUTURE, TODAY
                </span>
            </div>

              <h1 className="ff text-3xl md:text-6xl font-bold text-[#1B2D3C] mb-4 md:mb-6 leading-tight">
                {carouselData[currentSlide].title}
                <br />
                {carouselData[currentSlide].subtitle}
              </h1>
              <p className="text-gray-600 mb-6 md:pr-36 md:mb-8 text-sm md:text-base">
                {carouselData[currentSlide].description}
              </p>
              <Link 
                to="/contact" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <button className="bg-[#1B2D3C] text-white px-6 ff font-semibold py-3 md:px-8 md:py-4 hover:bg-[#2a4459] transition duration-300">
                  Contact us
                </button>
              </Link>
            </motion.div>

            {/* Right Image with Scroll Effect */}
            <motion.div
              key={`image-${currentSlide}`}
              variants={imageScrollVariants}
              initial="initial"
             
              className="w-full  md:w-auto md:block flex justify-center"
            >
              <motion.img
                src={carouselData[currentSlide].image}
                alt="Construction Worker"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full  md:max-w-xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;