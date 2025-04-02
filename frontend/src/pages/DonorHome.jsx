import { motion } from "framer-motion";
import React from "react";

const DonorHome = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-red-700">Welcome, Blood Donor!</h1>
      <p className="text-lg text-gray-600 mt-4">Your contributions can save lives.</p>
    </motion.div>
  );
};

export default DonorHome;
