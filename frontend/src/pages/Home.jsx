import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import React from "react";
import { Heart, Users, Droplet, Database } from "lucide-react";

const stats = [
  { label: "Lives Saved", value: 5200, icon: <Heart className="text-red-600" size={30} /> },
  { label: "Total Donations", value: 12500, icon: <Droplet className="text-red-600" size={30} /> },
  { label: "Active Donors", value: 4200, icon: <Users className="text-red-600" size={30} /> },
  { label: "Requests Fulfilled", value: 7800, icon: <Database className="text-red-600" size={30} /> }
];

const bloodGroupData = [
  { group: "A+", donors: 4500 },
  { group: "A-", donors: 1200 },
  { group: "B+", donors: 4000 },
  { group: "B-", donors: 1000 },
  { group: "O+", donors: 6000 },
  { group: "O-", donors: 1500 },
  { group: "AB+", donors: 1100 },
  { group: "AB-", donors: 500 },
];

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full text-center py-16 bg-red-700 text-white">
        <h1 className="text-5xl font-bold">Welcome to RedLink</h1>
        <p className="text-lg mt-3">Connecting blood donors with seekers efficiently.</p>
        <div className="mt-6 flex space-x-6 justify-center">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link to="/donor-login" className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-100">
              Become a Donor
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link to="/seeker-login" className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-900">
              Find Blood
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="w-full max-w-5xl mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-3">
            {stat.icon}
            <h2 className="text-2xl font-semibold">{stat.value.toLocaleString()}</h2>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Blood Group Availability Section */}
      <div className="w-full max-w-5xl mt-16 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-red-700 text-center mb-6">Blood Group Availability</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={bloodGroupData}>
            <XAxis dataKey="group" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="donors" fill="#ef4444" barSize={40} />
          </BarChart>
        </ResponsiveContainer>

        {/* List of Blood Groups */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-center text-gray-700">Available Blood Groups:</h3>
          <div className="flex flex-wrap justify-center mt-3 gap-4">
            {bloodGroups.map((group, index) => (
              <span key={index} className="bg-red-100 text-red-600 px-4 py-2 rounded-lg shadow-sm font-medium">
                {group}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Information */}
      <div className="w-full max-w-5xl mt-10 mb-10 text-center text-gray-700">
        <p className="text-lg">
          RedLink is committed to making blood donation accessible and saving lives.{" "}
          <Link to="/donor-login" className="text-red-600 font-semibold hover:underline">
            Join our growing community of donors today!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
