import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">About Us</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            BloodLink is a dedicated platform connecting blood donors with those in need. Our mission is to make blood donation accessible, efficient, and life-saving.
          </p>
          <p className="text-gray-600 mb-4">
            Founded in 2024, we've been working tirelessly to bridge the gap between blood donors and recipients. Our platform has helped save countless lives by making the blood donation process more streamlined and accessible.
          </p>
          <p className="text-gray-600">
            We believe that everyone deserves access to life-saving blood when they need it. Through our platform, we're making this vision a reality by connecting donors with recipients in their local communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 