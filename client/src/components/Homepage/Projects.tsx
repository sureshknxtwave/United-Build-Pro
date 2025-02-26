import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    category: "Interior",
    title: 'Interior Designing of 3 BHK Home',
    image: require("../../utils/HomePage/pr1.png"),
  },
  {
    id: 2,
    category: "Contruction",
    title: 'Construction Of Office Space',
    image: require("../../utils/HomePage/pr2.png"),
  },
  {
    id: 3,
    category: "Land Development",
    title: 'Layout Construction',
    image: require("../../utils/HomePage/pr3.png"),
  },
];

const RecentProjects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + slidesToShow >= projects.length ? 0 : prev + slidesToShow
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - slidesToShow < 0 ? projects.length - slidesToShow : prev - slidesToShow
    );
  };

  // Animation variants
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

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.section
      className="py-12 px-4 md:px-8 lg:px-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-5xl ff font-bold text-center mb-12 text-[#1B2D3C]"
          variants={projectVariants}
        >
          Our Recent Projects
        </motion.h2>

        {/* Projects Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-20 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="transform rotate-180 text-orange-500">➜</span>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-20 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-orange-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span>➜</span>
          </motion.button>

          {/* Projects Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              initial={false}
              animate={{
                // Adjust x transition based on screen width
                x: `${-103 * (currentIndex / slidesToShow)}%`
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
              
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="flex-shrink-0 m-2"
                  style={{
                    width: `${window.innerWidth <= 768 ? 99 / slidesToShow : 96 / slidesToShow}%`,
                  }}
                  variants={projectVariants}
                >
                  <motion.div
                    className="group relative mb-16"
                    transition={{ duration: 0.3 }}
                  >
                    {/* Project Background Image */}
                    <div
                      className="h-[400px] md:h-[500px] relative"
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                    <div className="absolute w-auto   left-5 right-5 bottom-0 transform translate-y-[40%] md:translate-y-[30%]">
                      <div className="bg-white p-4 md:p-6 shadow-lg">
                        <p className="text-gray-600 ff text-xs md:text-sm mb-1">{project.category}</p>
                        <h3 className="text-[#1B2D3C] ff text-base md:text-xl font-bold mb-2">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default RecentProjects;
