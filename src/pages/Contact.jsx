import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Contact Us</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Email</h2>
            <p className="text-gray-600">contact@bloodlink.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Phone</h2>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Address</h2>
            <p className="text-gray-600">123 Blood Drive Street, Healthcare City, HC 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 