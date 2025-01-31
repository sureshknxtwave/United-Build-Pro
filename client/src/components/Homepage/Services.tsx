import React from 'react';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom'

interface ServiceCard {
  id: number;
  img: string; // Default image
  hoverImg: string; // Hover image
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    id: 1,
    path:'building-materials',
    img: require('../../utils/HomePage/ser1.png'),
    hoverImg: require('../../utils/HomePage/ser7.png'),
    title: 'Building Materials',
    
    description:
      'United Builders Pvt Ltd is a one-stop solution that offers a hassle-free way to source the quality building supplies that the project needs.',
  },
  {
    id: 2,
    path:'joint-ventures',
    img: require('../../utils/HomePage/ser2.png'),
    hoverImg: require('../../utils/HomePage/ser8.png'),
    title: 'Joint Ventures',
    description:
      'United Builders Pvt Ltd specializes in fostering successful partnerships through joint development ventures.',
  },
  {
    id: 3,
    path:'rera-consultants',
    img: require('../../utils/HomePage/ser3.png'),
    hoverImg: require('../../utils/HomePage/ser9.png'),
    title: 'RERA Consultants',
    description:
      'Navigating the complexities of real estate registration is easier with United Builders expert consultants by your side.',
  },
  {
    id: 4,
    path:'2d-3d-consultant',
    img: require('../../utils/HomePage/ser4.png'),
    hoverImg: require('../../utils/HomePage/ser10.png'),
    title: '2D & 3D Consultant',
    description:
      'Designing a building starts with a vision, and at United Builders, we help you visualize that vision with precision.',
  },
  {
    id: 5,
    path:'construction-interior',
    img: require('../../utils/HomePage/ser5.png'),
    hoverImg: require('../../utils/HomePage/ser11.png'),
    title: 'Construction & Interior',
    description:
      "Your dream space deserves the best execution, and that's where United Builders Pvt Ltd excels.",
  },
  {
    id: 6,
    path:'land-development',
    img: require('../../utils/HomePage/ser6.png'),
    hoverImg: require('../../utils/HomePage/ser12.png'),
    title: 'Land Development',
    description:
      'At United Builders Pvt Ltd, we transform undeveloped land into thriving spaces through our comprehensive land development services.',
  },
];

const Services: React.FC = () => {
  const colors = {
    primary: '#1B2D3C',
    orange: '#FF6600',
    white: '#FFFFFF',
  };

  return (
    <section
      className="  px-4 md:px-8 lg:px-0"
      style={{ backgroundColor: colors.white }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl ff font-bold text-center mb-12" style={{ color: colors.primary }}>
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group relative p-6 cursor-pointer"
              style={{
                backgroundColor: colors.white,
                boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hover Background */}
              <div
                className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: colors.orange }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon (Switch between default and hover images) */}
                <div className="relative mb-3">
                  <img
                    className="h-16 group-hover:hidden"
                    src={service.img}
                    alt={`${service.title} Icon`}
                  />
                  <img
                    className="h-16  hidden group-hover:block"
                    src={service.hoverImg}
                    alt={`${service.title} Icon Hover`}
                  />
                </div>

                {/* Title */}
                <motion.h3
                  className="text-xl ff font-bold mb-3 transition-colors duration-300 group-hover:text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="mb-6 transition-colors duration-300 group-hover:text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {service.description}
                </motion.p>

                {/* Read More Link */}
                <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to={`/services/${service.path}`}>
                <div className="flex items-center">
                  <span className="transition-all font-bold duration-300 group-hover:text-white flex items-center">
                    Read More
                    <span className="ml-2 font-bold transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </span>
                </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
