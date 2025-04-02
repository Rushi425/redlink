import { Link } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-600 shadow-md text-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
          <Link to="/" className="text-3xl font-bold tracking-wide">
            Red<span className="text-yellow-300">Link</span>
          </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
        <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/blood-banks" className="hover:text-yellow-300 transition">Blood Banks</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/about-us" className="hover:text-yellow-300 transition">About Us</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/contact-us" className="hover:text-yellow-300 transition">Connect Us</Link>
          </motion.li>
        </ul>

      
      </div>

    </nav>
  );
};

export default Navbar;
