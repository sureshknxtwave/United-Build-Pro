import React, { useState } from 'react';
import { motion ,AnimatePresence} from 'framer-motion';

interface ChooseUsCard {
  id: string;
  number: string;
  title: string;
  description: string;
}

const chooseUsData: ChooseUsCard[] = [
  {
    id: '01',
    number: '01',
    title: 'Proven Expertise',
    description: 'With 300+ completed projects, we bring experience and excellence to every undertaking.',
  },
  {
    id: '02',
    number: '02',
    title: 'Tailored Solutions',
    description: 'We work closely with our clients to deliver designs that not only meet their specifications but also exceed their expectations.',
  },
  {
    id: '03',
    number: '03',
    title: 'Comprehensive Services',
    description: 'From small-scale renovations to large-scale land development, we manage projects of all sizes with the same level of dedication.',
  },
  {
    id: '04',
    number: '04',
    title: 'Value Creation',
    description: 'Our designs enhance both aesthetics and functionality of spaces while ensuring high returns on investment for commercial properties.',
  },
  {
    id: '05',
    number: '05',
    title: 'Reliable Partnership',
    description: 'We pride ourselves on delivering timely and dependable service that prioritizes client satisfaction.',
  },
  {
    id: '06',
    number: '06',
    title: 'Client-Centric Approach',
    description: 'We prioritize client satisfaction by providing dedicated support, personalized attention, and expertise at every stage of the project.',
  },
];

const WhyChooseUs: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string>('01');

  // Container variants for staggered children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Card variants with sliding effect
  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 3 === 0 ? -50 : index % 3 === 2 ? 50 : 0,
      y: 50
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  // Hover animation for cards
  const hoverVariants = {
    hover: {
      scale: 1.03,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[F9F8FB] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title with Animation */}
        <motion.h2 
          className="text-3xl ff md:text-5xl font-bold text-center mb-12 text-[#1B2D3C]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why choose us?
        </motion.h2>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {chooseUsData.map((card, index) => (
  <motion.div
    key={card.id}
    className={`relative p-6 sm:p-8 hover:bg-orange-500 border-2 transition-colors duration-300 cursor-pointer`}
    onClick={() => setActiveCard(card.id)}
    variants={cardVariants}
    custom={index}
    whileHover="hover"
    variants={hoverVariants}
    layout
  >
    {/* Card Content with AnimatePresence for smooth color transitions */}
    <AnimatePresence mode="wait">
      <motion.div
        key={activeCard === card.id ? 'active' : 'inactive'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="group"  // Group to manage hover state
      >
        {/* Card Number */}
        <div
          className={`text-4xl text-orange-500 md:text-5xl font-bold mb-4 group-hover:text-white`}
        >
          {card.number}
        </div>

        {/* Card Title */}
        <h3
          className={`text-lg md:text-xl ff font-bold mb-3 group-hover:text-white`}
        >
          {card.title}
        </h3>

        {/* Card Description */}
        <p
          className={`text-sm text-gray-600 md:text-base leading-relaxed group-hover:text-white`}
        >
          {card.description}
        </p>
      </motion.div>
    </AnimatePresence>
  </motion.div>
))}

        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;