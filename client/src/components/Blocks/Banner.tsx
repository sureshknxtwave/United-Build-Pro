import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';
// Map IDs to readable titles
const blockTitles: { [key: string]: string } = {
  '1': '4 Inch Concrete Block',
  '2': '6 Inch Concrete Block',
  '3': '8 Inch Concrete Block',
};

const BlocksHero: React.FC = () => {
  const location = useLocation();

  const getPageInfo = () => {
    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];

    // Determine the title based on last segment (ID or fallback)
    const title = blockTitles[lastSegment] || 'Concrete Blocks';

    const breadcrumbs = segments.map((segment, index) => ({
      text: blockTitles[segment] || segment.replace(/-/g, ' ').toUpperCase(),
      path: `/${segments.slice(0, index + 1).join('/')}`,
      isLast: index === segments.length - 1,
    }));

    return { title, breadcrumbs };
  };

  const { title, breadcrumbs } = getPageInfo();

  return (
    <div className="relative">
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px]">
        {/* Background Image */}
        <img
          src={require("../../utils/Blocks/image.png")}
          alt="Background featuring concrete blocks"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center">
          {/* Title */}
          <motion.h1
            className="text-3xl ff sm:text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>

          {/* Breadcrumbs */}
          {/* Breadcrumbs */}
<motion.nav
  aria-label="Breadcrumb"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.6 }}
>
  <ol className="flex items-center space-x-2 text-sm">
    {/* Home Link */}
    <li className="inline-flex items-center">
      <Link to="/" className="text-orange-500 hover:text-orange-400 transition-colors duration-200 flex items-center">
        <span className="mr-1"> <FaHome/></span> Home
      </Link>
    </li>

    {breadcrumbs.map((crumb, index) => (
      <li key={crumb.path} className="inline-flex items-center">
        <span className="text-orange-500 mx-2">›</span>
        {crumb.isLast ? (
          <span className="text-gray-300" aria-current="page">
            {crumb.text}
          </span>
        ) : (
          <Link
            to={crumb.path}
            className="text-orange-500 hover:text-orange-400 transition-colors duration-200"
          >
            {crumb.text}
          </Link>
        )}
      </li>
    ))}
  </ol>
</motion.nav>

        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
      </div>
    </div>
  );
};

export default BlocksHero;
