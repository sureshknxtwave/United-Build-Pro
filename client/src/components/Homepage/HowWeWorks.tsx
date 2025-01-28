import React from "react";
import { motion, useInView } from "framer-motion";

interface WorkStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

const workSteps: WorkStep[] = [
  {
    id: "01",
    number: "01",
    title: "Collaborative Design Process",
    description:
      "We begin by understanding your vision, crafting tailored concepts with 3D visuals and clear specifications.",
  },
  {
    id: "02",
    number: "02",
    title: "Seamless Execution",
    description:
      "From construction to finishing, we deliver quality execution and timely results to bring your dream to life.",
  },
  {
    id: "03",
    number: "03",
    title: "Comprehensive Support",
    description:
      "We ensure complete satisfaction with regular updates, valued feedback, and meticulous final inspections.",
  },
];

const HowWeWork: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: i * 0.2
      }
    }),
    hover: {
      y: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5
      }
    }
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-0" ref={ref}>
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-[400px] z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `url(${require('../../utils/HomePage/how.png')})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 text-sm"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="max-w-7xl mx-auto bg-white p-10 my-[30px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.h2 
            className="text-5xl ff font-bold text-center text-black mb-16"
            variants={numberVariants}
          >
            How We Work
          </motion.h2>

          {/* Steps Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workSteps.map((step, index) => (
  <motion.div
    key={step.id}
    className="relative text-center p-8 bg-white transition-all duration-300 cursor-pointer w-full group" // Added group class
    variants={cardVariants}
    custom={index}
    whileHover="hover"
  >
    {/* Border Highlight */}
    <motion.div 
      className="absolute inset-0 border-gray-300 border-2 border-transparent hover:border-orange-500 transition-colors duration-300"
      whileHover={{ scale: 1.02 }}
    />

    {/* Step Number with Bottom Border Container */}
    <div className="relative">
      <motion.div
        className="text-7xl font-bold mb-6 transition-colors duration-300 text-gray-200"
        variants={numberVariants}
      >
        {step.number}
      </motion.div>
      {/* Bottom Border Line */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-[5px] bg-gray-200 transition-all duration-300 group-hover:w-22" />
    </div>

    {/* Step Title */}
    <motion.h3
      className="text-xl ff font-bold mb-4 transition-colors duration-300 text-[#1B2D3C]"
      variants={numberVariants}
    >
      {step.title}
    </motion.h3>

    {/* Step Description */}
    <motion.p 
      className="transition-colors duration-300 text-gray-600"
      variants={numberVariants}
    >
      {step.description}
    </motion.p>
  </motion.div>
))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowWeWork;