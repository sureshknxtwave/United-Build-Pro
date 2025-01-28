import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SubMenuItem {
  id: number;
  title: string;
  path: string;
}

interface MenuItem {
  id: number;
  title: string;
  path: string;
  subItems?: SubMenuItem[];
}

const navItems: MenuItem[] = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'About us',
    path: '/about',
  },
  {
    id: 3,
    title: 'Services',
    path: '/services',
    subItems: [
      { id: 31, title: 'Building Materials', path: '/services/building-materials' },
      { id: 32, title: 'Joint Ventures', path: '/services/joint-ventures' },
      { id: 33, title: 'RERA Consultants', path: '/services/rera-consultants' },
      { id: 34, title: 'Construction & Interior', path: '/services/construction-interior' },
      { id: 35, title: '2D & 3D Consultant', path: '/services/2d-3d-consultant' },
      { id: 36, title: 'Land Development', path: '/services/land-development' },
    ],
  },
  {
    id: 4,
    title: 'Contact us',
    path: '/contact',
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const location = useLocation(); // Get the current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const isActive = (path: string): boolean => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`bg-white relative ${
        location.pathname === '/' || location.pathname.startsWith('/services') ? 'md:py-[20px] md:bg-gray-100' : ''
      }`}
    >
      <div
        className={`bg-white shadow-md relative ${
          location.pathname === '/' || location.pathname.startsWith('/services') ? 'md:mx-[200px] md:px-5' : 'md:px-[230px]'
        }`}
      >
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-22 w-auto"
                src={require('../../utils/Nav/image.png')}
                alt="United BuildPro"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {navItems.map((item) => (
                <div key={item.id} className="relative group">
                  <Link
                    to={item.path}
                    className={`${
                      item.path === '/' // Home path
                        ? location.pathname === '/' // If Home is active
                          ? 'text-orange-500'
                          : 'text-gray-700'
                        : isActive(item.path) // For other paths
                        ? 'text-orange-500'
                        : 'text-gray-700 hover:text-orange-500'
                    } text-[15px] font-bold tracking-wide transition duration-150 ease-in-out`}
                  >
                    {item.title}
                    {item.subItems && (
                      <span className="ml-1 text-xs inline-block transform translate-y-[-2px]">▼</span>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.subItems && (
                    <div className="hidden group-hover:block absolute z-50 left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.id}
                            to={subItem.path}
                            className={`${
                              isActive(subItem.path) ? 'text-orange-500' : 'text-gray-700'
                            } block px-4 py-3 text-sm hover:bg-orange-500 hover:text-white transition duration-150 ease-in-out`}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <div key={item.id}>
              {!item.subItems ? (
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    item.path === '/' // Home path
                      ? location.pathname === '/' // If Home is active
                        ? 'text-orange-500'
                        : 'text-gray-700'
                      : isActive(item.path) // For other paths
                      ? 'text-orange-500'
                      : 'text-gray-700 hover:text-orange-500'
                  } block px-3 py-2 text-base font-medium transition duration-150 ease-in-out`}
                >
                  {item.title}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className={`${
                      isActive(item.path) ? 'text-orange-500' : 'text-gray-700'
                    } w-full text-left px-3 py-2 text-base font-medium hover:text-gray-900 transition duration-150 ease-in-out`}
                  >
                    {item.title}
                    <span
                      className={`ml-1 text-xs inline-block transition-transform duration-150 ${
                        activeDropdown === item.id ? 'transform rotate-180' : ''
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {item.subItems && activeDropdown === item.id && (
                    <div className="pl-4 bg-gray-50">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.id}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)} // Close menu on navigation
                          className={`${
                            isActive(subItem.path) ? 'text-orange-500' : 'text-gray-700'
                          } block px-3 py-2 text-sm hover:bg-gray-100 transition duration-150 ease-in-out`}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
