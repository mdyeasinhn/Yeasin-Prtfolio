import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaChartBar, FaBriefcase, FaGraduationCap, FaComments } from 'react-icons/fa';

const Navbar = () => {
  const navItems = [
    { icon: <FaHome />, label: 'Home', link: '#home' },
    { icon: <FaUser />, label: 'About', link: '#about' },
    { icon: <FaChartBar />, label: 'Projects', link: '#projects' },
    { icon: <FaBriefcase />, label: 'Work', link: '#work' },
    // { icon: <FaGraduationCap />, label: 'Education', link: '#education' },
    { icon: <FaComments />, label: 'Contact', link: '#contact' },
  ];

  return (
    <header className="fixed top-10 left-1/2 transform -translate-x-1/2 z-10">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-800 rounded-full px-6 py-2 flex space-x-6 items-center shadow-lg"
      >
        <ul className="flex space-x-6 text-white">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative tooltip-container"
            >
              <a
                href={item.link}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 transition duration-300"
                title={item.label}
              >
                {item.icon}
              </a>
              {/* Tooltip structure */}
              <span className="tooltip">{item.label}</span>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Tooltip Styles */}
      <style jsx>{`
        .tooltip-container {
          position: relative;
          cursor: pointer;
        }

        .tooltip {
          position: absolute;
          top: -45px;
          left: 50%;
          transform: translateX(-50%);
          padding: 0.5em;
          background: #333;
          color: #e8e8e8;
          border-radius: 8px;
          font-size: 14px;
          opacity: 0;
          transition: opacity 0.3s ease;
          white-space: nowrap;
        }

        .tooltip-container:hover .tooltip {
          opacity: 1;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
